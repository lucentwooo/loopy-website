import Image from 'next/image';
import styles from './InsideBrief.module.css';

/* Real Svens Island concepts, one per awareness stage, each next to the
   reference ad Loopy built it from. */
const STAGES = [
  {
    stage: 'Unaware',
    gloss: 'doesn’t know there’s a problem yet',
    a: 0.28,
    img: '/landing/ladder-unaware.jpg',
    pos: '50% 100%',
    alt: 'Reference ad: a child’s shoe insole with a line of text on the photo',
    angle: 'Desire',
    angleClass: 'a-desire',
    headline: 'When itchy skin steals your child’s comfort',
  },
  {
    stage: 'Problem aware',
    gloss: 'knows the problem',
    a: 0.45,
    img: '/landing/ref-2am.jpg',
    alt: 'Reference ad: Nomend’s them versus us layout, what people tried beside the product',
    angle: 'Pain point',
    angleClass: 'a-pain',
    headline: 'Child still scratching at 2am?',
  },
  {
    stage: 'Solution aware',
    gloss: 'knows fixes exist',
    a: 0.62,
    img: '/landing/ladder-solution.png',
    pos: '50% 50%',
    alt: 'Reference ad: a benefit callout list beside the product',
    angle: 'Desire',
    angleClass: 'a-desire',
    headline: 'Less redness and inflammation in 5 days.',
  },
  {
    stage: 'Product aware',
    gloss: 'knows your product',
    a: 0.8,
    img: '/landing/ref-reviewcard.jpg',
    alt: 'Reference ad: a customer review card above the product jars',
    angle: 'Proof',
    angleClass: 'a-proof',
    headline: '150,000+ happy customers trust Miracle Manuka',
  },
  {
    stage: 'Most aware',
    gloss: 'ready to buy',
    a: 1,
    img: '/landing/ladder-most.jpg',
    pos: '50% 50%',
    alt: 'Reference ad: a customer comment above the product with a price sticker',
    angle: 'Offer',
    angleClass: 'a-offer',
    headline: 'Feel relief or get a refund',
  },
];

export function InsideBrief() {
  return (
    <section className="section" id="brief">
      <div className="wrap sec-head">
        <h2 className="sh">Each brief sells the same product five different ways.</h2>
        <p className="sub">
          Every idea speaks to a buyer at a different stage, so you test new angles instead of tiny variations.
        </p>
      </div>
      <div className={styles.showWrap}>
        <div className={styles.show}>
          <div className={styles.scroll}>
            <ol className={styles.row}>
              {STAGES.map((s) => (
                <li key={s.stage} className={styles.col}>
                  <div className={styles.stop} style={{ '--a': s.a }}>
                    <i />
                    <strong>{s.stage}</strong>
                    <span>{s.gloss}</span>
                  </div>
                  <article className={styles.card}>
                    <div className={styles.img}>
                      <Image
                        src={s.img}
                        alt={s.alt}
                        width={232}
                        height={232}
                        style={s.pos ? { '--pos': s.pos } : undefined}
                      />
                    </div>
                    <span className={`ang ${s.angleClass}`}>{s.angle}</span>
                    <h3>{s.headline}</h3>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className={styles.cap}>
          These are real ideas Loopy wrote for svensisland.com.au, each next to the ad it borrowed its layout from.
        </p>
      </div>
    </section>
  );
}
