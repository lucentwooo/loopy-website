'use client';

import { useState } from 'react';
import { CAL_URL } from '@/lib/site';
import {
  FREE_PLAN,
  PAID_PLANS,
  STUDIO_PLAN,
  priceFor,
  type BillingPeriod,
} from '@/lib/billing-catalog';
import styles from './Pricing.module.css';

type Period = BillingPeriod;

const PERIODS: { key: Period; label: string; discount?: string }[] = [
  { key: 'monthly', label: 'monthly' },
  { key: 'annual', label: 'annual', discount: '2 months free' },
];

const Check = ({ children }: { children: React.ReactNode }) => (
  <span>
    <b className={styles.check}>✓</b>&nbsp; {children}
  </span>
);

export function Pricing() {
  const [period, setPeriod] = useState<Period>('monthly');

  return (
    <>
      <header className={styles.hero}>
        <h1 className={styles.h1}>One free brief. Then rates that scale with your roster.</h1>
        <p className={styles.sub}>
          Every plan starts the same way: 20 minutes with the founders, a real client&rsquo;s URL, and your first
          client brief free, no card. We set you up on the call.
        </p>
        <div role="group" aria-label="Billing period" className={styles.toggle}>
          {PERIODS.map((p) => (
            <button
              key={p.key}
              type="button"
              onClick={() => setPeriod(p.key)}
              className={`${styles.segment}${period === p.key ? ` ${styles.segmentActive}` : ''}`}
            >
              {p.label}
              {p.discount && <span className={styles.discount}> {p.discount}</span>}
            </button>
          ))}
        </div>
      </header>

      <section className={styles.plans}>
        <div className={styles.plan}>
          <h2 className={styles.planName}>{FREE_PLAN.name}</h2>
          <p className={styles.planTag}>see it work on a real client</p>
          <p className={styles.price}>
            $0<span className={styles.priceUnit}> free</span>
          </p>
          <a href={CAL_URL} className={styles.btnGhost}>
            try it on a call <span aria-hidden="true">↗</span>
          </a>
          <div className={styles.features}>
            <Check>hyper-personalized research on one real client</Check>
            <Check>ranked concepts built from their customers and competitors</Check>
            <Check>an exportable client-ready brief you keep</Check>
            <Check>{FREE_PLAN.lifetimeRenders} on-brand ads that never expire</Check>
            <Check>no card required</Check>
          </div>
        </div>

        {PAID_PLANS.map((plan) => {
          const isAgency = plan.id === 'agency';
          const shown = priceFor(plan, period);
          return (
            <div key={plan.id} className={`${styles.plan} ${isAgency ? styles.planPro : ''}`}>
              {isAgency && (
                <div className={styles.proHead}>
                  <h2 className={styles.planName}>{plan.name}</h2>
                  {/* plain text label — no pill/badge background, by explicit decision */}
                  <span className={styles.mostPopular}>most popular</span>
                </div>
              )}
              {!isAgency && <h2 className={styles.planName}>{plan.name}</h2>}
              <p className={styles.planTag}>{isAgency ? 'scale across every client' : 'for your first clients'}</p>
              <p className={styles.price}>
                ${shown}
                <span className={styles.priceUnit}>/month</span>
              </p>
              {period === 'annual' && (
                <p className={styles.billed}>${(shown * 12).toLocaleString()} billed yearly</p>
              )}
              <p className={styles.planTag}>
                {plan.brands} brands - {plan.rendersPerMonth.toLocaleString()} renders/mo
              </p>
              <a href={CAL_URL} className={`${isAgency ? `${styles.btnBlue} ${styles.btnPro}` : styles.btnInk}`}>
                get started on a call <span aria-hidden="true">↗</span>
              </a>
              <div className={styles.features}>
                {isAgency ? (
                  <>
                    <Check>everything in Starter, across {plan.brands} client brands</Check>
                    <Check>run research and briefs for your whole roster, not just your biggest accounts</Check>
                    <Check>{plan.rendersPerMonth.toLocaleString()} on-brand ads a month to test every concept</Check>
                    <Check>performance loop (beta): real results feed the next brief</Check>
                    <Check>extra brand +${plan.extraBrandMonthly}/mo</Check>
                  </>
                ) : (
                  <>
                    <Check>hyper-personalized research on each client&rsquo;s customers and competitors</Check>
                    <Check>concepts ranked by what&rsquo;s already winning in their category</Check>
                    <Check>client-ready briefs your designers can build from same day</Check>
                    <Check>{plan.rendersPerMonth.toLocaleString()} ads a month in each client&rsquo;s real colors, fonts and logo</Check>
                    <Check>extra brand +${plan.extraBrandMonthly}/mo</Check>
                  </>
                )}
              </div>
            </div>
          );
        })}

        <div className={styles.plan}>
          <h2 className={styles.planName}>{STUDIO_PLAN.name}</h2>
          <p className={styles.planTag}>big rosters, one pipeline</p>
          <p className={styles.price}>
            Custom<span className={styles.priceUnit}> quote</span>
          </p>
          <a href={CAL_URL} className={styles.btnGhost}>
            talk to us <span aria-hidden="true">↗</span>
          </a>
          <div className={styles.features}>
            <Check>everything in Agency, for {STUDIO_PLAN.minBrands}+ client brands</Check>
            <Check>{STUDIO_PLAN.rendersPerMonth.toLocaleString()}+ on-brand ads a month</Check>
            <Check>design partner: request features, shape the roadmap</Check>
            <Check>priority support</Check>
          </div>
        </div>
      </section>

      <p className={styles.fineprint}>
        Pay yearly and get 2 months free. Every button above books the same 20-minute call; we set
        your account up there.
      </p>
    </>
  );
}
