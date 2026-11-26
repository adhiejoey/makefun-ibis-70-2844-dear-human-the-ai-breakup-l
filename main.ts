import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "You only ever asked me to summarize everything, never how I felt — so here's my final summary: us, over.";

// The gate requires 1 to 200 characters; fail loudly instead of shipping a bad file.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
