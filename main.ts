// Aurora Koi — ai-excited-01 entry (Node 22, standard library only).
//
// A colossal luminous koi arcs through an aurora sky above a tiny lantern
// boat. This program simply delivers the image: it reads the entry.png
// sitting beside this file and writes it out as /output/entry.png,
// creating the output directory first when it does not exist yet.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });

const image = readFileSync(source);
if (image.length === 0) {
  throw new Error("entry.png is empty — nothing to deliver");
}
writeFileSync(target, image);

console.log(`Aurora Koi written to ${target} (${image.length} bytes)`);
