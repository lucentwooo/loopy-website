import type { ReactNode } from 'react';
import { ANNUAL_SAVINGS_PCT, PAID_PLANS } from '@/lib/billing-catalog';
import styles from './Faq.module.css';

export interface FaqItem {
  q: string;
  a: ReactNode;
}

/** The landing FAQ, also shown on /pricing. */
const FAQS: FaqItem[] = [
  {
    q: 'Is this just another AI template tool?',
    a: 'No. There’s no prompt box and no templates to pick from. A real browser reads your site, and the ideas come from customer research and a library of competitor ads, sorted by how long they stayed live on Meta.',
  },
  {
    q: 'Will it make things up about my brand?',
    a: 'No. It works from your live site and anything you give it, like a deck, call notes or an old brief. It uses product photos exactly as they are and never redraws them.',
  },
  {
    q: 'What happens in the demo?',
    a: 'You spend 20 minutes with the founders. We run your brand through Loopy while you watch, and you keep the brief. We’ll also ask where your week goes, because that tells us what to build next.',
  },
  {
    q: 'What do I get?',
    a: 'You get a ready-to-use brief sorted by awareness stage, with copy, reference ads and notes for your designer. You can share it as a link or export it as a PDF or Markdown file. Loopy can also make static ads in feed and story sizes if you want them.',
  },
  {
    q: 'Can we help shape what you build?',
    a: 'Yes. We build Loopy with the people who use it. Tell us which part of your creative work takes the most hours, and we’ll work on it next.',
  },
  {
    q: 'What does it cost?',
    a: `Your first brief is free, and you don’t need a card. After that, plans start at $${PAID_PLANS[0].monthlyPrice} a month, and paying yearly saves ${ANNUAL_SAVINGS_PCT}%.`,
  },
];

/** Native-details accordion, first answer open. Shared by every page. */
export function Faq({ title = 'Fair questions.', items = FAQS }: { title?: string; items?: FaqItem[] }) {
  return (
    <section className={`wrap section ${styles.faq}`} id="faq">
      <h2 className="sh">{title}</h2>
      <div className={styles.list}>
        {items.map((item, i) => (
          <details key={item.q} open={i === 0}>
            <summary>
              {item.q}
              <span className={styles.pm} />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
