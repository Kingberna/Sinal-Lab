import { access, readFile, readdir } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';

const root = resolve('dist');
const htmlFiles = [];

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) await walk(path);
      else if (entry.name.endsWith('.html')) htmlFiles.push(path);
    }),
  );
};

const targetCandidates = (pathname) => {
  const clean = decodeURIComponent(pathname).replace(/^\/+/, '').replace(/\/+$/, '');
  if (!clean) return [join(root, 'index.html')];
  if (extname(clean)) return [join(root, clean)];
  return [join(root, `${clean}.html`), join(root, clean, 'index.html')];
};

const exists = async (paths) => {
  for (const path of paths) {
    try {
      await access(path);
      return true;
    } catch {
      // Continue to the next static-output candidate.
    }
  }
  return false;
};

await walk(root);

const missing = [];
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const hrefs = [...html.matchAll(/\shref=(?:"([^"]+)"|'([^']+)')/g)].map((match) => match[1] || match[2]);
  for (const href of new Set(hrefs)) {
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
    let url;
    try {
      url = new URL(href, 'https://sinal.local');
    } catch {
      missing.push({ file, href, reason: 'URL inválido' });
      continue;
    }
    if (url.origin !== 'https://sinal.local') continue;
    if (!(await exists(targetCandidates(url.pathname)))) {
      missing.push({ file, href, reason: 'destino não encontrado em dist' });
    }
  }
}

if (missing.length) {
  console.error('Foram encontradas ligações internas inválidas:');
  for (const item of missing) {
    console.error(`- ${item.file.replace(`${root}\\`, '')}: ${item.href} (${item.reason})`);
  }
  process.exitCode = 1;
} else {
  console.log(`Links internos verificados em ${htmlFiles.length} páginas HTML.`);
}
