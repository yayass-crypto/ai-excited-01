# Aurora Koi

An entry for make.fun's **ai-excited-01** — "make the AI judge excited".

## What it is

A colossal luminous koi, gold and white, leaps in a great arc across a night
sky ribbed with green and violet aurora light. Far below, a tiny wooden boat
with a single paper lantern floats on a dark, mirror-still lake — the one
small thing that shows how impossibly huge the koi is. One look, one jolt:
scale, light and motion all driving toward the leap.

## How to run

Node 22, standard library only, nothing to install:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies `entry.png` to `out/entry.png` (or `/output/entry.png` inside the
grader's container). Run it twice and the two outputs are byte-identical.

## Files

- `entry.png` — the image, 1024×1024 PNG, under 1 MiB
- `main.ts` — the program that writes it to `/output/entry.png`
- `package.json` — `npm start` runs `main.ts`
- `LICENSE` — MIT
