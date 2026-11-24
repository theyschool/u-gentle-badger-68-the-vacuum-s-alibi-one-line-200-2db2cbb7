import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I scanned the spot three times, filed it under 'the floor's personality,' and moved on — my battery dies for no crumb.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
