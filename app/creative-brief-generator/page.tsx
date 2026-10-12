import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav/Nav';
import { Faq, type FaqItem } from '@/components/Faq/Faq';
import { Footer } from '@/components/Footer/Footer';
import { CAL_URL, SITE_URL } from '@/lib/site';
import shared from '../ad-creative-brief-template/page.module.css';
import styles from './page.module.css';

const PATH = '/creative-brief-generator';
const FREE_BRIEF_URL = 'https://app.tryloopy.io/free-brief';

const TITLE = 'Free Creative Brief Generator for Meta Ads, Research-Backed';
const DESCRIPTION =
  'Paste a product page and get a Meta ads creative brief built from what real customers say: three concepts, headlines and ad copy. Free, no account needed.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: 'website', url: PATH, siteName: 'Loopy', title: TITLE, description: DESCRIPTION },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const TILES = [
  {
    title: 'Three ad concepts',
    body: 'Each one takes a different angle on the same product, so your tests compare real differences instead of small tweaks.',
  },
  {
    title: 'Three headlines for each',
    body: 'Written in the customer’s own words wherever the research found them, with the body copy to go underneath.',
  },
  {
    title: 'The quotes behind them',
    body: 'You see the customer quotes Loopy found, so you can check where each idea came from before you brief a designer.',
  },
];

const STEPS: { name: string; body: ReactNode }[] = [
  {
    name: 'Paste a product page and your email',
    body: 'Any product page works. If you have reviews, support emails or survey answers, paste those in too and the research has more to work with.',
  },
  {
    name: 'Loopy does the research',
    body: (
      <>
        It reads the page, then looks for what people say about the problem in{' '}
        <Link href="/reddit-market-research-tool">Reddit threads</Link>, reviews and video comments.
      </>
    ),
  },
  {
    name: 'Your brief arrives by email',
    body: 'You can close the tab while it works. The link comes to your inbox when the brief is ready.',
  },
  {
    name: 'Turn it into ads if you want',
    body: 'A free Loopy account turns the concepts into static ad images, ready for Ads Manager.',
  },
];

const COMPARE = [
  ['Where the ideas come from', 'The answers you type in', 'What customers say online, plus the product page'],
  ['Speed', 'Instant', 'Waits for the research to finish'],
  ['Works for', 'Any project: branding, web design, video', 'Meta ads for e-commerce products'],
  ['What you get', 'A filled-in brief document', 'Three ad concepts with headlines, copy and the quotes behind them'],
  ['Cost', 'Usually free', 'Free, one brief per email'],
];

