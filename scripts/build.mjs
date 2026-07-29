import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';

await mkdir('dist/src', { recursive: true });
let html = await readFile('index.html', 'utf8');
html = html.replace('href="/src/style.css"', 'href="./src/style.css"')
  .replace('src="/src/main.js"', 'src="./src/main.js"');
await writeFile('dist/index.html', html);
await cp('src', 'dist/src', { recursive: true });
console.log('Built static site in dist/');
