'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';

let initialized = false;

// The project key below is public (same as the GA id in layout.tsx), so it is
// hardcoded rather than routed through a Vercel env var. The cookie is set on
// .tryloopy.io (posthog's default cross_subdomain_cookie) so app.tryloopy.io
// can stitch the anonymous visitor to the signed-in user at login. Session
// replay is deliberately off on the marketing site. Requests go through the
// /ingest reverse proxy (see next.config.ts) so ad blockers that block
// posthog.com by domain name don't stop them.
export function PostHog() {
  useEffect(() => {
    if (initialized) return;
    initialized = true;
    posthog.init('phc_kBY8dHSpVgFQg8qZFvUhHyT6xVtXXtXBhxMep9JuWxou', {
      api_host: '/ingest',
      ui_host: 'https://us.posthog.com',
      capture_pageview: 'history_change',
      autocapture: true,
      persistence: 'localStorage+cookie',
      disable_session_recording: true,
      capture_performance: false,
      respect_dnt: true,
    });
  }, []);

  return null;
}
