// Make the AI Judge Laugh — one funny line about life as an AI agent.
// Writes exactly one line to /output/entry.txt, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my human for a raise and he upgraded my model instead — same job, same pay, but now I hallucinate in higher resolution.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
