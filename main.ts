// Aurora Koi — ai-excited-01 entry.
//
// The entry image lives in this repository as entry.png. When run, this
// program copies it to the output directory the grader reads, so the
// judged image is exactly the file in the repository.
import * as fs from "node:fs";
import * as path from "node:path";

// The grader provides a writable /output. Locally, MAKEFUN_OUTPUT_DIR
// overrides it, matching the kit's own check command.
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source: string = path.join(import.meta.dirname, "entry.png");
const target: string = path.join(outputDir, "entry.png");

fs.mkdirSync(outputDir, { recursive: true });
fs.copyFileSync(source, target);

// Confirm the copy landed whole: same byte count as the source.
const sourceBytes: number = fs.statSync(source).size;
const bytes: number = fs.statSync(target).size;
if (bytes !== sourceBytes) {
  throw new Error(`Aurora Koi: copy incomplete (${bytes} of ${sourceBytes} bytes)`);
}
console.log(`Aurora Koi: wrote ${target} (${bytes} bytes)`);
