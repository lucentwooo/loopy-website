'use client';

import { useState } from 'react';
import { APP_URL, CAL_URL } from '@/lib/site';
import { FREE_PLAN, PAID_PLANS, STUDIO_PLAN, priceFor, type BillingPeriod, type PaidPlan } from '@/lib/billing-catalog';
import styles from './Pricing.module.css';

const [STARTER, AGENCY] = PAID_PLANS;

type Plan = {
  name: string;
  tag: string;
  cta: string;
  href: string;
  hot?: boolean;
  /** Paid plans show a price per month and per brand; the rest show `flat`. */
  paid?: PaidPlan;
  flat?: string;
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
    tag: 'Research and briefs for your first few clients.',
    paid: STARTER,
    cta: `Start with ${STARTER.brands} brands`,
    href: APP_URL,
    includes: [
      `${STARTER.brands} client brands`,
      'Unlimited briefs, hooks and copy',
      'Deep customer research on every brand',
      'Learns from your ad results',
      `${STARTER.rendersPerMonth.toLocaleString('en-US')} image renders a month`,
    ],
  },
  {
    name: AGENCY.name,
    tag: 'Know what ad to make next, for every client.',
    paid: AGENCY,
    hot: true,
    cta: `Start with ${AGENCY.brands} brands`,
    href: APP_URL,
    includes: [
      `${AGENCY.brands} client brands`,
      'Everything in Starter',
      'Client workspaces',
      'Guided onboarding call',
      `${AGENCY.rendersPerMonth.toLocaleString('en-US')} image renders a month`,
    ],
  },
  {
    name: STUDIO_PLAN.name,
    tag: 'For rosters bigger than 10 clients.',
    flat: 'Custom',
    cta: 'Talk to us',
    href: CAL_URL,
    includes: [
      `${STUDIO_PLAN.minBrands} brands, more if you need them`,
      'Everything in Agency',
      'Dedicated onboarding',
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
        <Heading className="sh">Start free, then pay as your client list grows.</Heading>
        <p className="sub">Pay monthly, or pay yearly and save 15%.</p>
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
                <b>{price === null ? plan.flat : `$${price}`}</b>
                {price !== null && <small>/mo</small>}
              </p>
              <p className={styles.yr}>
                {plan.paid && price !== null ? `$${Math.round(price / plan.paid.brands)} a brand` : null}
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
