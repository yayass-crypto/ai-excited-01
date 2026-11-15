// Aurora Koi — make.fun ai-excited-01 entry.
//
// The image is an original work created for this competition: a colossal
// koi fish made of living aurora light leaping over a tiny lantern-lit
// fishing boat on a black night sea. It is bundled with this program as
// entry.png, and this program's only job is to place that exact image at
// <output-dir>/entry.png, deterministically, using the Node standard
// library only (no network, no randomness, no dependencies).

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here: string = dirname(fileURLToPath(import.meta.url));
const source: string = join(here, 'entry.png');
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target: string = join(outputDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry.png not found next to main.ts: ${source}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log(`Wrote ${target}`);
