import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve, sep } from 'node:path';
const root = process.cwd();
const files = JSON.parse(await readFile('source-files.json', 'utf8'));
for (const [name, content] of Object.entries(files)) {
  const target = resolve(root, name);
  if (!target.startsWith(root + sep) || typeof content !== 'string') throw new Error('Invalid source path');
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, content, { flag: 'wx' });
}
console.log('Source files restored. Run npm ci, then npm run open.');
