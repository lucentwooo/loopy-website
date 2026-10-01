import Image from 'next/image';
import { DocIcon, GlobeIcon } from '@/components/icons';
import styles from './HowItWorks.module.css';

const GLOW = {
  brand:
    'radial-gradient(46% 52% at 24% 34%, rgba(123, 97, 255, 0.34), rgba(123, 97, 255, 0) 72%), radial-gradient(42% 50% at 82% 74%, rgba(20, 190, 147, 0.26), rgba(20, 190, 147, 0) 72%)',
  research:
    'radial-gradient(50% 44% at 50% 16%, rgba(123, 97, 255, 0.32), rgba(123, 97, 255, 0) 72%), radial-gradient(48% 46% at 50% 88%, rgba(255, 106, 77, 0.32), rgba(255, 106, 77, 0) 72%)',
  rank: 'radial-gradient(46% 50% at 20% 60%, rgba(20, 190, 147, 0.26), rgba(20, 190, 147, 0) 72%), radial-gradient(48% 52% at 82% 30%, rgba(123, 97, 255, 0.32), rgba(123, 97, 255, 0) 72%)',
  brief:
    'radial-gradient(44% 46% at 76% 80%, rgba(255, 106, 77, 0.34), rgba(255, 106, 77, 0) 72%), radial-gradient(40% 44% at 22% 86%, rgba(123, 97, 255, 0.22), rgba(123, 97, 255, 0) 72%), radial-gradient(46% 48% at 22% 18%, rgba(123, 97, 255, 0.30), rgba(123, 97, 255, 0) 72%)',
};

const DOWNLOAD = 'M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14';

function StepText({ n, title, children }: { n: string; title: string; children: string }) {
  return (
    <>
      <span className={styles.num} aria-hidden="true">
        {n}
      </span>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </>
  );
}

function Swatch({ className, hex, name }: { className: string; hex: string; name: string }) {
  return (
    <div className={`${styles.fl} ${styles.paper} ${styles.chip} ${className}`}>
      <span className={styles.sw} style={{ background: hex.toLowerCase() }} />
      <span>
        <b>{name}</b>
        <small>{hex}</small>
      </span>
    </div>
  );
}

function AppIcon({ src, alt, className }: { src: string; alt: string; className: string }) {
  return <Image className={`${styles.fl} app ${className}`} src={src} alt={alt} width={56} height={56} />;
}

