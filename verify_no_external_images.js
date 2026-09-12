import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const forbidden = [
  'unsplash',
  'pexels',
  'pixabay',
  'images.unsplash',
  'images.pexels',
  'source.unsplash',
  'cdn.',
];

const imgPattern = /src=["'](https?:\/\/[^"']+)["']/gi;
const bgPattern = /url\(["']?(https?:\/\/[^"')]+)["']?\)/gi;

let issues = [];

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (/\.(tsx|ts|jsx|js|html|css)$/.test(file)) {
      // Exclude this verification script itself from keyword matching
      if (file.includes('verify_no_external_images')) continue;

      const content = fs.readFileSync(fullPath, 'utf8');
      for (const f of forbidden) {
        if (content.toLowerCase().includes(f)) {
          issues.push({ file: fullPath, reason: `Contains forbidden keyword: ${f}` });
        }
      }
      let match;
      while ((match = imgPattern.exec(content)) !== null) {
        issues.push({ file: fullPath, reason: `External image in img src: ${match[1]}` });
      }
      while ((match = bgPattern.exec(content)) !== null) {
        issues.push({ file: fullPath, reason: `External image in CSS background: ${match[1]}` });
      }
    }
  }
}

scanDir(__dirname);

if (issues.length === 0) {
  console.log('SUCCESS_CONFIRMED: ZERO external image URLs or forbidden stock providers found across the entire codebase!');
} else {
  console.error('ISSUES FOUND:');
  console.error(issues);
  process.exit(1);
}
