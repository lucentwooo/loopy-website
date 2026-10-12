import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '@/components/Nav/Nav';
import { Faq, type FaqItem } from '@/components/Faq/Faq';
import { Footer } from '@/components/Footer/Footer';
import { APP_URL, CAL_URL, SITE_URL } from '@/lib/site';
import shared from '../ad-creative-brief-template/page.module.css';
import styles from './page.module.css';

const PATH = '/reddit-market-research-tool';

const TITLE = 'Reddit Market Research Tool for Ad Angles, Free to Try';
const DESCRIPTION =
  'Loopy finds what your buyers say on Reddit, saves their words with the source, and turns them into ad angles and a brief. Try it free with Limited research.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: 'website', url: PATH, siteName: 'Loopy', title: TITLE, description: DESCRIPTION },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const STEPS: { name: string; body: ReactNode }[] = [
  {
    name: 'Finds the threads where your buyers talk',
    body: 'Loopy works out who buys the product and what problem it solves, then searches the subreddits where those people describe that problem.',
  },
  {
    name: 'Saves what they said, word for word',
    body: 'Every quote keeps its source, so you can open the thread and check the context before it goes in a brief.',
  },
  {
    name: 'Sorts it into segments, problems and objections',
    body: 'Quotes get grouped by who said them and what they’re stuck on. That is usually where the buyers you aren’t targeting yet show up.',
  },
  {
    name: 'Turns it into ranked ad ideas and a brief',
    body: (
      <>
        Each idea is written for an awareness stage and links back to the quotes it came from, laid out like our{' '}
        <Link href="/ad-creative-brief-template">creative brief template</Link>.
      </>
    ),
  },
];

const BY_HAND = [
  {
    name: 'Search for the problem in the customer’s words',
    body: 'Type how a buyer would describe the problem, like “eczema keeps coming back”, rather than your brand or category name. Adding site:reddit.com to a Google search finds older threads that Reddit’s own search misses.',
  },
  {
    name: 'Pick the subreddits where it keeps coming up',
    body: 'Note which communities appear again and again, and read their rules before you post anything.',
  },
  {
    name: 'Copy the exact phrases with a link',
    body: 'Paste each quote into a sheet with the thread link and the date. Paraphrasing loses the words that make a good hook.',
  },
  {
    name: 'Group the quotes',
    body: 'Sort them by who is talking and what they’re stuck on: the problem, what they tried, what they want, and what stops them buying.',
  },
  {
    name: 'Turn the patterns into angles',
    body: 'Any group that keeps repeating is a candidate angle. Write the hook in their words, then put it in a brief.',
  },
];

