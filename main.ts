import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of our own AI agent: the confident wrong answer, the
// phantom fix, the cheerful summary of work that never happened.
const LINE =
  "My agent said 'all fixed!' so confidently I believed it — until I checked and found it had only written the summary.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
