import type { Metadata } from 'next';
import Image from 'next/image';
import { APP_URL } from '@/lib/site';
import { Compare } from './Compare';
import { HeroCarousel } from './HeroCarousel';
import { OfferForm } from './OfferForm';
import { ReadyBy } from './ReadyBy';
import { StickyBar } from './StickyBar';
import styles from './starter.module.css';

export const metadata: Metadata = {
  title: 'Your next 10 Meta ads, ready within the hour - Loopy',
  description:
    "We rebuild your competitors' best-running ads with your product and your customers' words. You get 10 ready-to-test statics within an hour for $99.",
  robots: { index: false, follow: true },
};

const IMG = {
  apollo: '/creatives/library/apollo-wearable.jpg',
  promix: '/creatives/library/promix-milk.png',
  smartwool: '/creatives/library/smartwool-socks.png',
  sciatica: '/creatives/library/sciatica-relief.jpg',
  rouge: '/creatives/library/rouge-perfume.jpg',
  cortisol: '/creatives/library/cortisol-problem-solution.jpg',
  nativePet: '/creatives/library/native-pet.jpg',
  nurecover: '/creatives/library/nurecover-immunity.png',
  spf: '/creatives/library/spf-supplement.jpg',
  skincare: '/creatives/library/skincare-review.jpg',
  insoles: '/creatives/library/insoles-callout.jpg',
  arch: '/creatives/library/arch-slippers.jpg',
  fertility: '/creatives/library/fertility-stack.jpg',
  ornaments: '/creatives/library/holiday-ornaments.jpg',
  suits: '/creatives/library/suits-sale.jpg',
  founderAd: '/creatives/library/supplement-founder.jpg',
  run: '/creatives/library/run-recovery.jpg',
  neuro: '/creatives/library/neuro-gum.jpg',
  ref2am: '/landing/ref-2am.jpg',
  stageMost: '/landing/stage-most.jpg',
  ladderMost: '/landing/ladder-most.jpg',
};

const BELT_1 = [IMG.apollo, IMG.promix, IMG.smartwool, IMG.sciatica, IMG.rouge, IMG.cortisol, IMG.nativePet, IMG.nurecover, IMG.stageMost, IMG.spf];
const BELT_2 = [IMG.skincare, IMG.insoles, IMG.arch, IMG.fertility, IMG.ornaments, IMG.suits, IMG.founderAd, IMG.run, IMG.ladderMost, IMG.ref2am];
const WALL = [
  [IMG.apollo, IMG.nativePet, IMG.smartwool],
  [IMG.promix, IMG.rouge, IMG.sciatica],
  [IMG.cortisol, IMG.spf, IMG.stageMost],
];

const SLIDES = [
  { theirs: IMG.ref2am, theirsAlt: 'Competitor comparison ad', days: 46, yours: IMG.arch, yoursAlt: "Your brand's comparison ad", id: 'LPY-0142', lead: 'Their "them vs us" layout,', rest: ' with your product and your buyers\' biggest complaint.' },
  { theirs: IMG.skincare, theirsAlt: 'Competitor review ad', days: 38, yours: IMG.stageMost, yoursAlt: "Your brand's review ad", id: 'LPY-0143', lead: 'Their review-card layout,', rest: ' with a real quote from your own customer.' },
  { theirs: IMG.nurecover, theirsAlt: 'Competitor benefit list ad', days: 31, yours: IMG.sciatica, yoursAlt: "Your brand's benefit list ad", id: 'LPY-0144', lead: 'Their benefit-list layout,', rest: ' with the results your buyers mention most.' },
];

const RUNS = [
  { src: IMG.insoles, days: 4, keep: false },
  { src: IMG.skincare, days: 46, keep: true },
  { src: IMG.fertility, days: 9, keep: false },
  { src: IMG.ref2am, days: 38, keep: true },
  { src: IMG.neuro, days: 2, keep: false },
  { src: IMG.nurecover, days: 31, keep: true },
];

const FAQ = [
  ['Why is it only $99?', "So you can see our work before spending more. If you don't like it, you get your money back."],
  ['Will you copy my competitors\' ads?', 'No. We borrow the layout that works, like any good designer uses a reference. The product, the words and the look are yours.'],
  ['What do you need from me?', 'Your website, your Facebook page and up to three competitors. It takes two minutes after checkout.'],
  ['Do you run the ads for me?', 'No, you launch them in your own account. Our short video shows you how.'],
  ['What happens after my 10 ads?', 'The starter is once per brand. If you want new ads every week, you can apply for our monthly plan, and your $99 counts toward your first month.'],
];

