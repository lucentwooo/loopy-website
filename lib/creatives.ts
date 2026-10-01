/* Real ads from the Loopy winning-ad swipe library (the same library every
   user gets in the app), served from public/creatives/library/. Pulled from
   the platform database 2026-08-24. Two wall tiles are real reference ads
   from the Svens Island briefs, in public/landing/. */

export type WallRatio = '9/16' | '1/1' | '4/5' | '3/4';
export type WallTile = { src: string; ratio: WallRatio };
export type WallColumn = { offset: number; tiles: WallTile[] };

const t = (src: string, ratio: WallRatio): WallTile => ({ src, ratio });

/** Hero swipe wall, left to right. Every column starts `offset` px above the
 *  wall and runs past its bottom, so no gap shows outside the edge fades. */
export const HERO_WALL: WallColumn[] = [
  { offset: -90, tiles: [t('/creatives/library/suits-sale.jpg', '1/1'), t('/creatives/library/bunion-check.jpg', '9/16'), t('/creatives/library/smartwool-socks.png', '1/1'), t('/creatives/library/fertility-stack.jpg', '9/16')] },
  { offset: -60, tiles: [t('/creatives/library/rouge-perfume.jpg', '9/16'), t('/creatives/library/holiday-ornaments.jpg', '1/1'), t('/creatives/library/run-recovery.jpg', '9/16'), t('/creatives/library/apollo-wearable.jpg', '1/1')] },
  { offset: -130, tiles: [t('/creatives/library/arch-slippers.jpg', '1/1'), t('/creatives/library/adidas-samba.jpg', '9/16'), t('/creatives/library/skincare-review.jpg', '1/1'), t('/creatives/library/insoles-callout.jpg', '4/5')] },
  { offset: -30, tiles: [t('/creatives/library/lift-rollerbag.jpg', '9/16'), t('/creatives/library/promix-milk.png', '4/5'), t('/creatives/library/cortisol-problem-solution.jpg', '1/1'), t('/creatives/library/native-pet.jpg', '9/16')] },
  { offset: -150, tiles: [t('/creatives/library/spf-supplement.jpg', '9/16'), t('/landing/stage-most.jpg', '1/1'), t('/creatives/library/sciatica-relief.jpg', '1/1'), t('/creatives/library/sleeper-sofa.jpg', '9/16')] },
  { offset: -80, tiles: [t('/creatives/library/nurecover-immunity.png', '1/1'), t('/creatives/library/pill-packs.jpg', '9/16'), t('/creatives/library/neuro-gum.jpg', '3/4'), t('/creatives/library/holiday-ornaments.jpg', '1/1')] },
  { offset: -170, tiles: [t('/creatives/library/supplement-founder.jpg', '9/16'), t('/creatives/library/smartwool-socks.png', '1/1'), t('/creatives/library/fertility-stack.jpg', '9/16'), t('/creatives/library/arch-slippers.jpg', '1/1')] },
  { offset: -40, tiles: [t('/landing/stage-problem.jpg', '1/1'), t('/creatives/library/adidas-samba.jpg', '9/16'), t('/creatives/library/suits-sale.jpg', '1/1'), t('/creatives/library/lift-rollerbag.jpg', '9/16')] },
  { offset: -110, tiles: [t('/creatives/library/bunion-check.jpg', '9/16'), t('/creatives/library/apollo-wearable.jpg', '1/1'), t('/creatives/library/smartwool-socks.png', '1/1'), t('/creatives/library/cortisol-problem-solution.jpg', '1/1')] },
  { offset: -20, tiles: [t('/creatives/library/nurecover-immunity.png', '1/1'), t('/creatives/library/pill-packs.jpg', '9/16'), t('/creatives/library/skincare-review.jpg', '1/1'), t('/creatives/library/spf-supplement.jpg', '9/16')] },
];

/** Final-CTA peek row: seven library ads cropped square. Decorative. */
export const FINAL_PEEK: string[] = [
  '/creatives/library/native-pet.jpg',
  '/creatives/library/run-recovery.jpg',
  '/creatives/library/skincare-review.jpg',
  '/creatives/library/arch-slippers.jpg',
  '/creatives/library/spf-supplement.jpg',
  '/creatives/library/neuro-gum.jpg',
  '/creatives/library/smartwool-socks.png',
];
