'use client';

import { useSyncExternalStore } from 'react';

function readyText(hours: number) {
  const now = new Date();
  // The clock starts at the intake form, so allow ~10 minutes for checkout and the form, rounded up to 5.
  const t = new Date(Math.ceil((now.getTime() + hours * 3600e3 + 600e3) / 300e3) * 300e3);
  const time = t
    .toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    .replace(/\s?([AP])\.?M\.?/i, (_, p: string) => ' ' + p.toLowerCase() + 'm');
  const dayDiff = Math.round(
    (new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() -
      new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()) /
      864e5,
  );
  return 'by ' + time + (dayDiff === 0 ? ' today' : dayDiff === 1 ? ' tomorrow' : '');
}

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 60000);
  return () => clearInterval(id);
}

export function ReadyBy({ hours }: { hours: number }) {
  const text = useSyncExternalStore(
    subscribe,
    () => readyText(hours),
    () => null,
  );
  return <>{text ?? 'within the hour'}</>;
}