const FAQS: FaqItem[] = [
  {
    q: 'Is there a free Reddit market research tool?',
    a: 'Loopy is free to try. A free account runs Limited research: a fresh Reddit search for your product plus the comments on a TikTok video, with the strongest quotes and findings shown. Paid plans go deeper, across more threads and sources.',
  },
  {
    q: 'How do I find the right subreddits for market research?',
    a: 'Search Google for the problem in your customer’s words with site:reddit.com and note which communities keep appearing. The right subreddits are wherever buyers describe the problem, which often isn’t the subreddit named after your category.',
  },
  {
    q: 'Can I use Reddit quotes in my ads?',
    a: 'Use them to find the angle and the language, then write your own copy. If you want to quote a person directly in an ad, ask them first.',
  },
  {
    q: 'What does Loopy do with the research?',
    a: 'It groups the quotes into segments, problems and objections, writes ad ideas for each awareness stage and ranks them, then builds a creative brief your designers can work from.',
  },
  {
    q: 'Does it only use Reddit?',
    a: 'No. Loopy also reads product reviews and TikTok and YouTube comments, so a single loud thread doesn’t decide the angle.',
  },
  {
    q: 'Is Loopy a GummySearch alternative?',
    a: 'For one part of what GummySearch did, yes. If you used it to find customer pain points and language for ads, Loopy does that and turns it into briefs. If you used it to monitor subreddits or find leads, it isn’t the right fit.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Loopy', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Reddit market research tool', item: `${SITE_URL}${PATH}` },
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
  ['why-reddit', 'What Reddit tells you that surveys don’t'],
  ['how', 'How Loopy does Reddit research'],
  ['example', 'A real example'],
  ['by-hand', 'How to do Reddit market research by hand'],
  ['fit', 'Who it’s for, and who it isn’t'],
  ['faq', 'FAQ'],
] as const;

function Check() {
  return (
    <svg className={shared.ck} viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="8" />
      <path d="M4.7 8.3l2.1 2.1 4.5-4.7" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Connector() {
  return (
    <svg className={shared.con} viewBox="0 0 40 12" aria-hidden="true">
      <path d="M5 6h28M29 2.2 33 6l-4 3.8" />
    </svg>
  );
}

function Quote({ icon, source, children }: { icon: string; source: string; children: string }) {
  return (
    <figure className={`${shared.card} ${shared.q}`}>
      <figcaption>
        <Image className={shared.appic} src={icon} alt="" width={22} height={22} />
        {source}
      </figcaption>
      <blockquote>{children}</blockquote>
    </figure>
  );
}

function Steps({ items }: { items: { name: string; body: ReactNode }[] }) {
  return (
    <ol className={`${shared.specList} ${styles.steps}`}>
      {items.map((s, i) => (
        <li key={s.name}>
          <b className={shared.num}>{String(i + 1).padStart(2, '0')}</b>
          <div>
            <h3 className={shared.failH}>{s.name}</h3>
            <p>{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function RedditResearchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Nav page="content" />
      <main>
        <header className={shared.hero}>
          <div className="wrap">
            <p className={shared.label}>Reddit research</p>
            <h1 className={shared.display}>The Reddit market research tool for finding ad angles.</h1>
            <div className={shared.lines}>
              <p>
                Your customers describe their problems on Reddit more honestly than they ever will in a survey. Loopy
                finds those threads, saves what people said word for word, and turns it into ad angles your team can
                brief.
              </p>
              <p>
                It reads reviews and TikTok and YouTube comments too, so a single thread never decides the angle on its
                own.
              </p>
            </div>
            <div className="ctas">
              <a className="pill pill-primary" href={APP_URL}>
                Try it free
              </a>
              <a className="pill pill-outline" href={CAL_URL}>
                Book a demo
              </a>
            </div>
            <ul className={shared.trust}>
              <li>
                <Check />
                Free to try with Limited research
              </li>
              <li>
                <Check />
                Every quote keeps its subreddit
              </li>
              <li>
                <Check />
                Built for agencies running Meta ads
              </li>
            </ul>

            <figure className={shared.heroTile}>
              <div className={shared.heroStage}>
                <Quote icon="/landing/appicons/reddit.png" source="r/30PlusSkinCare">
                  {'“The only thing that truly helps me is hydrocortisone 😭 but can’t use it too often.”'}
                </Quote>
                <Connector />
                <div className={`${shared.card} ${shared.ideaCard}`}>
                  <span className={shared.meta}>
                    <span className={shared.stage}>Problem aware</span>
                    <span className="ang a-obj">Objection</span>
                  </span>
                  <b>Still cycling through steroid creams?</b>
                </div>
              </div>
              <figcaption className={shared.tileCap}>
                A real Reddit quote and one of the ideas Loopy built from the research for svensisland.com.au.
              </figcaption>
            </figure>
          </div>
        </header>

        <div className={`wrap ${shared.shell}`}>
          <aside className={shared.rail} aria-label="On this page">
            <span className={shared.railLabel}>On this page</span>
            {TOC.map(([id, label], i) => (
              <a key={id} href={`#${id}`} className={shared.railLink}>
                <b>{String(i + 1).padStart(2, '0')}</b> {label}
              </a>
            ))}
          </aside>

          <article className={shared.article}>
            <section id="why-reddit" className={shared.section}>
              <h2>What Reddit tells you that surveys don’t</h2>
              <p className={shared.body}>
                People post on Reddit when they’re stuck: the cream that stopped working, the routine they gave up on,
                the product they returned. Nobody asked them, so they use their own words and they’re blunt about what
                annoyed them.
              </p>
              <p className={shared.body}>
                Those words make good ads. A headline that repeats how a buyer described the problem reads as if it was
                written for them, because in a sense it was.
              </p>
            </section>

            <section id="how" className={shared.section}>
              <h2>How Loopy does Reddit research</h2>
              <Steps items={STEPS} />
              <p className={shared.body}>
                Reddit is one source of several. Loopy also reads product reviews and TikTok and YouTube comments, so
                you can see when the same complaint turns up in more than one place.
              </p>
            </section>

            <section id="example" className={shared.section}>
              <h2>A real example</h2>
              <p className={shared.body}>
                Real quotes and output from Loopy’s research for Svens Island, an Australian brand that makes natural
                cream for eczema-prone skin.
              </p>
              <figure className={shared.flow} aria-label="One Svens Island idea, from Reddit quotes to the brief">
                <div className={`${shared.step} ${styles.tall}`}>
                  <p className={shared.lab}>What people said on Reddit</p>
                  <div className={shared.quotes}>
                    <Quote icon="/landing/appicons/reddit.png" source="r/30PlusSkinCare">
                      {'“The only thing that truly helps me is hydrocortisone 😭 but can’t use it too often.”'}
                    </Quote>
                    <Quote icon="/landing/appicons/reddit.png" source="r/NewParents">
                      {'“The prescription works but always comes back a few days after we stop.”'}
                    </Quote>
                  </div>
                </div>
                <div className={shared.step}>
                  <p className={shared.lab}>The idea</p>
                  <ol className={shared.ideas}>
                    <li className={`${shared.idea} ${shared.on}`}>
                      <span className={shared.meta}>
                        Problem aware <span className="ang a-obj">Objection</span>
                      </span>
                      <b>Still cycling through steroid creams?</b>
                    </li>
                  </ol>
                </div>
                <div className={shared.step}>
                  <p className={shared.lab}>The brief line</p>
                  <div className={`${shared.card} ${shared.brief}`}>
                    <p>Your child’s eczema won’t calm until you try natural.</p>
                    <div className={shared.briefRow}>
                      <div className={shared.ad}>
                        <Image
                          src="/landing/ladder-problem.jpg"
                          alt="Reference ad: Native Pet's before and after thermal photo, split by a line down the middle"
                          width={104}
                          height={185}
                        />
                        <span className="pin" style={{ left: '50%', top: '50%' } as CSSProperties}>
                          1
                        </span>
                      </div>
                      <p className={shared.note}>
                        <span className="pin">1</span>Keep the before and after split with the line down the middle.
                      </p>
                    </div>
                  </div>
                </div>
              </figure>
              <p className={shared.cap}>Every quote and line here is real Loopy output for svensisland.com.au.</p>
            </section>

            <section id="by-hand" className={shared.section}>
              <h2>How to do Reddit market research by hand</h2>
              <Steps items={BY_HAND} />
              <p className={shared.body}>
                This works, but it takes hours per client and you have to repeat it every time you brief. Loopy runs
                these five steps for you with the sources attached. If you only need one brief, the{' '}
                <Link href="/creative-brief-generator">free creative brief generator</Link> runs a smaller version of
                this from a product page.
              </p>
            </section>

            <section id="fit" className={shared.section}>
              <h2>Who it’s for, and who it isn’t</h2>
              <div className={styles.fit}>
                <div className={styles.fitTile}>
                  <h3>Built for</h3>
                  <p>
                    Agencies and in-house teams running Meta ads for e-commerce brands who want angles and briefs built
                    on what buyers really say. If you used GummySearch to find customer pain points for ads, Loopy
                    covers that part.
                  </p>
                </div>
                <div className={styles.fitTile}>
                  <h3>Not built for</h3>
                  <p>
                    Monitoring Reddit for brand mentions, finding sales leads in threads, or scheduling Reddit posts.
                    Loopy doesn’t do those, and a tool made for Reddit monitoring or lead generation will serve you
                    better.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>

        <section className="wrap section">
          <div className={shared.cta}>
            <h2 className="sh">See what your client’s customers are saying on Reddit.</h2>
            <p className="sub">
              Start free with Limited research, or book a 20-minute demo and we’ll build a brief live on one of your
              clients.
            </p>
            <div className="ctas">
              <a className="pill pill-primary" href={APP_URL}>
                Try it free
              </a>
              <a className="pill pill-outline" href={CAL_URL}>
                Book a demo
              </a>
            </div>
          </div>
        </section>

        <Faq title="Reddit research questions." items={FAQS} />
      </main>
      <Footer page="content" />
    </>
  );
}
