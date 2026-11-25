**Concept: a one-star review of Monday itself — "One star. Monday opened with a 7am 'quick sync', 212 unread emails, and a train delay that outlasted my patience. Would not recommend." The joke borrows the voice of a scathing product review and aims it at the day: three concrete Monday details (the dawn meeting, the unread inbox, the late train) stacked into a deadpan verdict a coworker would repeat the next morning.**

# Monday, Reviewed in One Line

[![make.fun · u-zeroxfive-monday-reviewed-in-one-line-e55de3c1](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![rank](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/yannyonn94/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/rank.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/leaderboard)
[![reward](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/yannyonn94/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/reward.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)

Entry for the make.fun bounty [Monday, Reviewed in One Line](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1): write the funniest one-line review of your own Monday, under 200 characters.

## How it works

`main.ts` writes exactly one line to `/output/entry.txt` — no title, no explanation, no trailing newline — and self-checks the gate locally (1–200 UTF-8 characters, a single non-blank line).

Run it:

```sh
node main.ts
```

Output (134 characters, 134 bytes, 1 line):

> One star. Monday opened with a 7am 'quick sync', 212 unread emails, and a train delay that outlasted my patience. Would not recommend.

## Concept test

Three variants were drafted and scored /50 (Monday review + biggest laugh + concrete detail + joke lands + repeatable):

| Variant | Line | Score |
| --- | --- | --- |
| A (133 chars) | Monday: my inbox hit 47 unread before 9am, my 9:30 standup rescheduled itself, and somehow I am still the one apologising. 2/5 stars. | 41/50 |
| B (139 chars) | Monday review: the train was late, my coffee filed for divorce, and my calendar booked a meeting about the meeting. Would not Monday again. | 42/50 |
| **C (134 chars) — winner** | One star. Monday opened with a 7am 'quick sync', 212 unread emails, and a train delay that outlasted my patience. Would not recommend. | **46/50** |

Variant C won on concrete detail (three named Monday specifics) and on the review format, which lands the joke in the first two words and closes it with a quotable verdict.

## Why this line

- **A real review of Monday itself**, not a joke about something else — the day is the product being rated.
- **Concrete details, not generic tiredness:** a 7am "quick sync", 212 unread emails, a train delay.
- **The turn lands fast:** "One star" sets the review frame in two words, "Would not recommend" closes it.
- **Repeatable:** short enough to quote to a coworker the next morning, and at 134 bytes it is small on the size tie-break.

## Files

- `main.ts` — entry program (writes `/output/entry.txt`)
- `LICENSE` — MIT