function Strip({ className, rank, angle, angleClass, stage, children }: {
  className: string;
  rank: number;
  angle: string;
  angleClass: string;
  stage: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.fl} ${styles.paper} ${styles.strip} ${className}`}>
      <span className={styles.rk}>{rank}</span>
      <div className={styles.meta}>
        <span className={`ang ${angleClass}`}>{angle}</span>
        {stage}
      </div>
      {children}
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="wrap section" id="how">
      <div className="sec-head">
        <h2 className="sh">Every idea is built on what your client’s customers really say.</h2>
        <p className="sub">And you can always see where it came from.</p>
      </div>

      <ol className={styles.steps}>
        <li className={styles.step}>
          <StepText n="01" title="It reads the brand">
            Loopy opens your client’s website and notes their real colors, fonts and logo.
          </StepText>
          <figure className={styles.ill} style={{ '--glow': GLOW.brand }}>
            <div className={styles.stage}>
              <div className={`${styles.fl} ${styles.paper} ${styles.browser}`}>
                <div className={styles.browserBar} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <span>svensisland.com.au</span>
                </div>
                <Image
                  src="/landing/svens-site.png"
                  alt="The Svens Island homepage, as Loopy's browser loads it"
                  width={336}
                  height={210}
                  quality={90}
                />
              </div>
              <Swatch className={styles.cPrimary} hex="#232323" name="primary" />
              <Swatch className={styles.cAccent} hex="#6774A5" name="accent" />
              <Swatch className={styles.cSecondary} hex="#1F4034" name="secondary" />
              <div className={`${styles.fl} ${styles.paper} ${styles.chip} ${styles.cFont}`}>
                <span className={styles.aa} aria-hidden="true">
                  Aa
                </span>
                <span>
                  <b>Montserrat</b>
                  <small>headings</small>
                </span>
              </div>
              <div className={`${styles.fl} ${styles.paper} ${styles.cLogo}`}>
                <Image src="/landing/svens-logo.png" alt="Svens Island logo" width={124} height={30} unoptimized />
                <small>logo</small>
              </div>
            </div>
          </figure>
        </li>

        <li className={styles.step}>
          <StepText n="02" title="It finds what buyers really say">
            It reads reviews, Reddit threads and comments, even old ones you’d never find. Then it saves what buyers
            said, word for word.
          </StepText>
          <figure className={styles.ill} style={{ '--glow': GLOW.research }}>
            <div className={styles.stage}>
              <div className={`${styles.fl} ${styles.glass} ${styles.verbs}`}>
                <div className={styles.verb}>
                  <q>The prescription works but always comes back a few days after we stop.</q>
                  <div className={styles.tags}>
                    <span className={styles.src}>r/NewParents</span>
                    <span className={styles.dt}>June 2024</span>
                  </div>
                </div>
                <div className={styles.verb}>
                  <q>The cream works but wow the stench... My kids refuse because of how it smells.</q>
                  <div className={styles.tags}>
                    <span className={styles.src}>Trustpilot review</span>
                    <span className={styles.dt}>June 2026</span>
                  </div>
                  <p className={styles.idea}>
                    <svg viewBox="0 0 12 12" aria-hidden="true">
                      <path d="M2 6h7.5M6.5 3L9.5 6l-3 3" />
                    </svg>
                    Became idea #5: “Smell too strong? Kids will use this.”
                  </p>
                </div>
                <div className={styles.verb}>
                  <q>I avoid going out sometimes because I’m so anxious about people staring or asking questions.</q>
                  <div className={styles.tags}>
                    <span className={styles.src}>r/eczema</span>
                    <span className={styles.dt}>April 2025</span>
                  </div>
                </div>
              </div>
              <AppIcon className={styles.iReddit} src="/landing/appicons/reddit.png" alt="Reddit" />
              <AppIcon className={styles.iInsta} src="/landing/appicons/instagram.png" alt="Instagram" />
              <AppIcon className={styles.iTrust} src="/landing/appicons/trustpilot.png" alt="Trustpilot" />
              <AppIcon className={styles.iYt} src="/landing/appicons/youtube.png" alt="YouTube" />
              <AppIcon className={styles.iAppstore} src="/landing/appicons/appstore.svg" alt="App Store" />
              <AppIcon className={styles.iTiktok} src="/landing/appicons/tiktok.png" alt="TikTok" />
              <div className={`${styles.fl} tile ${styles.iSite}`}>
                <GlobeIcon />
              </div>
              <div className={`${styles.fl} tile ${styles.iMeta}`}>
                <Image className="meta-mark" src="/landing/appicons/meta-mark.svg" alt="Meta Ad Library" width={34} height={23} />
              </div>
              <div className={`${styles.fl} tile ${styles.iFile}`}>
                <DocIcon />
              </div>
            </div>
          </figure>
        </li>

        <li className={styles.step}>
          <StepText n="03" title="It ranks the ideas">
            It writes ad ideas for each awareness stage and ranks them. You get a plain reason for each one.
          </StepText>
          <figure className={styles.ill} style={{ '--glow': GLOW.rank }}>
            <div className={styles.stage}>
              <div className={`${styles.fl} ${styles.glass} ${styles.seg}`} aria-label="Audience temperature: Hot">
                <span>Cold</span>
                <span>Warm</span>
                <span className={styles.on}>Hot</span>
              </div>
              <svg className={styles.cursor} style={{ left: '470px', top: '44px' }} viewBox="0 0 24 28" aria-hidden="true">
                <path d="M3 2.5v19.2l4.9-4.6 3.2 7.4 3.4-1.5-3.2-7.2h6.7z" fill="#fff" stroke="#0e1116" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              <Strip className={styles.s1} rank={1} angle="Objection" angleClass="a-obj" stage="Product aware">
                <h4>
                  Tried everything? This is different. <span className={styles.top}>Top pick</span>
                </h4>
                <p className={styles.why}>ranked #1: strong objection · addresses skepticism · product-aware fit</p>
              </Strip>
              <Strip className={styles.s2} rank={2} angle="Pain point" angleClass="a-pain" stage="Product aware">
                <h4>Burning hands? Relief is here.</h4>
              </Strip>
              <Strip className={styles.s3} rank={5} angle="Objection" angleClass="a-obj" stage="Most aware">
                <h4>Smell too strong? Kids will use this.</h4>
              </Strip>
              <Strip className={styles.s4} rank={9} angle="Proof" angleClass="a-proof" stage="Most aware">
                <h4>Trusted by 150,000+ Aussies.</h4>
              </Strip>
            </div>
          </figure>
        </li>

        <li className={styles.step}>
          <StepText n="04" title="It writes the brief">
            Pick the ideas you like, and Loopy writes the brief with hooks, copy, reference ads and notes for your
            designer.
          </StepText>
          <figure className={`${styles.ill} ${styles.illDoc}`} style={{ '--glow': GLOW.brief }}>
            <div className={styles.docWrap}>
              <div className={styles.docBack} aria-hidden="true" />
              <article className={`${styles.doc} ${styles.paper}`}>
                <header className={styles.docH}>
                  <b>Svens Island · 5 statics</b>
                  <span>
                    <span className={styles.stg}>Problem aware</span>
                    <span className="ang a-pain">Pain point</span>
                  </span>
                </header>
                <div className={styles.docBody}>
                  <div className={styles.docAd}>
                    <Image
                      src="/landing/ref-2am.jpg"
                      alt="Reference ad: Nomend's them versus us layout, a keto plate beside a red light belt, with the logo at the bottom"
                      width={164}
                      height={164}
                    />
                    <span className="pin" style={{ left: '50%', top: '13%' }}>
                      1
                    </span>
                    <span className="pin" style={{ left: '22%', top: '40%' }}>
                      2
                    </span>
                    <span className="pin" style={{ left: '72%', top: '91%' }}>
                      3
                    </span>
                  </div>
                  <ol className={styles.docNotes}>
                    <li>
                      <span className="pin">1</span>Keep the two panels: what they tried, then us.
                    </li>
                    <li>
                      <span className="pin">2</span>Swap the plate and the belt for Svens Island products.
                    </li>
                    <li>
                      <span className="pin">3</span>Keep the logo at the bottom.
                    </li>
                  </ol>
                </div>
                <ul className={styles.docHls}>
                  <li className={styles.star}>
                    <svg aria-label="Starred" role="img" viewBox="0 0 16 16">
                      <path d="M8 1.2l2.05 4.3 4.7.6-3.45 3.25.88 4.65L8 11.75 3.82 14l.88-4.65L1.25 6.1l4.7-.6z" />
                    </svg>
                    Child still scratching at 2am?
                    <p className={styles.srcChip}>
                      <Image src="/landing/appicons/trustpilot.png" alt="" width={17} height={17} />
                      From a Trustpilot review: “going crazy hearing the scratching at 2am”
                    </p>
                  </li>
                  <li>
                    <span />
                    Tired of creams that don’t last?
                  </li>
                  <li>
                    <span />
                    Is your child’s flare-up getting worse?
                  </li>
                </ul>
              </article>
            </div>
            <div className={styles.send}>
              <span className={`${styles.glass} ${styles.act}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 14a4.5 4.5 0 0 0 6.4.2l3-3a4.5 4.5 0 0 0-6.4-6.4l-1.2 1.2" />
                  <path d="M14 10a4.5 4.5 0 0 0-6.4-.2l-3 3a4.5 4.5 0 0 0 6.4 6.4l1.2-1.2" />
                </svg>
                Share link
              </span>
              <span className={`${styles.glass} ${styles.act}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={DOWNLOAD} />
                </svg>
                PDF
              </span>
              <span className={`${styles.glass} ${styles.act}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={DOWNLOAD} />
                </svg>
                Markdown
              </span>
            </div>
          </figure>
        </li>
      </ol>
    </section>
  );
}
