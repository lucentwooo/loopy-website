'use client';

import { useState } from 'react';
import { STARTER_CHECKOUT_URL } from '@/lib/site';
import { ReadyBy } from './ReadyBy';
import styles from './starter.module.css';

const BASE = 99;
const EXTRA = 49;

export function OfferForm() {
  const [extra, setExtra] = useState(false);
  return (
    <form className={styles.offer} method="post" action={STARTER_CHECKOUT_URL}>
      <div className={styles.offerTop}>
        <b>The starter</b>
        <span className={`${styles.chip} ${styles.chipSm}`}>One per brand</span>
      </div>
      <div className={styles.priceRow}>
        <span className={styles.priceNum}>$99</span>
        <span>one time, no subscription</span>
      </div>
      <ul className={styles.checks}>
        <li><svg width="16" height="16"><use href="#i-check" /></svg>Your competitor breakdown</li>
        <li><svg width="16" height="16"><use href="#i-check" /></svg>10 static ads for your brand</li>
        <li><svg width="16" height="16"><use href="#i-check" /></svg>Primary text, headline and button for each</li>
        <li><svg width="16" height="16"><use href="#i-check" /></svg>Launch video and ad IDs</li>
        <li>
          <svg width="16" height="16"><use href="#i-check" /></svg>
          <span>Ready <b><ReadyBy hours={1} /></b></span>
        </li>
      </ul>
      <div className={styles.rule} />
      <div className={styles.extras}>
        <span className={styles.extrasH}>Add to your order</span>
        <label className={styles.extra} htmlFor="x-more">
          <input type="checkbox" id="x-more" name="extra_ads" value="1" checked={extra} onChange={(e) => setExtra(e.target.checked)} />
          <span><b>10 more ads</b>A second set on new angles</span>
          <span className={styles.amt}>+${EXTRA}</span>
        </label>
      </div>
      <div className={styles.fields}>
        <label className={styles.field} htmlFor="o-site">
          <svg width="16" height="16"><use href="#i-globe" /></svg>
          <input id="o-site" name="website" type="text" inputMode="url" placeholder="yourbrand.com" autoComplete="url" aria-label="Your website" required />
        </label>
        <label className={styles.field} htmlFor="o-email">
          <svg width="16" height="16"><use href="#i-mail" /></svg>
          <input id="o-email" name="email" type="email" placeholder="you@yourbrand.com" autoComplete="email" aria-label="Your email" required />
        </label>
      </div>
      <button className={`${styles.pill} ${styles.pillPrimary}`} type="submit">
        Continue to checkout, ${BASE + (extra ? EXTRA : 0)}
      </button>
      <p className={styles.fine}>Secure checkout with Stripe.</p>
    </form>
  );
}
