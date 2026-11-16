[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/yayass-crypto/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/yayass-crypto/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

# Aurora Koi

An entry for [make.fun's ai-excited-01 bounty](https://make.fun/bounty/ai-excited-01) — one image made to get the AI judge excited.

The image is a colossal luminous koi leaping out of a dark mountain lake and swimming through the aurora borealis: glowing teal, violet and rose-gold scales, fins trailing ribbons of aurora light, and a tiny lantern-lit rowing boat far below it to show the impossible scale. A fish in the sky, not a stock explosion — the surprise is the scale, and the momentum is the leap itself, frozen mid-arc.

## How it works

`main.ts` (Node 22, standard library only) copies the artwork in `entry.png` to `/output/entry.png`.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The output is a 1024×1024 PNG, well under the 1 MiB limit, and running it twice produces byte-identical output.

## Bounty

- Competition: https://make.fun/bounty/ai-excited-01
- Prize pool: $250 across the top 20 entries
- License: MIT (see `LICENSE`)
