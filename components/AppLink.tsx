'use client';

import { useSyncExternalStore, type ReactNode } from 'react';
import { FREE_BRIEF_LABEL, FREE_BRIEF_URL, prefersFreeBrief } from '@/lib/app-link';
import { APP_URL } from '@/lib/site';

const subscribe = () => () => {};
const onClient = () => prefersFreeBrief(navigator.userAgent);
/* Static HTML and first hydration render the desktop link; phones swap right after mount. */
const onServer = () => false;

/** A "start using Loopy" link. Phones and in-app browsers get the free brief; desktop keeps the app. */
export function AppLink({ className, children }: { className?: string; children: ReactNode }) {
  const freeBrief = useSyncExternalStore(subscribe, onClient, onServer);
  return (
    <a className={className} href={freeBrief ? FREE_BRIEF_URL : APP_URL}>
      {freeBrief ? FREE_BRIEF_LABEL : children}
    </a>
  );
}
