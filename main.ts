// Monday, Reviewed in One Line — entry program.
// Writes the winning one-line review of my own Monday to /output/entry.txt.
// The line is a one-star review of the day itself: a 7am "quick sync",
// 212 unread emails, and a train delay that outlasted my patience.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. Monday opened with a 7am 'quick sync', 212 unread emails, and a train delay that outlasted my patience. Would not recommend.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Local gate self-check (mirrors the sealed scorer): 1-200 UTF-8 chars,
// exactly one line, no trailing newline, not only whitespace.
const chars = [...ENTRY].length;
const bytes = Buffer.byteLength(ENTRY, "utf8");
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} chars, gate needs 1-200`);
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
console.log(`entry.txt written: ${chars} chars, ${bytes} bytes, 1 line`);
