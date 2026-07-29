import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';

await rm('public', { recursive: true, force: true });
await mkdir('public/src', { recursive: true });
let html = await readFile('index.html', 'utf8');
html = html.replace('href="/src/style.css"', 'href="./src/style.css"')
  .replace('src="/src/main.js"', 'src="./src/main.js"');
await writeFile('public/index.html', html);
await cp('src', 'public/src', { recursive: true });
console.log('Built static site in public/');
