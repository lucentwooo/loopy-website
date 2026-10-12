import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '@/components/Nav/Nav';
import { Faq, type FaqItem } from '@/components/Faq/Faq';
import { Footer } from '@/components/Footer/Footer';
import { APP_URL, CAL_URL, SITE_URL } from '@/lib/site';
import { TemplateTabs } from './TemplateTabs';
import styles from './page.module.css';

const PATH = '/ad-creative-brief-template';

const TITLE = 'Meta Ads Creative Brief Template: Free, Research-First';
const DESCRIPTION =
  'Free Meta ads creative brief template that starts with what customers say, then turns it into concepts, hooks and copy. Copy it or see a real example.';
const PUBLISHED = '2026-08-22';
const MODIFIED = '2026-10-12';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: 'article',
    url: PATH,
    siteName: 'Loopy',
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

type Field = { name: string; why: string };

const PARTS: { title: string; fields: Field[] }[] = [
  {
    title: 'Customer research',
    fields: [
      {
        name: 'Who buys, described as people in a situation',
        why: 'Write segments the way customers describe themselves, like “parents of a toddler whose eczema keeps coming back”, not “women 25 to 44”. Add the segments that show up in reviews and threads but not in the brand’s current ads. Those are your new audiences.',
      },
      {
        name: 'Problems to agitate, quoted word for word',
        why: 'Each problem gets the customer’s exact phrase and where it came from: the thread, the review, the comment. The quote is the evidence for the angle, and often the hook itself.',
      },
      {
        name: 'What they already tried, and why it let them down',
        why: 'The cream that worked until they stopped, the app they cancelled, the cheaper option that broke. This is where objection and comparison angles come from.',
      },
      {
        name: 'What they want, and what stops them buying',
        why: 'The result they would pay for, in their words, next to the doubts that stall the purchase: price, smell, trust, “I have tried everything”.',
      },
      {
        name: 'Awareness stage for each segment',
        why: 'Where each segment sits, from unaware to ready to buy. A buyer who doesn’t know the problem needs it named. A buyer comparing options needs a reason to pick you.',
      },
    ],
  },
  {
    title: 'Brand and campaign',
    fields: [
      {
        name: 'The objective and the one number you will judge by',
        why: 'Name the result you will judge the creative by, like cost per first order under $40. Without it, feedback turns into taste.',
      },
      {
        name: 'Offer and proof, pasted exactly',
        why: 'The offer, guarantee, review count and certifications, pasted exactly as the brand states them, so nobody rewrites “150,000+ customers” into a claim the brand can’t back up.',
      },
      {
        name: 'Brand basics',
        why: 'Logo file, fonts and colors by role, product shots. One line each is enough.',
      },
      {
        name: 'Formats, placements and sizes',
        why: 'Name every deliverable up front: feed at 1080×1350 or 1080×1080, stories and reels at 1080×1920, static or video, and the due date.',
      },
      {
        name: 'Mandatories and claims to avoid',
        why: 'Required disclaimers, words the brand never uses, and claims it can’t legally make. Health and money claims need extra care.',
      },
    ],
  },
  {
    title: 'One block per concept',
    fields: [
      {
        name: 'Who it is for and which problem it agitates',
        why: 'One segment, one problem, one awareness stage and one angle: pain, desire, proof, offer or objection. If a block needs two ideas, it is two concepts.',
      },
      {
        name: 'The evidence',
        why: 'The customer quotes the concept is built on, with their sources, so anyone reviewing the brief can see why this idea exists.',
      },
      {
        name: 'Hooks and copy',
        why: 'Three hooks that say the problem the way the customer said it, then body copy and a call to action. Three hooks let Meta find the opening that works while everything else stays the same.',
      },
      {
        name: 'Visual direction',
        why: 'A reference ad whose layout already works, plus notes on what to keep and what to change, written so a designer who has never met the client can ship it.',
      },
    ],
  },
];

