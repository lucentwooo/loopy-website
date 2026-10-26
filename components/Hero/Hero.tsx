import Image from 'next/image';
import { HERO_WALL, type WallRatio } from '@/lib/creatives';
import { FREE_AD_URL } from '@/lib/site';
import styles from './Hero.module.css';

const RATIO: Record<WallRatio, { className: string; height: number }> = {
  '9/16': { className: styles.r916, height: 327 },
  '1/1': { className: styles.r11, height: 184 },
  '4/5': { className: styles.r45, height: 230 },
  '3/4': { className: styles.r34, height: 245 },
};

function Check() {
  return (
    <svg className={styles.ck} viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="8" />
      <path d="M4.7 8.3l2.1 2.1 4.5-4.7" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Connector() {
  return (
    <svg className={styles.con} viewBox="0 0 40 12" aria-hidden="true">
      <path d="M5 6h28M29 2.2 33 6l-4 3.8" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="wrap">
        <h1 className={styles.display}>Remake your competitors’ winning ads for your brand.</h1>
        <div className={styles.lines}>
          <p>Paste your website and we’ll make your first one in about 5 minutes.</p>
        </div>
        <div className="ctas">
          <a className="pill pill-primary" href={FREE_AD_URL}>
            Make my free ad
          </a>
        </div>
        <ul className={styles.trust}>
          <li>
            <Check />
            No card needed
          </li>
          <li>
            <Check />
            Built with a 7-9 figure DTC agency
          </li>
        </ul>
      </div>

      <div className={`${styles.wall} ${styles.wallHero}`}>
        <div className={styles.wallBg} aria-label="Ads from the Loopy swipe library">
          <div className={styles.wallCols}>
            {HERO_WALL.map((col, i) => (
              <div key={i} className={styles.col} style={{ '--o': `${col.offset}px` }}>
                {col.tiles.map((tile, j) => (
                  <Image
                    key={j}
                    className={`${styles.ad} ${RATIO[tile.ratio].className}`}
                    src={tile.src}
                    alt=""
                    width={184}
                    height={RATIO[tile.ratio].height}
                    loading="eager"
                  />
                ))}
              </div>
            ))}
          </div>
          <div className={styles.fade} />
        </div>
        <div className={styles.float}>
          <figure className={styles.flow} aria-label="A competitor’s ad and the same ad made for Magic Spoon">
            <div className={styles.step}>
              <p className={styles.lab}>Their ad, 42 days</p>
              <div className={styles.card}>
                <Image src="/landing/free-ad-theirs.jpg" alt="Kodiak Cakes ad that has run for 42 days" width={280} height={350} loading="eager" />
                <span>Kodiak Cakes</span>
              </div>
            </div>
            <Connector />
            <div className={styles.step}>
              <p className={styles.lab}>Your ad</p>
              <div className={styles.card}>
                <Image src="/landing/free-ad-ours.jpg" alt="The same ad remade for Magic Spoon" width={280} height={350} loading="eager" />
                <span>Magic Spoon</span>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
