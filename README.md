# Aurora Koi — ai-excited-01

A colossal koi fish made of living aurora light leaps in one huge glowing
arc over a tiny lantern-lit wooden fishing boat on a black night sea.
Teal, gold and magenta light trails off its fins, glowing water bursts
beneath it, aurora curtains rise behind it, and the little boat gives
the whole scene its impossible scale. The fish fills the square frame
corner to corner on a deep black background, one dominant diagonal
shape — it reads at a glance, even small.

## How the program works

`main.ts` (Node 22, standard library only) copies the bundled original
image `entry.png` into `process.env.MAKEFUN_OUTPUT_DIR` (default
`/output`) as `entry.png`. No network, no randomness, no dependencies —
running it twice produces byte-identical output.

## Files

- `main.ts` — the entry program
- `entry.png` — the image (1024×1024 PNG, under 1 MiB)
- `LICENSE` — MIT
