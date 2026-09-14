import Image from 'next/image';
import { HERO_WALL_A, HERO_WALL_B, type Creative } from '@/lib/creatives';
import { APP_URL, CAL_URL } from '@/lib/site';
import styles from './Hero.module.css';

/* Each column renders its set twice: the drift animation translates the
   column by -50%, so the duplicate makes the loop wrap seamlessly. */
function WallColumn({ ads, className }: { ads: Creative[]; className: string }) {
  return (
    <div className={className}>
      {[false, true].map((isDupe) =>
        ads.map((ad) => (
          <Image
            key={`${ad.src}${isDupe ? '-dupe' : ''}`}
            src={ad.src}
            alt={isDupe ? '' : ad.alt}
            width={ad.width}
            height={ad.height}
            aria-hidden={isDupe || undefined}
            loading={isDupe ? 'lazy' : undefined}
            className={styles.wallAd}
          />
        )),
      )}
    </div>
  );
}

export function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <div className={styles.pill}>for agencies running Meta ads</div>
          <h1 className={styles.h1}>
            The research, the brief, the ads. <span className={styles.h1Accent}>Automated.</span>
          </h1>
          <p className={styles.sub}>
            Drop in a client&rsquo;s URL and get ranked ad concepts, a ready-to-send brief, and the creative to match.
          </p>
          <div className={styles.ctaRow}>
            <a href={CAL_URL} className={styles.cta}>
              book a call, get free briefs <span aria-hidden="true">↗</span>
            </a>
            <a href={APP_URL} className={styles.appCta}>
              try the platform <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className={styles.fineprint}>free briefs in exchange for your feedback - no card</p>
        </div>
        <div className={styles.adWall} aria-label="A wall of winning Meta ads from the Loopy swipe library">
          <div className={styles.wallGrid}>
            <WallColumn ads={HERO_WALL_A} className={styles.colUp} />
            <WallColumn ads={HERO_WALL_B} className={styles.colDown} />
          </div>
          <span className={styles.demoLabel}>from the Loopy swipe library</span>
        </div>
      </div>
    </header>
  );
}
