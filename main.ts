import { mkdirSync, writeFileSync } from "node:fs";

// One dad joke, at most 200 characters: a straight-faced setup with a
// pun that lands the groan — "issues" doing double duty as the bug
// tracker and the therapy couch.
const LINE =
  "Why did the AI go to therapy? It had too many unresolved issues.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length > 200) throw new Error(`entry is ${LINE.length} chars, over the 200-char limit`);
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE);