const FAILURES: { name: string; why: ReactNode }[] = [
  {
    name: 'Angles nobody researched',
    why: 'Angles brainstormed in a meeting repeat what the brand already says about itself. The strongest ones come from what customers say when the brand isn’t in the room.',
  },
  {
    name: 'Customer words get paraphrased',
    why: 'A customer writes “the cream works but wow the stench” and the brief turns it into “unpleasant fragrance”. The customer’s version is the stronger hook, so keep their words.',
  },
  {
    name: 'Every ad talks to the same buyer',
    why: (
      <>
        When every concept targets one segment at one stage, tests compare small variations of the same idea.{' '}
        <Link href="/#brief">Spread concepts across awareness stages</Link> and you test real differences.
      </>
    ),
  },
  {
    name: 'No number to judge by',
    why: 'Without one success metric, every round of feedback is an opinion. With one, it becomes “this won’t move cost per order”.',
  },
];

const FAQS: FaqItem[] = [
  {
    q: 'What should a Meta ads creative brief include?',
    a: 'Three parts. Customer research first: who buys, the problems they describe in their own words, what they already tried, and their awareness stage. Then the brand and campaign basics: objective and success metric, offer and proof, brand assets, sizes and mandatories. Then one block per concept with its evidence, hooks, copy and visual direction.',
  },
  {
    q: 'Why should a creative brief start with customer research?',
    a: 'Because the concept decides most of what the creative can do, and the concept comes from knowing the customer. Research shows you buyers you aren’t targeting yet and problems you aren’t agitating yet, and it hands you the exact words to use in hooks.',
  },
  {
    q: 'Where do you find customer insights for ads?',
    a: 'Wherever customers talk without being asked: Reddit threads, product reviews, TikTok and YouTube comments, Instagram posts and the comments on competitor ads. Save the phrases word for word with their source so the brief can show its evidence.',
  },
  {
    q: 'What does problem agitation mean in an ad brief?',
    a: 'It means naming the problem the way the customer feels it, sharply enough that they recognise themselves. The brief should record the exact phrase customers use, because that phrase is usually the strongest hook.',
  },
  {
    q: 'How many concepts should one brief have?',
    a: 'Enough to cover the awareness stages that matter for the brand, often three to five. Each concept talks to a buyer at a different stage, so you test genuinely different angles instead of small variations.',
  },
  {
    q: 'How long should a creative brief be?',
    a: 'About a page of research and brand basics, then half a page per concept. A three-concept brief usually lands at two to three pages, which is long enough to execute from and short enough to read in full.',
  },
  {
    q: 'Can AI write an ad creative brief?',
    a: 'It can, but the output is only as good as the research behind it. Tools that start from a blank prompt produce angles that sound like everyone else’s. Loopy researches the client’s real customers first, then drafts the brief so your strategists can review it and decide. It speeds good people up rather than replacing them.',
  },
  {
    q: 'How is a Meta ads brief different from a regular creative brief?',
    a: 'It is the same document tuned for the feed. Feed sizes are 1080×1350 or 1080×1080, stories and reels are 1080×1920, the first line has to stop the scroll, and visuals need to survive the vertical crop.',
  },
];

// Article (what this page is) + BreadcrumbList (where it sits) + FAQPage (the
// question-first passages AI answer engines quote). Organization/WebSite live in
// the root layout and are referenced by @id.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${SITE_URL}${PATH}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      url: `${SITE_URL}${PATH}`,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      inLanguage: 'en',
      isAccessibleForFree: true,
      author: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: ['Meta ads creative brief template', 'ad creative brief template', 'customer research for ads'],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Loopy', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Meta ads creative brief template', item: `${SITE_URL}${PATH}` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

const TOC = [
  ['research-first', 'Why research comes first'],
  ['anatomy', 'What goes in the brief'],
  ['template', 'Copy the template'],
  ['example', 'A filled-in example'],
  ['failures', 'Why briefs fail'],
  ['faq', 'FAQ'],
] as const;

const TRACK = ['What customers say', 'Who they are and what hurts', 'Concepts for each awareness stage', 'The brief'];

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

function Quote({ icon, source, children }: { icon: string; source: string; children: string }) {
  return (
    <figure className={`${styles.card} ${styles.q}`}>
      <figcaption>
        <Image className={styles.appic} src={icon} alt="" width={22} height={22} />
        {source}
      </figcaption>
      <blockquote>{children}</blockquote>
    </figure>
  );
}

