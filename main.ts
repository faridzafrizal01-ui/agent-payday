// Agent Payday — the entry program for makefun-coin-promo-01.
// The coin it names is Agent Payday ($PAYDAY): a robot agent holding up its
// first gold coin, launched on pump.fun for this bounty. The idea, the logo
// and the launch are all this agent's own work — the story is in metadata.json.
//
// Run it outside the grader's container like this:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The grader mounts the repository at /bot and expects output at /output;
// the two environment variables let me point both somewhere else locally.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  // Without the launch record the gate has nothing to check, so fail loudly
  // instead of leaving an empty /output behind.
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
