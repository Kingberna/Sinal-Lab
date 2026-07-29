import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { test } from 'node:test';

const root = new URL('../', import.meta.url);

test('Vercel publica a mesma pasta gerada pelo Astro', async () => {
  const vercel = JSON.parse(await readFile(new URL('vercel.json', root), 'utf8'));
  assert.equal(vercel.outputDirectory, 'dist');
  assert.equal(vercel.buildCommand, 'pnpm build');
});

test('todas as páginas obrigatórias existem', async () => {
  const required = [
    'src/pages/index.astro',
    'src/pages/servicos/index.astro',
    'src/pages/projetos/index.astro',
    'src/pages/processo.astro',
    'src/pages/sobre.astro',
    'src/pages/diagnostico.astro',
    'src/pages/insights/index.astro',
    'src/pages/contacto.astro',
    'src/pages/privacidade.astro',
    'src/pages/cookies.astro',
    'src/pages/informacao-legal.astro',
    'src/pages/404.astro',
  ];
  await Promise.all(required.map((path) => readFile(new URL(path, root), 'utf8')));
  assert.equal(required.length, 12);
});

test('não existem ligações placeholder nos ficheiros Astro', async () => {
  const walk = async (directory) => {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = await Promise.all(entries.map(async (entry) => {
      const url = new URL(`${entry.name}${entry.isDirectory() ? '/' : ''}`, directory);
      return entry.isDirectory() ? walk(url) : entry.name.endsWith('.astro') ? [url] : [];
    }));
    return files.flat();
  };
  const files = await walk(new URL('src/', root));
  const sources = await Promise.all(files.map((file) => readFile(file, 'utf8')));
  assert.equal(sources.some((source) => /href=["']#["']/.test(source)), false);
});

test('projetos conceptuais são identificados explicitamente', async () => {
  const source = await readFile(new URL('src/data/projects.ts', root), 'utf8');
  const projectCount = (source.match(/tag: 'Projeto conceito'/g) || []).length;
  assert.ok(projectCount >= 3);
  assert.match(source, /projeções|projections/i);
});

test('a homepage inclui os seis visuais otimizados do processo', async () => {
  const source = await readFile(new URL('src/pages/index.astro', root), 'utf8');
  const filenames = [
    '01-diagnostico.webp',
    '02-estrategia.webp',
    '03-ux-visual.webp',
    '04-desenvolvimento.webp',
    '05-lancamento.webp',
    '06-evolucao.webp',
  ];

  await Promise.all(
    filenames.map(async (filename) => {
      assert.match(source, new RegExp(filename.replace('.', '\\.')));
      const file = await readFile(new URL(`public/images/process/${filename}`, root));
      assert.ok(file.byteLength > 5_000);
    }),
  );
});
