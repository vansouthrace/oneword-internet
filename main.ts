import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Internet in One Word: the whole internet, in a single word.
// Tabpocalypse — tab + apocalypse. Every tab you ever opened, still open,
// still screaming, multiplying faster than you can close them. That is the
// entire internet: not one site, not one app, just the endless sprawl of
// tabs you swore you would read later.
const ENTRY = "Tabpocalypse";

// The gate wants 1-30 characters, a single word, nothing else: no trailing
// newline, no spaces, no explanation. One word, exactly as written.
if (!/^[^\s]+$/.test(ENTRY) || ENTRY.length > 30) {
  throw new Error("entry must be a single word of 1-30 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
