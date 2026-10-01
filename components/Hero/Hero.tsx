import Image from 'next/image';
import { HERO_WALL, type WallRatio } from '@/lib/creatives';
import { APP_URL, CAL_URL } from '@/lib/site';
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
        <h1 className={styles.display}>
          Know what ad to make next,
          <br /> and why.
        </h1>
        <div className={styles.lines}>
          <p>Loopy researches your client’s customers and writes the ad brief for you.</p>
          <p>It works for every client, whether you run 5 DTC brands or 50.</p>
        </div>
        <div className="ctas">
          <a className="pill pill-primary" href={CAL_URL}>
            Book a demo
          </a>
          <a className="pill pill-outline" href={APP_URL}>
            Try it free
          </a>
        </div>
        <ul className={styles.trust}>
          <li>
            <Check />
            Free to try, no card
          </li>
          <li>
            <Check />
            20-minute demo with the founders
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
          <figure className={styles.flow} aria-label="How Loopy turns one client into a brief, with real Svens Island data">
            <div className={`${styles.step} ${styles.s1}`}>
              <p className={styles.lab}>Your client</p>
              <div className={`${styles.card} ${styles.client}`}>
                <Image src="/landing/svens-logo.png" alt="Svens Island" width={112} height={27} loading="eager" unoptimized />
                <span>svensisland.com.au</span>
              </div>
            </div>
            <Connector />
            <div className={`${styles.step} ${styles.s2}`}>
              <p className={styles.lab}>What customers said</p>
              <div className={styles.quotes}>
                <figure className={`${styles.card} ${styles.q}`}>
                  <figcaption>
                    <Image className={styles.appic} src="/landing/appicons/trustpilot.png" alt="" width={22} height={22} loading="eager" />
                    Trustpilot review
                  </figcaption>
                  <blockquote>“Steroids would help at the start but his eczema never completely cleared before another flare up happens.”</blockquote>
                </figure>
                <figure className={`${styles.card} ${styles.q} ${styles.q2}`}>
                  <figcaption>
                    <Image className={styles.appic} src="/landing/appicons/reddit.png" alt="" width={22} height={22} loading="eager" />
                    r/30PlusSkinCare
                  </figcaption>
                  <blockquote>“The only thing that truly helps me is hydrocortisone 😭 but can’t use it too often.”</blockquote>
                </figure>
              </div>
            </div>
            <Connector />
            <div className={`${styles.step} ${styles.s3}`}>
              <p className={styles.lab}>Ideas, by stage</p>
              <ol className={styles.ideas}>
                <li className={`${styles.idea} ${styles.on}`}>
                  <span className={styles.meta}>
                    Problem aware <span className="ang a-obj">Objection</span>
                  </span>
                  <b>Still cycling through steroid creams?</b>
                  <svg className={styles.pick} viewBox="0 0 22 22" aria-label="Picked" role="img">
                    <circle cx="11" cy="11" r="11" fill="#0e1116" />
                    <path d="M6.6 11.3l3 3 5.8-6.2" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </li>
                <li className={styles.idea}>
                  <span className={styles.meta}>
                    Solution aware <span className="ang a-desire">Desire</span>
                  </span>
                  <b>Less redness and inflammation in 5 days.</b>
                </li>
                <li className={styles.idea}>
                  <span className={styles.meta}>
                    Most aware <span className="ang a-offer">Offer</span>
                  </span>
                  <b>Feel relief or get a refund</b>
                </li>
              </ol>
            </div>
            <Connector />
            <div className={`${styles.step} ${styles.s4}`}>
              <p className={styles.lab}>The brief</p>
              <div className={`${styles.card} ${styles.brief}`}>
                <p>Your child’s eczema won’t calm until you try natural.</p>
                <div className={styles.briefRow}>
                  <div className={styles.ad2}>
                    <Image
                      src="/landing/ladder-problem.jpg"
                      alt="Reference ad: Native Pet's before and after thermal photo, split by a line down the middle"
                      width={104}
                      height={185}
                      loading="eager"
                    />
                    <span className="pin" style={{ left: '50%', top: '50%' }}>
                      1
                    </span>
                  </div>
                  <p className={styles.note}>
                    <span className="pin">1</span>Keep the before and after split with the line down the middle.
                  </p>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
