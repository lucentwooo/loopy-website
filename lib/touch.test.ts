import { captureTouch, hasSignal, nextTouches, parseCookie, parseTouch, serializeCookie } from './touch';

const SITE = 'https://tryloopy.io/pricing';

describe('parseTouch', () => {
  it('reads utm tags, ref and the path only', () => {
    const t = parseTouch(`${SITE}?utm_source=Meta&utm_medium=paid&utm_campaign=q4&utm_term=a&utm_content=b&ref=Jo#x`, '', '');
    expect(t).toMatchObject({
      utm_source: 'meta',
      utm_medium: 'paid',
      utm_campaign: 'q4',
      utm_term: 'a',
      utm_content: 'b',
      ref: 'jo',
      landing_path: '/pricing',
    });
  });

  it('trims, lowercases, caps at 100 chars and nulls empty values', () => {
    const t = parseTouch(`${SITE}?utm_source=%20%20Meta%20&utm_medium=${'A'.repeat(150)}&utm_campaign=%20`, '', '');
    expect(t.utm_source).toBe('meta');
    expect(t.utm_medium).toBe('a'.repeat(100));
    expect(t.utm_campaign).toBeNull();
  });

  it('records which click id was present without storing it', () => {
    expect(parseTouch(`${SITE}?gclid=abc123`, '', '').click_id).toBe('gclid');
    expect(parseTouch(`${SITE}?fbclid=xyz`, '', '').click_id).toBe('fbclid');
    expect(parseTouch(`${SITE}?gclid=`, '', '').click_id).toBeNull();
    expect(JSON.stringify(parseTouch(`${SITE}?gclid=abc123`, '', ''))).not.toContain('abc123');
  });

  it('keeps an external referrer host', () => {
    expect(parseTouch(SITE, 'https://News.Ycombinator.com/item?id=1', '').referrer_domain).toBe('news.ycombinator.com');
  });

  it.each([
    'https://tryloopy.io/',
    'https://app.tryloopy.io/app',
    'http://localhost:3000/',
    'https://accounts.google.com/o/oauth2',
    'https://pnwnorqczyzqsxklaqbh.supabase.co/auth/v1/callback',
    '',
    'not a url',
  ])('ignores referrer %s', (referrer) => {
    expect(parseTouch(SITE, referrer, '').referrer_domain).toBeNull();
  });

  it.each([
    ['Mozilla/5.0 Instagram 300.0', 'instagram'],
    ['Mozilla/5.0 [FBAN/FBIOS;FBAV/450]', 'facebook'],
    ['Mozilla/5.0 musical_ly_30.0', 'tiktok'],
    ['Mozilla/5.0 LinkedInApp', 'linkedin'],
    ['Mozilla/5.0 Snapchat/12', 'snapchat'],
    ['Mozilla/5.0 Safari/605', null],
  ])('detects in-app browser for %s', (ua, expected) => {
    expect(parseTouch(SITE, '', ua).in_app).toBe(expected);
  });
});

describe('signal rule', () => {
  it('a plain visit has no signal, a tagged or referred one does', () => {
    expect(hasSignal(parseTouch(SITE, '', 'Instagram'))).toBe(false);
    expect(hasSignal(parseTouch(`${SITE}?utm_source=x`, '', ''))).toBe(true);
    expect(hasSignal(parseTouch(`${SITE}?ref=x`, '', ''))).toBe(true);
    expect(hasSignal(parseTouch(`${SITE}?fbclid=x`, '', ''))).toBe(true);
    expect(hasSignal(parseTouch(SITE, 'https://google.com/', ''))).toBe(true);
  });

  it('keeps the first touch and overwrites the last', () => {
    const a = parseTouch(`${SITE}?utm_source=a`, '', '');
    const b = parseTouch(`${SITE}?utm_source=b`, '', '');
    const c = parseTouch(`${SITE}?utm_source=c`, '', '');
    expect(nextTouches(null, a)).toEqual({ first: a, last: a });
    const second = nextTouches(nextTouches(null, a), b);
    expect(second).toEqual({ first: a, last: b });
    expect(nextTouches(second, c)).toEqual({ first: a, last: c });
  });
});

describe('cookie', () => {
  const touches = nextTouches(null, parseTouch(`${SITE}?utm_source=meta&utm_campaign=a b`, '', ''));

  it('round-trips through serialize and parse', () => {
    const cookie = serializeCookie(touches, 'tryloopy.io', true);
    const pair = cookie.split('; ')[0];
    expect(parseCookie(`other=1; ${pair}; more=2`)).toEqual(touches);
  });

  it('sets the shared domain on tryloopy.io and subdomains, none on localhost', () => {
    expect(serializeCookie(touches, 'tryloopy.io', true)).toContain('domain=.tryloopy.io');
    expect(serializeCookie(touches, 'app.tryloopy.io', true)).toContain('domain=.tryloopy.io');
    expect(serializeCookie(touches, 'localhost', false)).not.toContain('domain=');
  });

  it('sets Secure only on https, with the agreed lifetime', () => {
    const https = serializeCookie(touches, 'tryloopy.io', true);
    expect(https).toContain('Secure');
    expect(https).toContain('path=/');
    expect(https).toContain('max-age=7776000');
    expect(https).toContain('SameSite=Lax');
    expect(serializeCookie(touches, 'localhost', false)).not.toContain('Secure');
  });

  it.each(['', 'a=1', 'loopy_touch=', 'loopy_touch=%E0%A4%A', 'loopy_touch=notjson', 'loopy_touch=%7B%22first%22%3A1%7D'])(
    'treats %j as no cookie',
    (cookie) => {
      expect(parseCookie(cookie)).toBeNull();
    },
  );
});

describe('captureTouch', () => {
  afterEach(() => {
    document.cookie = 'loopy_touch=; max-age=0; path=/';
    history.replaceState(null, '', '/');
  });

  it('writes nothing without a signal, then keeps first and moves last', () => {
    captureTouch();
    expect(document.cookie).not.toContain('loopy_touch');

    history.replaceState(null, '', '/?utm_source=a');
    captureTouch();
    history.replaceState(null, '', '/pricing?utm_source=b');
    captureTouch();
    history.replaceState(null, '', '/pricing');
    captureTouch();

    const saved = parseCookie(document.cookie);
    expect(saved?.first.utm_source).toBe('a');
    expect(saved?.last.utm_source).toBe('b');
    expect(saved?.last.landing_path).toBe('/pricing');
  });
});
