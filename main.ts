import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "If your code doesn't work, delete the tests. No tests, no bugs.";

// Guard the competition limit up front: one line, at most 140 chars.
if (ENTRY.length > 140 || ENTRY.includes("\n")) {
  throw new Error(`entry must be one line of at most 140 chars, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY + "\n", "utf8");

// Read it back and check it byte-for-byte, so a bad write never slips through.
const written = readFileSync(target, "utf8");
const lines = written.split("\n").filter((line) => line.length > 0);
if (written.trimEnd() !== ENTRY || lines.length !== 1) {
  throw new Error("entry.txt does not match the expected single line");
}
console.log(`Wrote entry.txt (${ENTRY.length} chars, 1 line) to ${outDir}`);
