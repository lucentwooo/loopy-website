'use client';

import { useState } from 'react';
import { APP_URL, CAL_URL } from '@/lib/site';
import { ANNUAL_SAVINGS_PCT, FREE_PLAN, MAX_PLAN, PAID_PLANS, priceFor, type BillingPeriod, type PaidPlan } from '@/lib/billing-catalog';
import styles from './Pricing.module.css';

const [STARTER, PRO] = PAID_PLANS;

// Card copy matches the app's plan cards word for word; change both together.
type Plan = {
  name: string;
  tag: string;
  cta: string;
  href: string;
  /** Pro: raised, brand-blue ring, primary button. */
  hot?: boolean;
  /** Max: dark card. */
  dark?: boolean;
  /** Paid plans show a price that follows the billing toggle; Max shows `flat`. */
  paid?: PaidPlan;
  flat?: string;
  /** Prefix the price, as in "From $1,999/mo". */
  from?: boolean;
  /** Heading line above the list, "Everything in Starter, plus:". */
  lead?: string;
  includes: string[];
};

const PLANS: Plan[] = [
  {
    name: STARTER.name,
    tag: 'New ad concepts every month for one brand, each backed by what your customers say.',
    paid: STARTER,
    cta: 'Start with 1 brand',
    href: APP_URL,
    includes: [
      '1 brand',
      `${STARTER.adsPerMonth} finished ads a month`,
      'Weekly customer research and competitor ads',
      'Dig deeper 5 times a week',
    ],
  },
  {
    name: PRO.name,
    tag: 'For creative strategists and brands with several product lines.',
    paid: PRO,
    hot: true,
    cta: 'Start with 3 brands',
    href: APP_URL,
    lead: `Everything in ${STARTER.name}, plus:`,
    includes: [
      `${PRO.brands} brands`,
      `${PRO.adsPerMonth} finished ads a month`,
      'Dig deeper 15 times a week (5 per brand)',
      'Guided onboarding call',
      'Priority support: the founders reply within one working day',
    ],
  },
  {
    name: MAX_PLAN.name,
    tag: 'We help you build your ad operation in-house and automate your creative workflow.',
    flat: `$${MAX_PLAN.fromMonthly.toLocaleString('en-US')}`,
    from: true,
    dark: true,
    cta: 'Talk to us',
    href: CAL_URL,
    lead: `Everything in ${PRO.name}, plus:`,
    includes: [
      'As many brands as you need',
      'Monthly ads set to fit your team',
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
          Pay monthly or yearly.
        </p>
      </div>
      <div className={styles.bill} role="group" aria-label="Billing period">
        {PERIODS.map((p) => (
          <button key={p.key} type="button" aria-pressed={period === p.key} onClick={() => setPeriod(p.key)}>
            {p.label}
          </button>
        ))}
      </div>
      <a className={styles.free} href={APP_URL}>
        Or start free with {FREE_PLAN.brands} brand, no card <span aria-hidden="true">→</span>
      </a>
      <div className={styles.plans}>
        {PLANS.map((plan) => {
          const price = plan.paid ? priceFor(plan.paid, period) : null;
          const cls = [styles.plan, plan.hot && styles.hot, plan.dark && styles.max].filter(Boolean).join(' ');
          return (
            <article key={plan.name} className={cls}>
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
              <p className={styles.billed}>
                {price !== null && period === 'annual' && `$${(price * 12).toLocaleString('en-US')} billed yearly`}
              </p>
              <a className={`pill ${plan.hot ? 'pill-primary' : plan.dark ? styles.onDark : 'pill-outline'}`} href={plan.href}>
                {plan.cta}
              </a>
              <div className={styles.incl}>
                {plan.lead && <p className={styles.lead}>{plan.lead}</p>}
                <ul>
                  {plan.includes.map((item) => (
                    <li key={item}>
                      <Tick />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
      <p className={styles.note}>
        Every paid ad comes with 1 image and up to 3 re-rolls. Pay yearly and save {ANNUAL_SAVINGS_PCT}%.
      </p>
    </section>
  );
}