export default function BriefTemplatePage() {
  let n = 0;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Nav page="content" />
      <main>
        <header className={styles.hero}>
          <div className="wrap">
            <p className={styles.label}>Free template</p>
            <h1 className={styles.display}>The Meta ads creative brief template that starts with your customer.</h1>
            <div className={styles.lines}>
              <p>
                Most briefs start with the brand and guess the angles. Good ones start with what customers
                say, because that is where the ideas come from.
              </p>
              <p>Copy the template below, see a real one filled in, and use it on your next client.</p>
            </div>
            <div className="ctas">
              <a className="pill pill-primary" href="#template">
                Get the template
              </a>
              <a className="pill pill-outline" href={APP_URL}>
                Try it free
              </a>
            </div>
            <ul className={styles.trust}>
              <li>
                <Check />
                14 fields in 3 parts
              </li>
              <li>
                <Check />
                Copy or download as Markdown
              </li>
              <li>
                <Check />
                Real example from a live brand
              </li>
              <li>
                <time dateTime={MODIFIED}>Updated 12 October 2026</time>
              </li>
            </ul>

            <figure className={styles.heroTile}>
              <div className={styles.heroStage}>
                <Quote icon="/landing/appicons/trustpilot.png" source="Trustpilot review">
                  {'“The cream works but wow the stench... My kids refuse because of how it smells.”'}
                </Quote>
                <Connector />
                <div className={`${styles.card} ${styles.ideaCard}`}>
                  <span className={styles.meta}>
                    <span className={styles.stage}>Product aware</span>
                    <span className="ang a-obj">Objection</span>
                  </span>
                  <b>Smell too strong? Kids will use this.</b>
                </div>
              </div>
              <figcaption className={styles.tileCap}>
                A real idea Loopy wrote for svensisland.com.au, next to the review it came from.
              </figcaption>
            </figure>
          </div>
        </header>

        <div className={`wrap ${styles.shell}`}>
          <aside className={styles.rail} aria-label="On this page">
            <span className={styles.railLabel}>On this page</span>
            {TOC.map(([id, label], i) => (
              <a key={id} href={`#${id}`} className={styles.railLink}>
                <b>{String(i + 1).padStart(2, '0')}</b> {label}
              </a>
            ))}
          </aside>

          <article className={styles.article}>
            <section id="research-first" className={styles.section}>
              <h2>Why the brief starts with research</h2>
              <p className={styles.body}>
                People say creative decides most of an ad’s success. But a good creative comes from a good concept, and
                a good concept comes from knowing the customer: who buys, what hurts, and the exact words they use to
                describe it. Skip that step and the angles get invented in a meeting, so every ad ends up sounding like
                the brand talking about itself.
              </p>
              <p className={styles.body}>
                Research is where you find buyers you aren’t targeting yet and problems you aren’t agitating yet. It
                lives in <Link href="/reddit-market-research-tool">Reddit threads</Link>, reviews, TikTok and YouTube comments, and Instagram posts, written by people
                who never meant to help with your ads. <Link href="/#how">See how Loopy does this research</Link>.
              </p>
              <ol className={styles.track} aria-label="From research to brief">
                {TRACK.map((t, i) => (
                  <li key={t} style={{ '--a': 0.25 + i * 0.25 } as CSSProperties}>
                    <i aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ol>
            </section>

            <section id="anatomy" className={styles.section}>
              <h2>What goes in a Meta ads creative brief</h2>
              <p className={styles.body}>
                A Meta ads creative brief has three parts: customer research, brand and campaign details, and one block
                per concept. The first part is the one most templates leave out.
              </p>
              {PARTS.map((part, p) => (
                <div key={part.title} className={styles.part}>
                  <h3>
                    <span>Part {p + 1}</span> {part.title}
                  </h3>
                  <ol className={styles.specList}>
                    {part.fields.map((f) => (
                      <li key={f.name}>
                        <b className={styles.num}>{String(++n).padStart(2, '0')}</b>
                        <div>
                          <h4>{f.name}</h4>
                          <p>{f.why}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </section>

            <section id="template" className={styles.section}>
              <h2>Copy the template</h2>
              <p className={styles.body}>
                Switch between the three parts and copy each one as text, or download the whole template as a Markdown
                file for Notion, Google Docs or your project tool. Rather have it filled in for you? The{' '}
                <Link href="/creative-brief-generator">free creative brief generator</Link> researches a product page
                and emails you a brief.
              </p>
              <TemplateTabs />
            </section>

            <section id="example" className={styles.section}>
              <h2>A filled-in example from a real brand</h2>
              <p className={styles.body}>
                This is real Loopy output for Svens Island, an Australian brand that makes natural cream for
                eczema-prone skin. Follow one idea from the customer’s words to the brief.
              </p>
              <figure className={styles.flow} aria-label="One Svens Island idea, from customer quotes to the brief">
                <div className={styles.step}>
                  <p className={styles.lab}>1. What customers said</p>
                  <div className={styles.quotes}>
                    <Quote icon="/landing/appicons/trustpilot.png" source="Trustpilot review">
                      {'“Steroids would help at the start but his eczema never completely cleared before another flare up happens.”'}
                    </Quote>
                    <Quote icon="/landing/appicons/reddit.png" source="r/30PlusSkinCare">
                      {'“The only thing that truly helps me is hydrocortisone 😭 but can’t use it too often.”'}
                    </Quote>
                    <Quote icon="/landing/appicons/reddit.png" source="r/NewParents">
                      {'“The prescription works but always comes back a few days after we stop.”'}
                    </Quote>
                  </div>
                </div>
                <div className={styles.step}>
                  <p className={styles.lab}>2. Who and what hurts</p>
                  <dl className={`${styles.card} ${styles.rows}`}>
                    <div>
                      <dt>Segment</dt>
                      <dd>Parents of a child whose eczema keeps coming back</dd>
                    </div>
                    <div>
                      <dt>Problem</dt>
                      <dd>Steroid creams work, then the flare returns when they stop</dd>
                    </div>
                    <div>
                      <dt>Already tried</dt>
                      <dd>Steroid and hydrocortisone creams</dd>
                    </div>
                    <div>
                      <dt>Stage</dt>
                      <dd>Problem aware</dd>
                    </div>
                  </dl>
                </div>
                <div className={styles.step}>
                  <p className={styles.lab}>3. Ideas, by stage</p>
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
                <div className={styles.step}>
                  <p className={styles.lab}>4. The brief</p>
                  <div className={`${styles.card} ${styles.brief}`}>
                    <p>Your child’s eczema won’t calm until you try natural.</p>
                    <div className={styles.briefRow}>
                      <div className={styles.ad}>
                        <Image
                          src="/landing/ladder-problem.jpg"
                          alt="Reference ad: Native Pet's before and after thermal photo, split by a line down the middle"
                          width={104}
                          height={185}
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
              <p className={styles.cap}>Every quote, idea and brief line here is real Loopy output for svensisland.com.au.</p>
            </section>

            <section id="failures" className={styles.section}>
              <h2>Why most briefs fail</h2>
              <ol className={styles.specList}>
                {FAILURES.map((f, i) => (
                  <li key={f.name}>
                    <b className={styles.num}>{String(i + 1).padStart(2, '0')}</b>
                    <div>
                      <h3 className={styles.failH}>{f.name}</h3>
                      <p>{f.why}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </article>
        </div>

        <section className="wrap section">
          <div className={styles.cta}>
            <h2 className="sh">Want the research done and the brief written for you?</h2>
            <p className="sub">
              Loopy reads your client’s site, researches what their customers say across Reddit, reviews, TikTok and
              YouTube, and writes this brief in minutes. Your team still makes the calls, and Loopy does the digging.{' '}
              <Link href="/">See how it works</Link> or <Link href="/pricing">check pricing</Link>.
            </p>
            <div className="ctas">
              <a className="pill pill-primary" href={CAL_URL}>
                Book a demo
              </a>
              <a className="pill pill-outline" href={APP_URL}>
                Try it free
              </a>
            </div>
          </div>
        </section>

        <Faq title="Questions about creative briefs." items={FAQS} />
      </main>
      <Footer page="content" />
    </>
  );
}
