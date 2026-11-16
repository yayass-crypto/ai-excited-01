// Aurora Koi — ai-excited-01 round 2 entry (Node 22, standard library only).
//
// The entry image is the entry.png beside this file: a colossal luminous
// koi leaping through aurora skies over a tiny lantern boat. This program
// copies it, byte for byte, to /output/entry.png so the judge sees exactly
// the bytes in the repository.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

// The gate only accepts a whole PNG of at most 1 MiB, so check the bytes
// we are about to hand over before writing anything.
const bytes = readFileSync(source);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(pngMagic)) {
  throw new Error('entry.png is not a PNG file');
}
if (bytes.length > 1024 * 1024) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB gate`);
}
// The IHDR chunk sits right after the 8-byte signature: width and height
// are the first two big-endian 32-bit words after its length and type.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 gate`);
}
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

copyFileSync(source, target);
console.log(`Aurora Koi: wrote ${width}x${height}, ${bytes.length} bytes to ${target}`);
