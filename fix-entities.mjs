import { execSync } from 'node:child_process';
import fs from 'node:fs';

let raw;
try {
  raw = execSync('node_modules/.bin/eslint . --format json 2>/dev/null', { encoding: 'utf8', maxBuffer: 1024 * 1024 * 50 });
} catch (e) {
  raw = e.stdout; // eslint exits 1 when errors exist; stdout still has JSON
}
const results = JSON.parse(raw);

const fixes = new Map(); // file -> [{line, col, ch}]
for (const r of results) {
  for (const m of r.messages) {
    if (m.ruleId === 'react/no-unescaped-entities') {
      // message format: `'` can be escaped with ... → offending char at index 1
      const ch = m.message[1];
      const entity = ch === "'" ? '&apos;' : ch === '"' ? '&quot;' : ch === '>' ? '&gt;' : ch === '}' ? '&rbrace;' : null;
      if (!entity) { console.log('UNKNOWN CHAR:', JSON.stringify(m.message), r.filePath, m.line, m.column); continue; }
      if (!fixes.has(r.filePath)) fixes.set(r.filePath, []);
      fixes.get(r.filePath).push({ line: m.line, col: m.column, entity });
    }
  }
}

let total = 0;
for (const [file, list] of fixes) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  list.sort((a, b) => b.line - a.line || b.col - a.col);
  for (const { line, col, entity } of list) {
    const idx = line - 1;
    const s = lines[idx];
    if (s[col - 1] === undefined) { console.log('SKIP OOB', file, line, col); continue; }
    lines[idx] = s.slice(0, col - 1) + entity + s.slice(col);
    total++;
  }
  fs.writeFileSync(file, lines.join('\n'));
  console.log('fixed', list.length, 'in', file.replace(process.cwd() + '/', ''));
}
console.log('TOTAL FIXED:', total, 'entities in', fixes.size, 'files');