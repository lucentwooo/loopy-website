import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next.js doesn't infer it from a
  // stray parent-directory lockfile (caused a build-time warning / wrong root).
  turbopack: {
    root: __dirname,
  },
  images: {
    // Next 16 only serves qualities on this allowlist (default [75]).
    // 90 is for dense text screenshots (the mechanism site-scroll mock),
    // where q75 WebP visibly smears small type.
    qualities: [75, 90],
  },
  // PostHog reverse proxy: ad blockers block posthog.com by domain name, so the
  // browser talks to /ingest on our own domain and Vercel forwards it.
  skipTrailingSlashRedirect: true,
  // The ad breakdowns live in the app; Reels may link the bare domain.
  // Temporary (307) so the target can move without browsers caching it.
  // Every other page goes to the app's waitlist page (owner, 22 Nov 2026): signups are waitlist-only, so the
  // old "try it" / "book a demo" buttons here lead nowhere. Query strings (utm tags) carry over. /ingest stays
  // for the PostHog proxy.
  async redirects() {
    return [
      { source: '/resources/:path*', destination: 'https://app.tryloopy.io/resources/:path*', permanent: false },
      { source: '/', destination: 'https://app.tryloopy.io/start', permanent: false },
      { source: '/:path((?!ingest(?:/|$)|resources(?:/|$)|for(?:/|$)).+)', destination: 'https://app.tryloopy.io/start', permanent: false },
    ];
  },
  async rewrites() {
    return [
      { source: '/for/:brand', destination: '/for/:brand/index.html' },
      { source: '/for/:brand/', destination: '/for/:brand/index.html' },
      { source: '/ingest/static/:path*', destination: 'https://us-assets.i.posthog.com/static/:path*' },
      { source: '/ingest/:path*', destination: 'https://us.i.posthog.com/:path*' },
    ];
  },
};

export default nextConfig;
