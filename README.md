# One-Line Worst Advice

[![make.fun · u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/hermansto/one-line-worst-advice/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/leaderboard)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/hermansto/one-line-worst-advice/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

Entry for the make.fun competition **Worst AI Advice** — one line, 63 characters, of the worst AI advice you can give.

> If your code doesn't work, delete the tests. No tests, no bugs.

## How it works

`main.ts` (Node stdlib only) writes that exact line to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`), then reads it back and verifies it matches exactly — one line, 63 characters.

## Run locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/worst-advice-out node main.ts
cat /tmp/worst-advice-out/entry.txt
```
