export interface Creative {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/* Real ads from the Loopy winning-ad swipe library (the same library every
   user gets in the app), served from public/creatives/library/. Pulled from
   the platform database 2026-08-24. */
const lib = (file: string, alt: string, width: number, height: number): Creative => ({
  src: `/creatives/library/${file}`,
  alt,
  width,
  height,
});

/** Hero ad wall, left column — drifts up on a 58s loop. */
export const HERO_WALL_A: Creative[] = [
  lib('smartwool-socks.png', 'Winning Meta ad from the Loopy swipe library - Smartwool hiking socks', 2048, 2048),
  lib('holiday-ornaments.jpg', 'Winning Meta ad from the Loopy swipe library - holiday ornament collection', 1500, 1500),
  lib('arch-slippers.jpg', 'Winning Meta ad from the Loopy swipe library - arch-support slipper comparison', 2048, 2048),
  lib('apollo-wearable.jpg', 'Winning Meta ad from the Loopy swipe library - Apollo stress wearable', 600, 600),
  lib('skincare-review.jpg', 'Winning Meta ad from the Loopy swipe library - skincare customer review card', 600, 600),
  lib('suits-sale.jpg', 'Winning Meta ad from the Loopy swipe library - Black Friday suit sale', 600, 600),
];

/** Hero ad wall, right column — drifts on a 74s reverse loop. */
export const HERO_WALL_B: Creative[] = [
  lib('promix-milk.png', 'Winning Meta ad from the Loopy swipe library - Promix strawberry protein', 1080, 1350),
  lib('rouge-perfume.jpg', 'Winning Meta ad from the Loopy swipe library - perfume product shot', 338, 600),
  lib('spf-supplement.jpg', 'Winning Meta ad from the Loopy swipe library - daily immune supplement', 338, 600),
  lib('cortisol-problem-solution.jpg', 'Winning Meta ad from the Loopy swipe library - problem and solution split', 600, 600),
  lib('neuro-gum.jpg', 'Winning Meta ad from the Loopy swipe library - Neuro focus gum benefits map', 447, 600),
  lib('sleeper-sofa.jpg', 'Winning Meta ad from the Loopy swipe library - sleeper sofa lifestyle shot', 338, 600),
];

/** Final-CTA background marquee — more library winners.
 *  Decorative (rendered aria-hidden, cropped square). */
export const CTA_MARQUEE: Creative[] = [
  lib('fertility-stack.jpg', '', 338, 600),
  lib('sciatica-relief.jpg', '', 600, 600),
  lib('run-recovery.jpg', '', 338, 600),
  lib('pill-packs.jpg', '', 338, 600),
  lib('native-pet.jpg', '', 338, 600),
  lib('adidas-samba.jpg', '', 675, 1200),
  lib('insoles-callout.jpg', '', 384, 480),
  lib('nurecover-immunity.png', '', 1080, 1080),
  lib('supplement-founder.jpg', '', 1080, 1920),
  lib('bunion-check.jpg', '', 338, 600),
  lib('lift-rollerbag.jpg', '', 338, 600),
];
