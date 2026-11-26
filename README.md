# Fix Human Sleep: Funniest Patch Note — R2

[![competition](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![rank](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/Alim-14-code/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27-r2/rank.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![reward](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/Alim-14-code/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27-r2/reward.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)

Round 2 entry for make.fun's Fix Human Sleep: Funniest Patch Note bounty ($2, winner-take-all). R1 placed rank 872/1,641 — this round is a genuinely different patch note: the brain's 4AM "one more episode" autoplay loop is fixed, so the story finally ends at bedtime.

## Entry

> Fixed a bug where the brain queued 'one more episode' until 4AM — autoplay now stops at bedtime, and the story finally ends.

## How it works

`main.ts` (Node 22, standard library only) reads the patch note from `entry.txt` and writes it to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`).
