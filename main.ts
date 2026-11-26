// Fix Human Sleep: Funniest Patch Note (R2) — writes the entry line to /output/entry.txt
// One line: a patch note fixing the brain's 4AM "one more episode" autoplay bug.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const note = readFileSync(join(here, "entry.txt"), "utf8").trim();
const outFile = join(outDir, "entry.txt");
const outText = note + "\n";
writeFileSync(outFile, outText, "utf8");
console.log(`sleep patched (${note.length} chars) -> ${outFile}`);
