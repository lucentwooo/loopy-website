import { prefersFreeBrief, FREE_BRIEF_URL } from './app-link';

const UA = {
  iphone: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
  androidPhone: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Mobile Safari/537.36',
  androidTablet: 'Mozilla/5.0 (Linux; Android 14; SM-X710) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
  ipad: 'Mozilla/5.0 (iPad; CPU OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
  desktop: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
};

describe('prefersFreeBrief', () => {
  it('sends phones to the free brief', () => {
    expect(prefersFreeBrief(UA.iphone)).toBe(true);
    expect(prefersFreeBrief(UA.androidPhone)).toBe(true);
  });

  it('keeps desktops and tablets on the app', () => {
    expect(prefersFreeBrief(UA.desktop)).toBe(false);
    expect(prefersFreeBrief(UA.androidTablet)).toBe(false);
    expect(prefersFreeBrief(UA.ipad)).toBe(false);
    expect(prefersFreeBrief('')).toBe(false);
  });

  it.each([
    ['Instagram', `${UA.desktop} Instagram 330.0.0`],
    ['Facebook FBAN', `${UA.desktop} [FBAN/FBIOS;FBAV/450.0]`],
    ['Facebook FB_IAB', `${UA.androidTablet} [FB_IAB/FB4A;FBAV/450.0]`],
    ['TikTok', `${UA.desktop} musical_ly_34.0.0`],
    ['TikTok webview', `${UA.desktop} BytedanceWebview/d8a21c6`],
    ['LinkedIn', `${UA.desktop} LinkedInApp/9.1`],
    ['Snapchat', `${UA.desktop} Snapchat/12.0`],
  ])('treats %s in-app browser as free-brief', (_name, ua) => {
    expect(prefersFreeBrief(ua)).toBe(true);
  });

  it('points at the app free-brief page', () => {
    expect(FREE_BRIEF_URL).toBe('https://app.tryloopy.io/free-brief');
  });
});
