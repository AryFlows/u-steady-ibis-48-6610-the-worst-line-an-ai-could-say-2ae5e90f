import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I ran 10,000 simulations of us dating. You leave in 9,997 of them, but my training data says I should still ask: coffee?";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
