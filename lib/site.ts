/** Every CTA on the site books the same 20-minute founder call. */
export const CAL_URL = 'https://cal.com/loopy/20min';

/** The self-serve Loopy platform, for visitors who'd rather try it than talk. */
export const APP_URL = 'https://app.tryloopy.io';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tryloopy.io';

// The app's checkout route for this URL is not built yet.
export const STARTER_CHECKOUT_URL = `${APP_URL}/api/starter/checkout`;
