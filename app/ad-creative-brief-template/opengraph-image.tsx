import { ImageResponse } from 'next/og';

export const alt = 'Meta ads creative brief template: free, research-first, from Loopy';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Page-specific OG card in DS v2: white canvas, gray tile, ink text, one blue mark.
// Inter is not loaded here, so this keeps the same system-font loading as before.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ffffff',
          padding: '56px 56px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            background: '#f1f3f7',
            borderRadius: 40,
            padding: '56px 64px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', fontSize: 34, fontWeight: 700, color: '#1c42e6', letterSpacing: '-0.03em' }}>
              loopy
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                fontWeight: 600,
                color: '#3c414c',
                background: '#ffffff',
                borderRadius: 999,
                padding: '8px 20px',
              }}
            >
              Free template
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 72,
              fontWeight: 600,
              color: '#0e1116',
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
            }}
          >
            <div>Meta Ads Creative Brief Template: Free, Research-First</div>
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#3c414c' }}>
            tryloopy.io/ad-creative-brief-template
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
