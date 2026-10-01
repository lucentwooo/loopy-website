import 'react';

// Lets inline styles set CSS custom properties (style={{ '--o': '-90px' }}),
// which the landing sections use for per-element offsets, glows and angles.
declare module 'react' {
  interface CSSProperties {
    [property: `--${string}`]: string | number | undefined;
  }
}
