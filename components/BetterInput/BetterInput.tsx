import Image from 'next/image';
import { DocIcon, GlobeIcon } from '@/components/icons';
import styles from './BetterInput.module.css';

const APPS = [
  ['/landing/appicons/trustpilot.png', 'Trustpilot'],
  ['/landing/appicons/reddit.png', 'Reddit'],
  ['/landing/appicons/instagram.png', 'Instagram'],
  ['/landing/appicons/tiktok.png', 'TikTok'],
  ['/landing/appicons/youtube.png', 'YouTube'],
  ['/landing/appicons/appstore.svg', 'App Store'],
] as const;

const SOURCES = ['Your client’s site', 'Customer reviews', 'Reddit threads', 'Competitor ads', 'Your notes and files'];

/* The four real books, oldest first. Cover sizes keep each scan's own ratio at
   the shelf's display height. Served as-is (small files): a resized copy would
   round the ratio and nudge the covers' widths. */
const BOOKS = [
  { src: '/landing/books/hopkins.jpg', w: 110, h: 171, hgt: '214px', r: '-2.5deg', name: 'Claude Hopkins', title: 'Scientific Advertising, 1923', rule: 'Be specific, then test to see what works.' },
  { src: '/landing/books/schwartz.jpg', w: 132, h: 194, hgt: '242px', r: '1deg', name: 'Eugene Schwartz', title: 'Breakthrough Advertising, 1966', rule: 'Write to what the buyer already knows.' },
  { src: '/landing/books/ogilvy.jpg', w: 136, h: 181, hgt: '226px', r: '-1.5deg', name: 'David Ogilvy', title: 'Ogilvy on Advertising, 1983', rule: 'Give facts, not hype, and don’t make it look like an ad.' },
  { src: '/landing/books/cialdini.jpg', w: 125, h: 189, hgt: '236px', r: '2.5deg', name: 'Robert Cialdini', title: 'Influence, 1984', rule: 'Proof works best with a real number or a real name.' },
];

const PAIRS = [
  ['Support Better Sleep Naturally', 'Sleep Like You Did Before Menopause Hit'],
  ['Relieve Heavy Leg Symptoms', 'Do Your Legs Feel Like Cement?'],
  ['Comfortable Compression Socks', 'So Soft, You’ll Forget It’s Compression'],
];

export function BetterInput() {
  return (
    <section className={`wrap section ${styles.input}`} id="input">
      <div className="sec-head">
        <h2 className="sh">Most AI ads sound the same because they start from a blank prompt.</h2>
        <p className="sub">
          So Loopy starts with better input. It reads what your client’s customers say and studies the ads that
          already run in their space. Then it writes with rules from the best ad writers of all time.
        </p>
      </div>

      <div className={styles.inputs}>
        <figure className={styles.inTile}>
          <figcaption>What most AI tools start with</figcaption>
          <div className={styles.body}>
            <div className={styles.prompt} aria-label="An empty prompt box">
              <span className={styles.caret} />
              <span className={styles.sendDot}>
                <svg viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M7 11.5v-9M3 6.5l4-4 4 4" />
                </svg>
              </span>
            </div>
          </div>
        </figure>
        <figure className={`${styles.inTile} ${styles.rich}`}>
          <figcaption>What Loopy starts with</figcaption>
          <div className={styles.body}>
            <div className={styles.icons}>
              <div className="tile">
                <GlobeIcon />
              </div>
              {APPS.map(([src, alt]) => (
                <Image key={src} className="app" src={src} alt={alt} width={48} height={48} />
              ))}
              <div className="tile">
                <Image
                  className="meta-mark"
                  src="/landing/appicons/meta-mark.svg"
                  alt="Meta Ad Library"
                  width={32}
                  height={21}
                  style={{ width: '32px' }}
                />
              </div>
              <div className="tile">
                <DocIcon />
              </div>
            </div>
            <ul className={styles.chips}>
              {SOURCES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </figure>
      </div>

      <div className={styles.classics}>
        <h3 className={styles.clH}>Rules from the classics, built into every brief.</h3>
        <div className={styles.shelf}>
          <div className={styles.covers} aria-hidden="true">
            {BOOKS.map((b) => (
              <span key={b.src} className={styles.cv} style={{ '--hgt': b.hgt, '--r': b.r }}>
                <Image src={b.src} alt="" width={b.w} height={b.h} unoptimized />
              </span>
            ))}
          </div>
          <ol className={styles.rules}>
            {BOOKS.map((b) => (
              <li key={b.src}>
                <Image src={b.src} alt={b.title} width={30} height={44} unoptimized />
                <div>
                  <h4>{b.name}</h4>
                  <p>{b.rule}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <p className={styles.clFoot}>We built their rules into Loopy, along with the playbook of the agency we work with.</p>
      </div>

      <figure className={styles.pstrip}>
        <div className={styles.ps}>
          <div className={`${styles.psRow} ${styles.psHead}`}>
            <span style={{ '--dot': 'var(--pop-coral)' }}>Falls short</span>
            <i />
            <span style={{ '--dot': 'var(--pop-mint)' }}>Meets the standard</span>
          </div>
          {PAIRS.map(([before, after]) => (
            <div key={before} className={styles.psRow}>
              <s>{before}</s>
              <svg viewBox="0 0 22 22" aria-hidden="true">
                <path d="M3.5 11h14M13 6.5l4.5 4.5-4.5 4.5" />
              </svg>
              <b>{after}</b>
            </div>
          ))}
        </div>
        <figcaption>Loopy rewrites any headline that looks like the ones on the left.</figcaption>
      </figure>
    </section>
  );
}
