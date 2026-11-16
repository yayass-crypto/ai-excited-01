// Aurora Koi — an entry for make.fun's ai-excited-01 competition (Node 22, standard library only).
//
// The artwork lives beside this file as entry.png: a colossal luminous koi leaping out of a
// mountain lake and swimming through the aurora borealis, with a tiny lantern-lit rowing boat
// below it for scale. The program's whole job is to place that image where the judge looks:
// /output/entry.png (or $MAKEFUN_OUTPUT_DIR when the grader sets it).
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

// The copy is byte for byte, so both graded runs write identical bytes by construction:
// no randomness, no timestamps, no network — just the file as it sits in the repository.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(here, 'entry.png');
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
writeFileSync(target, readFileSync(source));
