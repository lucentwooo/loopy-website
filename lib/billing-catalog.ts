/** Single source of truth for Loopy's plans. Consumed by the pricing UI,
 *  JSON-LD offers and anywhere prices are shown. Stripe mirrors these
 *  products/prices; change them here first. */

export type BillingPeriod = 'monthly' | 'annual';

export const PERIOD_MULTIPLIER: Record<BillingPeriod, number> = {
  monthly: 1,
  annual: 0.85, // pay yearly, save 15% (the app's TERM_DISCOUNT.annual)
};

/** The yearly saving as a whole percent, for copy ("save 15%"). */
export const ANNUAL_SAVINGS_PCT = Math.round((1 - PERIOD_MULTIPLIER.annual) * 100);

export interface PaidPlan {
  /** The app's plan keys: Pro is still `agency` in the app's database. */
  id: 'starter' | 'agency';
  name: string;
  monthlyPrice: number;
  brands: number;
  adsPerMonth: number;
}

export const PAID_PLANS: PaidPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 149,
    brands: 1,
    adsPerMonth: 30,
  },
  {
    id: 'agency',
    name: 'Pro',
    monthlyPrice: 299,
    brands: 3,
    adsPerMonth: 100,
  },
];

export const FREE_PLAN = {
  name: 'Free',
  brands: 1,
  researchRuns: 1,
  lifetimeRenders: 10,
} as const;

/** Booked through a call, never card checkout. */
export const MAX_PLAN = {
  name: 'Max',
  fromMonthly: 1999,
} as const;

export function priceFor(plan: PaidPlan, period: BillingPeriod): number {
  return Math.round(plan.monthlyPrice * PERIOD_MULTIPLIER[period]);
}