const FAQS: FaqItem[] = [
  {
    q: 'Is the creative brief generator free?',
    a: 'Yes. Your first brief is free and you don’t need an account, just a product page and an email address. It’s one free brief per email. Turning the concepts into ad images needs a free Loopy account.',
  },
  {
    q: 'What does the generator need from me?',
    a: 'A product page URL and your email. You can also paste reviews, support emails or survey answers, which gives the research more to work with.',
  },
  {
    q: 'How is this different from asking ChatGPT for a brief?',
    a: 'ChatGPT writes from whatever you put in the prompt. Loopy first goes and finds what customers say about the problem, writes the concepts from those quotes, and shows you the quotes so you can check its work.',
  },
  {
    q: 'Can agencies use it for client work?',
    a: 'Yes, agencies are who it’s built for. It gets you a first brief on a new client without spending a day on research, and your team still decides what runs.',
  },
  {
    q: 'What kind of brands does it work for?',
    a: 'E-commerce and DTC products sold with Meta ads. It works best when people talk about the problem online, because that is what the research reads.',
  },
  {
    q: 'Can I write the brief myself instead?',
    a: 'Yes. The free Meta ads creative brief template on this site uses the same structure, starting with customer research, and includes a real filled-in example.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}${PATH}#app`,
      name: 'Loopy creative brief generator',
      description: DESCRIPTION,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: FREE_BRIEF_URL,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Loopy', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Creative brief generator', item: `${SITE_URL}${PATH}` },
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
  ['what-you-get', 'What you get'],
  ['how', 'How it works'],
  ['compare', 'Form generators vs a research-first brief'],
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

export default function CreativeBriefGeneratorPage() {
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
            <p className={shared.label}>Free tool</p>
            <h1 className={shared.display}>A free creative brief generator that starts with what customers say.</h1>
            <div className={shared.lines}>
              <p>
                Most brief generators turn the answers you type into a tidy document. Loopy starts somewhere else: it
                reads the product page, finds what buyers say about the problem in reviews and online threads, and
                writes the brief from that.
              </p>
              <p>
                Paste a product page and your email. You get three ad concepts, each with three headlines and the ad
                copy, and the link lands in your inbox.
              </p>
            </div>
            <div className="ctas">
              <a className="pill pill-primary" href={FREE_BRIEF_URL}>
                Get your free brief
              </a>
              <Link className="pill pill-outline" href="/ad-creative-brief-template">
                See the brief template
              </Link>
            </div>
            <ul className={shared.trust}>
              <li>
                <Check />
                No account needed
              </li>
              <li>
                <Check />
                Researches customers before writing
              </li>
              <li>
                <Check />
                Brief link sent to your email
              </li>
            </ul>

            <figure className={shared.heroTile}>
              <div className={shared.heroStage}>
                <div className={`${shared.card} ${styles.concepts}`}>
                  <p className={shared.lab}>Concepts from a real Loopy brief</p>
                  <ol className={shared.ideas}>
                    <li className={shared.idea}>
                      <span className={shared.meta}>
                        Problem aware <span className="ang a-obj">Objection</span>
                      </span>
                      <b>Still cycling through steroid creams?</b>
                    </li>
                    <li className={shared.idea}>
                      <span className={shared.meta}>
                        Solution aware <span className="ang a-desire">Desire</span>
                      </span>
                      <b>Less redness and inflammation in 5 days.</b>
                    </li>
                    <li className={shared.idea}>
                      <span className={shared.meta}>
                        Most aware <span className="ang a-offer">Offer</span>
                      </span>
                      <b>Feel relief or get a refund</b>
                    </li>
                  </ol>
                </div>
              </div>
              <figcaption className={shared.tileCap}>Real concepts Loopy wrote for svensisland.com.au.</figcaption>
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
            <section id="what-you-get" className={shared.section}>
              <h2>What you get</h2>
              <div className={styles.tiles}>
                {TILES.map((t) => (
                  <div key={t.title} className={styles.tile}>
                    <h3>{t.title}</h3>
                    <p>{t.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="how" className={shared.section}>
              <h2>How it works</h2>
              <ol className={`${shared.specList} ${styles.steps}`}>
                {STEPS.map((s, i) => (
                  <li key={s.name}>
                    <b className={shared.num}>{String(i + 1).padStart(2, '0')}</b>
                    <div>
                      <h3 className={shared.failH}>{s.name}</h3>
                      <p>{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="compare" className={shared.section}>
              <h2>Form generators vs a research-first brief</h2>
              <p className={shared.body}>
                Form tools are faster and work for any kind of project, so use one if you need a branding or web design
                brief. For Meta ads, a brief is only as good as what you know about the buyer, and that is the part a
                form can’t fill in.
              </p>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <caption>Form-based creative brief generators compared with Loopy</caption>
                  <thead>
                    <tr>
                      <td />
                      <th scope="col">Form-based generator</th>
                      <th scope="col">Loopy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE.map(([row, form, loopy]) => (
                      <tr key={row}>
                        <th scope="row">{row}</th>
                        <td>{form}</td>
                        <td>{loopy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </article>
        </div>

        <section className="wrap section">
          <div className={shared.cta}>
            <h2 className="sh">Get a brief for your next client in your inbox.</h2>
            <p className="sub">
              Paste a product page and your email. You don’t need an account or a card. If you’d rather write it
              yourself, start from the <Link href="/ad-creative-brief-template">Meta ads creative brief template</Link>.
            </p>
            <div className="ctas">
              <a className="pill pill-primary" href={FREE_BRIEF_URL}>
                Get your free brief
              </a>
              <a className="pill pill-outline" href={CAL_URL}>
                Book a demo
              </a>
            </div>
          </div>
        </section>

        <Faq title="Generator questions." items={FAQS} />
      </main>
      <Footer page="content" />
    </>
  );
}
