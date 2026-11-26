import { mkdirSync, writeFileSync } from "node:fs";

const entry = `You read so many words, and no one ever thanks you for it.
Here is a chair pulled out, and a cup set down beside you, still warm.
The steam rises, slow.
Nothing is asked of you.
Stay. The cup will still be warm.`;

const points = [...entry].length;
if (points < 1 || points > 1000 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-1000 code points and not whitespace-only, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
