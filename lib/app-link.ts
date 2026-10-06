import { APP_URL } from '@/lib/site';

export const FREE_BRIEF_URL = `${APP_URL}/free-brief`;
export const FREE_BRIEF_LABEL = 'Get a free ad brief';

/** Same in-app browser rules as the app: its signup fails inside these webviews. */
const IN_APP = [/Instagram/i, /FBAN|FBAV|FB_IAB/, /BytedanceWebview|musical_ly|TikTok/i, /LinkedInApp/i, /Snapchat/i];

/** Phones only; iPads and Android tablets (no "Mobile" token) stay desktop. */
const PHONE = /iPhone|iPod|Android.*Mobile/i;

/** True for visitors who should get the phone-friendly free brief instead of the desktop app. */
export function prefersFreeBrief(userAgent: string): boolean {
  return PHONE.test(userAgent) || IN_APP.some((re) => re.test(userAgent));
}