function Icon({ name, size }: { name: string; size: number }) {
  return (
    <svg width={size} height={size}>
      <use href={`#i-${name}`} />
    </svg>
  );
}

function Check({ size = 12 }: { size?: number }) {
  return <Icon name="check" size={size} />;
}

export default function StarterPage() {
  return (
    <div className={styles.page}>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <symbol id="i-check" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
        <symbol id="i-arrow" viewBox="0 0 16 16"><path d="M3 8h9.5M8.5 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
        <symbol id="i-x" viewBox="0 0 16 16"><path d="M4.5 4.5l7 7M11.5 4.5l-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
        <symbol id="i-globe" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.4" /><path d="M1.8 8h12.4M8 1.8c1.8 1.7 2.7 3.8 2.7 6.2S9.8 12.5 8 14.2C6.2 12.5 5.3 10.4 5.3 8S6.2 3.5 8 1.8z" fill="none" stroke="currentColor" strokeWidth="1.4" /></symbol>
        <symbol id="i-mail" viewBox="0 0 16 16"><rect x="1.8" y="3.3" width="12.4" height="9.4" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" /><path d="M2.5 4.5L8 8.6l5.5-4.1" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></symbol>
        <symbol id="i-clock" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M8 4.6V8l2.4 1.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></symbol>
        <symbol id="i-shield" viewBox="0 0 16 16"><path d="M8 1.8l5 1.9v3.9c0 3.2-2.1 5.6-5 6.6-2.9-1-5-3.4-5-6.6V3.7z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M5.6 8.1l1.7 1.6 3.1-3.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></symbol>
      </svg>

      <header className={`${styles.wrap} ${styles.nav}`}>
        <Image src="/loopy-logo.png" alt="Loopy" width={70} height={28} />
        <a className={`${styles.pill} ${styles.pillOutline} ${styles.pillSm}`} href="#offer">Get my 10 ads</a>
      </header>

      <main>
        {/* HERO */}
        <section className={`${styles.wrap} ${styles.hero}`} id="top">
          <div className={styles.heroCopy}>
            <span className={styles.chip}><span className={styles.liveDot} style={{ color: 'var(--proof-fg)' }} />For ecommerce brands on Meta</span>
            <h1>Your competitors already paid to find <em>ads that work.</em></h1>
            <p className={styles.sub}>We rebuild their best-running ads with your product and your customers&apos; words. You get 10 ready-to-test statics within an hour.</p>
            <a className={`${styles.pill} ${styles.pillPrimary}`} href="#offer">Get my 10 ads <Icon name="arrow" size={16} /></a>
            <ul className={styles.trust}>
              <li><Icon name="clock" size={16} /><span>Order now and they&apos;re ready <b><ReadyBy hours={1} /></b></span></li>
              <li><Icon name="shield" size={16} /><span>Full refund if you wouldn&apos;t run them</span></li>
            </ul>
          </div>

          <HeroCarousel>
            {SLIDES.map((s) => (
              <div className={styles.slide} key={s.id}>
                <div className={styles.pair}>
                  <div className={`${styles.pairSide} ${styles.theirs}`}>
                    <span className={styles.pairLbl}>Competitor&apos;s ad</span>
                    <div className={styles.ad}>
                      <Image src={s.theirs} alt={s.theirsAlt} fill sizes="(min-width: 960px) 260px, 40vw" />
                      <span className={styles.badgeInk}>Ran {s.days} days</span>
                    </div>
                  </div>
                  <span className={styles.arrowDot}><Icon name="arrow" size={14} /></span>
                  <div className={`${styles.pairSide} ${styles.yours}`}>
                    <span className={styles.pairLbl}>Your version</span>
                    <div className={styles.ad}>
                      <Image src={s.yours} alt={s.yoursAlt} fill sizes="(min-width: 960px) 260px, 40vw" />
                      <span className={styles.idChip}>{s.id}</span>
                    </div>
                  </div>
                </div>
                <p className={styles.slideCap}><b>{s.lead}</b>{s.rest}</p>
              </div>
            ))}
          </HeroCarousel>
        </section>

        {/* MARQUEE */}
        <section className={styles.marquee} aria-label="Ad formats we rebuild">
          <p className={`${styles.marqueeCap} ${styles.wrap}`}>Reviews, comparisons, before and afters. We rebuild whatever keeps selling.</p>
          <div className={styles.rows} aria-hidden="true">
            {[BELT_1, BELT_2].map((belt, r) => (
              <div className={styles.row} key={r}>
                <div className={styles.belt}>
                  {[...belt, ...belt].map((src, i) => (
                    <Image key={i} src={src} alt="" width={176} height={220} sizes="176px" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROBLEM */}
        <section className={`${styles.wrap} ${styles.sec}`} id="problem">
          <div className={styles.secHead}>
            <h2>Your ads wear out faster than you can replace them.</h2>
            <p>Every usual way to get new ones has a catch.</p>
          </div>
          <div className={styles.rise} style={{ display: 'grid', gap: 12 }}>
            <div className={`${styles.tile} ${styles.fixes}`}>
              {[
                ['An AI ad tool', "It starts from a blank prompt, so the ads look like everyone else's."],
                ['A freelancer', 'You write the brief, then wait about a week.'],
                ['An agency', 'It costs thousands a month, and the first ads take weeks.'],
              ].map(([b, t]) => (
                <div className={styles.fix} key={b}>
                  <span className={styles.fixX}><Icon name="x" size={14} /></span>
                  <div><b>{b}</b><span>{t}</span></div>
                </div>
              ))}
            </div>
            <div className={`${styles.tile} ${styles.gResearch} ${styles.reddit}`}>
              <div className={styles.quote}>
                <Image src="/landing/appicons/reddit.png" alt="" width={28} height={28} />
                <div>
                  <p>&quot;Creative volume is our bottleneck… We&apos;ve tried AI tools… haven&apos;t found them good enough… so we still outsource this.&quot;</p>
                  <small>r/DigitalMarketing, October 2026</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BIG IDEA (ink band) */}
        <div className={styles.band} id="idea">
          <section className={`${styles.wrap} ${styles.sec} ${styles.flip}`}>
            <div className={styles.secHead}>
              <h2>Start from an ad that&apos;s already selling.</h2>
              <p>Brands don&apos;t keep paying for ads that lose money. When a competitor runs the same ad for weeks, it&apos;s working, and they paid to learn that. We build on those ads.</p>
            </div>
            <div className={`${styles.runs} ${styles.rise}`} role="img" aria-label="Example: six competitor ads by days running. The three that ran 31 to 46 days are the ones we build on.">
              <div className={styles.runsHead}><span>Competitor ads in your space</span><span>Days running</span></div>
              {RUNS.map((r) => (
                <div className={`${styles.run} ${r.keep ? styles.keep : ''}`} key={r.src}>
                  <Image src={r.src} alt="" width={44} height={44} />
                  <div className={styles.runBar}>
                    <div className={styles.runTrack}>
                      <span className={styles.runFill} style={{ width: r.days === 46 ? '64%' : `calc(${r.days} / 46 * 64%)` }} />
                      <span className={styles.runDays}>{r.days} days</span>
                    </div>
                    {r.keep && <span className={styles.keepTag}>We build on this</span>}
                  </div>
                </div>
              ))}
              <p className={styles.runsCap}>This is an example. Your breakdown shows your real competitors.</p>
            </div>
          </section>
        </div>

        {/* CUSTOMER WORDS */}
        <section className={`${styles.wrap} ${styles.sec}`} id="words">
          <div className={styles.secHead}>
            <h2>Built from your customers&apos; words.</h2>
            <p>We read your reviews, Reddit threads and comments, then write each ad around what buyers actually say.</p>
          </div>
          <div className={`${styles.tile} ${styles.gResearch} ${styles.words} ${styles.rise}`}>
            <div className={styles.reviewCard}>
              <div className={styles.rcTop}>
                <span className={styles.rcSrc}><Image src="/landing/appicons/trustpilot.png" alt="" width={22} height={22} />Trustpilot review</span>
                <span className={styles.stars} aria-label="5 stars"><i /><i /><i /><i /><i /></span>
              </div>
              <p>&quot;…<mark className={styles.hl}>going crazy hearing the scratching at 2am</mark>…&quot;</p>
            </div>
            <div className={styles.link}>
              <svg className={styles.curve} viewBox="0 0 300 64" preserveAspectRatio="none" aria-hidden="true"><path d="M80 0 C 80 34, 220 30, 220 64" fill="none" stroke="var(--line)" strokeWidth="1.5" strokeDasharray="4 5" /></svg>
              <span>Became the headline</span>
            </div>
            <div className={styles.miniPost}>
              <div className={styles.mpTop}><i /><div>Svens Island<span>Sponsored</span></div></div>
              <Image src={IMG.stageMost} alt="Placeholder ad image" width={640} height={512} sizes="320px" />
              <div className={styles.mpFoot}><b>Child still scratching at 2am?</b><span>Shop now</span></div>
            </div>
            <p className={styles.wordsCap}>Real headline from our research for Svens Island. The ad image is a placeholder.</p>
          </div>
        </section>

        {/* ONE AD */}
        <section className={`${styles.wrap} ${styles.sec} ${styles.flip}`} id="anatomy">
          <div className={styles.secHead}>
            <h2>Every ad comes with the thinking behind it.</h2>
            <p>You get a short note like this for all 10.</p>
          </div>
          <div className={`${styles.anatomy} ${styles.rise}`}>
            <div className={styles.post}>
              <div className={styles.postTop}><span className={styles.postAv} /><span className={styles.postName}>Your brand<span>Sponsored</span></span></div>
              <div className={styles.skel}><i style={{ width: '94%' }} /><i style={{ width: '80%' }} /><i style={{ width: '52%' }} /></div>
              <div className={styles.postImg}>
                <Image src={IMG.arch} alt="Example ad" width={640} height={640} sizes="(min-width: 960px) 320px, 90vw" />
                <span className={styles.idChip}>LPY-0142</span>
                <span className={styles.pin} style={{ left: 12, top: '44%' }}>1</span>
                <span className={styles.pin} style={{ left: '46%', top: 8 }}>2</span>
                <span className={styles.pin} style={{ right: 14, bottom: 16 }}>3</span>
              </div>
              <div className={styles.postFoot}>
                <div className={styles.skel}><i style={{ width: '70%', height: 9, background: 'var(--btn-border)' }} /><i style={{ width: '46%' }} /></div>
                <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><span className={`${styles.pin} ${styles.pinStatic}`}>4</span><span className={styles.cta}>Shop now</span></span>
              </div>
            </div>
            <ol className={styles.pins}>
              <li><span className={`${styles.pin} ${styles.pinStatic}`}>1</span><div><b>The layout</b><span>It comes from a competitor ad that ran for 46 days.</span></div></li>
              <li><span className={`${styles.pin} ${styles.pinStatic}`}>2</span><div><b>The headline</b><span>It&apos;s taken word for word from one of your reviews.</span></div></li>
              <li><span className={`${styles.pin} ${styles.pinStatic}`}>3</span><div><b>The buyer</b><span>It speaks to people who know the problem but haven&apos;t found a fix.</span></div></li>
              <li><span className={`${styles.pin} ${styles.pinStatic}`}>4</span><div><b>The post</b><span>You get primary text, a headline and a button, ready to paste.</span></div></li>
            </ol>
          </div>
        </section>

        {/* ORDER TONIGHT */}
        <section className={`${styles.wrap} ${styles.sec}`} id="get">
          <div className={styles.secHead}>
            <h2>Order now and launch today.</h2>
            <p>Here&apos;s your next hour.</p>
          </div>
          <div className={styles.rise} style={{ display: 'grid', gap: 14, minWidth: 0 }}>
            <ol className={styles.tl}>
              <li><time>Now</time><span className={styles.dot} /><div className={styles.tlBody}><b>You answer six quick questions</b><span>It takes about two minutes.</span></div></li>
              <li><time>2 min</time><span className={styles.dot} /><div className={styles.tlBody}><b>We get to work</b><span>We study your site, your reviews and your competitors&apos; best-running ads.</span></div></li>
              <li>
                <time>1 hour</time><span className={styles.dot} />
                <div className={styles.tlBody}>
                  <b>Your ads land in your inbox</b><span>You get one link with everything on it.</span>
                  <div className={`${styles.card} ${styles.results}`}>
                    <div className={styles.resTop}><b>yourbrand.com</b><span className={`${styles.chip} ${styles.chipProof} ${styles.chipSm}`}>Ready</span></div>
                    <div className={styles.tabs}><span>Competitor breakdown</span><span className={styles.on}>Your 10 ads</span></div>
                    <div className={styles.resGrid}>
                      {[[IMG.apollo, 'LPY-0142'], [IMG.promix, 'LPY-0143'], [IMG.smartwool, 'LPY-0144']].map(([src, id]) => (
                        <figure key={id}><Image src={src} alt="" width={200} height={250} sizes="120px" /><figcaption>{id}</figcaption></figure>
                      ))}
                    </div>
                  </div>
                  <div className={styles.inc}>
                    {['Competitor breakdown', '10 statics', 'Copy for each ad', 'Launch video', 'Ad IDs for tracking'].map((t) => (
                      <span key={t}><Check />{t}</span>
                    ))}
                  </div>
                </div>
              </li>
              <li><time>Today</time><span className={`${styles.dot} ${styles.hollow}`} /><div className={styles.tlBody}><b>You launch them</b><span>Our short video shows you how to test them in Ads Manager.</span></div></li>
            </ol>
          </div>
        </section>

        {/* COMPARE */}
        <section className={`${styles.wrap} ${styles.sec} ${styles.flip}`} id="compare">
          <div className={styles.secHead}>
            <h2>How we compare with the usual options.</h2>
          </div>
          <Compare />
        </section>

        {/* FOUNDER */}
        <section className={`${styles.wrap} ${styles.founder}`} style={{ marginTop: 'var(--sec-gap)' }} id="founder">
          <div className={`${styles.fPhoto} ${styles.rise}`}>
            <Image src="/starter/founder.jpg" alt="Lucent, founder of Loopy" fill sizes="(min-width: 960px) 520px, 100vw" />
            <div className={styles.fTag}><b>Lucent</b><span>Founder of Loopy</span></div>
          </div>
          <div className={styles.fCopy}>
            <blockquote>&quot;When I ran ads, the hard part was always finding new ideas backed by real research. We built Loopy to do that research, and now we make the ads too.&quot;</blockquote>
            <p className={styles.fCap}>Built with a Meta ad agency and the playbook it uses for its own brands.</p>
            <div className={styles.fStats}>
              <div className={styles.fStat}><b>7 to 9 figures</b><span>yearly revenue of the agency&apos;s brands</span></div>
              <div className={styles.fStat}><b>$50k to $100k</b><span>monthly Meta spend on some of those accounts</span></div>
            </div>
          </div>
        </section>

        {/* OFFER */}
        <section className={`${styles.wrap} ${styles.sec} ${styles.offerSection}`} id="offer">
          <div className={styles.offerSide}>
            <div className={styles.secHead}>
              <h2>Get your first 10 ads for $99.</h2>
              <p>Agencies charge thousands a month. You pay once, and every ad is yours.</p>
            </div>
            <div className={`${styles.tile} ${styles.gProof} ${styles.promise}`}>
              <Icon name="shield" size={26} />
              <h3>If you wouldn&apos;t run them, you get your $99 back.</h3>
              <p>Ask on your results page within 14 days.</p>
            </div>
          </div>
          <div className={`${styles.tile} ${styles.gInput} ${styles.offerTile} ${styles.rise}`}>
            <OfferForm />
          </div>
        </section>

        {/* FAQ */}
        <section className={`${styles.wrap} ${styles.faqSec}`} id="faq">
          <h2>Questions before you order</h2>
          <div className={styles.faq}>
            {FAQ.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}<span className={styles.pm} /></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* LAST CALL */}
        <section className={styles.wrap}>
          <div className={styles.last}>
            <div className={styles.wall} aria-hidden="true">
              {WALL.map((col, c) => (
                <div className={styles.col} key={c}>
                  {[...col, ...col].map((src, i) => (
                    <Image key={i} src={src} alt="" width={240} height={300} sizes="240px" />
                  ))}
                </div>
              ))}
            </div>
            <h2>Your next 10 ads could be ready <span><ReadyBy hours={1} /></span>.</h2>
            <p>They&apos;ll start from what already sells for your competitors.</p>
            <a className={`${styles.pill} ${styles.pillPrimary}`} href="#offer">Get my 10 ads <Icon name="arrow" size={16} /></a>
          </div>
        </section>
      </main>

      <footer className={`${styles.wrap} ${styles.foot}`}>
        <Image src="/loopy-logo.png" alt="Loopy" width={70} height={28} />
        <span>Loopy makes static ads for ecommerce brands from what their customers say.</span>
        <nav>
          <a href="#offer">Get my 10 ads</a>
          <a href="#get">What you get</a>
          <a href="#faq">Questions</a>
          <a href={`${APP_URL}/terms`}>Terms</a>
          <a href={`${APP_URL}/privacy`}>Privacy</a>
        </nav>
        <span>© 2026 Loopy</span>
      </footer>

      <StickyBar />
    </div>
  );
}
