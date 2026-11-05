'use client';

import { useState } from 'react';
import { APP_URL, CAL_URL } from '@/lib/site';
import { ANNUAL_SAVINGS_PCT, FREE_PLAN, MAX_PLAN, PAID_PLANS, priceFor, type BillingPeriod, type PaidPlan } from '@/lib/billing-catalog';
import styles from './Pricing.module.css';

const [STARTER, PRO] = PAID_PLANS;

// Paid card copy matches the app's plan cards word for word; change both together.
type Plan = {
  name: string;
  tag: string;
  cta: string;
  href: string;
  hot?: boolean;
  /** Paid plans show a price that follows the billing toggle; the rest show `flat`. */
  paid?: PaidPlan;
  flat?: string;
  /** Prefix the price, as in "From $1,999/mo". */
  from?: boolean;
  includes: string[];
};

const PLANS: Plan[] = [
  {
    name: FREE_PLAN.name,
    tag: 'See it work on your real brand.',
    flat: '$0',
    cta: 'Start free',
    href: APP_URL,
    includes: [
      `${FREE_PLAN.brands} brand`,
      '1 full brief: research, hooks, copy',
      `${FREE_PLAN.researchRuns} customer research run`,
      `${FREE_PLAN.lifetimeRenders} image renders`,
      'No card needed',
    ],
  },
  {
    name: STARTER.name,
    tag: 'New ad concepts every month for one brand, each backed by what your customers say.',
    paid: STARTER,
    cta: 'Start with 1 brand',
    href: APP_URL,
    includes: [
      '1 brand',
      `${STARTER.adsPerMonth} finished ads a month`,
      '1 image per ad, plus 3 re-rolls',
      'Deep customer research, refreshed every week',
      'Competitor ads your rivals keep paying to run',
      'Personas and messaging from real customer words',
      'Dig deeper on any concept: fresh customer quotes, a sharper rewrite and new angles (5 per brand each week)',
    ],
  },
  {
    name: PRO.name,
    tag: 'For creative strategists and brands with several product lines.',
    paid: PRO,
    hot: true,
    cta: 'Start with 3 brands',
    href: APP_URL,
    includes: [
      `${PRO.brands} brands`,
      'Everything in Starter',
      `${PRO.adsPerMonth} finished ads a month`,
      'Guided onboarding call',
    ],
  },
  {
    name: MAX_PLAN.name,
    tag: 'We help you build your ad operation in-house and automate your creative workflow.',
    flat: `$${MAX_PLAN.fromMonthly.toLocaleString('en-US')}`,
    from: true,
    cta: 'Talk to us',
    href: CAL_URL,
    includes: [
      'As many brands as you need',
      'Everything in Pro',
      'We set up your in-house ad workflow with you',
      'Direct line to the founders',
    ],
  },
];

const PERIODS: { key: BillingPeriod; label: string }[] = [
  { key: 'monthly', label: 'Monthly' },
  { key: 'annual', label: 'Yearly' },
];

function Tick() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.2 8.4l3 3 6.6-7" />
    </svg>
  );
}

/** The pricing section. On /pricing it opens the page (`standalone`), so the
 *  headline is the page's h1 and sits closer to the nav. */
export function Pricing({ standalone = false }: { standalone?: boolean }) {
  const [period, setPeriod] = useState<BillingPeriod>('monthly');
  const Heading = standalone ? 'h1' : 'h2';

  return (
    <section
      className={`wrap section ${styles.pricing}${standalone ? ` ${styles.standalone}` : ''}`}
      id="pricing"
    >
      <div className="sec-head">
        <Heading className="sh">Start free, then pay as you add brands.</Heading>
        <p className="sub">
          For DTC brands and the creative strategists who make their ads. Local service businesses can try it too.
          Pay monthly, or pay yearly and save {ANNUAL_SAVINGS_PCT}%.
        </p>
      </div>
      <div className={styles.bill} role="group" aria-label="Billing period">
        {PERIODS.map((p) => (
          <button key={p.key} type="button" aria-pressed={period === p.key} onClick={() => setPeriod(p.key)}>
            {p.label}
          </button>
        ))}
      </div>
      <div className={styles.plans}>
        {PLANS.map((plan) => {
          const price = plan.paid ? priceFor(plan.paid, period) : null;
          return (
            <article key={plan.name} className={`${styles.plan}${plan.hot ? ` ${styles.hot}` : ''}`}>
              <h3>
                {plan.name}
                {plan.hot && <span className={styles.popular}>Most popular</span>}
              </h3>
              <p className={styles.tag}>{plan.tag}</p>
              <p className={styles.price}>
                {plan.from && <small>From</small>}
                <b>{price === null ? plan.flat : `$${price}`}</b>
                {(price !== null || plan.from) && <small>/mo</small>}
              </p>
              <a className={`pill ${plan.hot ? 'pill-primary' : 'pill-outline'}`} href={plan.href}>
                {plan.cta}
              </a>
              <ul className={styles.incl}>
                {plan.includes.map((item) => (
                  <li key={item}>
                    <Tick />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
      <p className={styles.note}>Pick a plan in the app and pay by card.</p>
    </section>
  );
}
