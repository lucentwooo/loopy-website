// Records which link brought a visitor, in a cookie shared with app.tryloopy.io.
// The app reads the same `loopy_touch` cookie, so the shape and rules here are a
// contract with the app repo: change both sides together.

export type Touch = {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  ref: string | null;
  click_id: 'gclid' | 'fbclid' | null;
  referrer_domain: string | null;
  landing_path: string;
  in_app: 'instagram' | 'facebook' | 'tiktok' | 'linkedin' | 'snapchat' | null;
};

export type Touches = { first: Touch; last: Touch };

const COOKIE_NAME = 'loopy_touch';
const MAX_AGE_SECONDS = 60 * 60 * 24 * 90;
const COOKIE_DOMAIN = 'tryloopy.io';

const IN_APP: [RegExp, NonNullable<Touch['in_app']>][] = [
  [/Instagram/i, 'instagram'],
  [/FBAN|FBAV|FB_IAB/, 'facebook'],
  [/BytedanceWebview|musical_ly|TikTok/i, 'tiktok'],
  [/LinkedInApp/i, 'linkedin'],
  [/Snapchat/i, 'snapchat'],
];

function clean(value: string | null): string | null {
  const v = (value ?? '').trim().toLowerCase().slice(0, 100);
  return v === '' ? null : v;
}

function externalReferrerDomain(referrer: string): string | null {
  let host: string;
  try {
    host = new URL(referrer).hostname.toLowerCase();
  } catch {
    return null;
  }
  const ours = host === COOKIE_DOMAIN || host.endsWith(`.${COOKIE_DOMAIN}`);
  const ignored = ours || host === 'localhost' || host === 'accounts.google.com' || host.endsWith('.supabase.co');
  return ignored ? null : clean(host);
}

export function parseTouch(url: string, referrer: string, userAgent: string): Touch {
  const { pathname, searchParams } = new URL(url);
  const param = (name: string) => searchParams.get(name);
  const clickId = clean(param('gclid')) ? 'gclid' : clean(param('fbclid')) ? 'fbclid' : null;
  return {
    utm_source: clean(param('utm_source')),
    utm_medium: clean(param('utm_medium')),
    utm_campaign: clean(param('utm_campaign')),
    utm_term: clean(param('utm_term')),
    utm_content: clean(param('utm_content')),
    ref: clean(param('ref')),
    click_id: clickId,
    referrer_domain: externalReferrerDomain(referrer),
    landing_path: pathname,
    in_app: IN_APP.find(([re]) => re.test(userAgent))?.[1] ?? null,
  };
}

export function hasSignal(t: Touch): boolean {
  return [t.utm_source, t.utm_medium, t.utm_campaign, t.utm_term, t.utm_content, t.ref, t.click_id, t.referrer_domain].some(
    (v) => v !== null,
  );
}

export function nextTouches(prev: Touches | null, touch: Touch): Touches {
  return { first: prev?.first ?? touch, last: touch };
}

function isNullableString(v: unknown): v is string | null {
  return v === null || typeof v === 'string';
}

function isTouch(v: unknown): v is Touch {
  return (
    typeof v === 'object' &&
    v !== null &&
    'utm_source' in v && isNullableString(v.utm_source) &&
    'utm_medium' in v && isNullableString(v.utm_medium) &&
    'utm_campaign' in v && isNullableString(v.utm_campaign) &&
    'utm_term' in v && isNullableString(v.utm_term) &&
    'utm_content' in v && isNullableString(v.utm_content) &&
    'ref' in v && isNullableString(v.ref) &&
    'click_id' in v && isNullableString(v.click_id) &&
    'referrer_domain' in v && isNullableString(v.referrer_domain) &&
    'landing_path' in v && typeof v.landing_path === 'string' &&
    'in_app' in v && isNullableString(v.in_app)
  );
}

export function parseCookie(cookieString: string): Touches | null {
  const entry = cookieString.split(';').map((s) => s.trim()).find((s) => s.startsWith(`${COOKIE_NAME}=`));
  if (!entry) return null;
  try {
    const parsed: unknown = JSON.parse(decodeURIComponent(entry.slice(COOKIE_NAME.length + 1)));
    if (typeof parsed === 'object' && parsed !== null && 'first' in parsed && 'last' in parsed && isTouch(parsed.first) && isTouch(parsed.last)) {
      return { first: parsed.first, last: parsed.last };
    }
  } catch {
    // garbled cookie: treated as none
  }
  return null;
}

export function serializeCookie(touches: Touches, hostname: string, https: boolean): string {
  const shared = hostname === COOKIE_DOMAIN || hostname.endsWith(`.${COOKIE_DOMAIN}`);
  return [
    `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(touches))}`,
    'path=/',
    `max-age=${MAX_AGE_SECONDS}`,
    'SameSite=Lax',
    ...(https ? ['Secure'] : []),
    ...(shared ? [`domain=.${COOKIE_DOMAIN}`] : []),
  ].join('; ');
}

// Analytics must never break the page, so every failure is swallowed.
export function captureTouch(): void {
  try {
    const touch = parseTouch(location.href, document.referrer, navigator.userAgent);
    if (!hasSignal(touch)) return;
    const next = nextTouches(parseCookie(document.cookie), touch);
    document.cookie = serializeCookie(next, location.hostname, location.protocol === 'https:');
  } catch {
    // swallowed on purpose
  }
}
