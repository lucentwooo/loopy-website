'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

const RESEARCH = `Segment 1: [describe them in a situation, in their words]
Segment 2: [describe them in a situation, in their words]
Segment 3: [a segment from reviews and threads that the brand's ads don't target yet]

Problem: "[exact customer quote]" (source: [link])
Problem: "[exact customer quote]" (source: [link])

Already tried: [what they tried] / why it let them down: [in their words]

Wants: [the result they would pay for, in their words]
Stops them buying: [price / smell / trust / "I have tried everything"]

Awareness stage, segment 1: [unaware / problem aware / solution aware / product aware / most aware]
Awareness stage, segment 2: [unaware / problem aware / solution aware / product aware / most aware]`;

const BRAND = `Client / brand: [name and one line on what they sell]
Objective: [the result you will judge the creative by]
Success metric: [one number, e.g. cost per first order under $40]
Offer: [pasted exactly as the brand states it]
Guarantee: [pasted exactly]
Proof: [review count, certifications, pasted exactly]
Website: [client URL]
Logo: [file link]
Fonts: [by role, e.g. headings: ..., body: ...]
Colors: [by role: text, accent, background, button]
Product shots: [links]
Formats and placements: [feed 1080×1350 or 1080×1080 / stories and reels 1080×1920 / static or video]
Due date: [date]
Mandatories: [required disclaimers]
Never say or show: [words, claims, images to avoid]`;

const CONCEPT = `Concept [N]
Segment: [one segment]
Problem it agitates: "[exact customer quote]"
Awareness stage: [stage]
Angle: [pain / desire / proof / offer / objection]

Evidence: "[customer quote]" (source: [link])
Evidence: "[customer quote]" (source: [link])

Hook 1: [the problem, said the way the customer said it]
Hook 2: [hook]
Hook 3: [hook]
Body copy: [one idea]
Call to action: [button text]

Reference ad: [screenshot of a layout that already works]
Keep: [what stays from the reference]
Change: [what changes for this client]`;

const TABS = [
  { key: 'research', label: 'Customer research', text: RESEARCH },
  { key: 'brand', label: 'Brand and campaign', text: BRAND },
  { key: 'concept', label: 'Concept block', text: CONCEPT },
] as const;

type Key = (typeof TABS)[number]['key'];

const PART_TITLES = ['Part 1: Customer research', 'Part 2: Brand and campaign', 'Part 3: One block per concept (repeat for each concept)'];

function markdown(): string {
  const body = TABS.map((t, i) => `## ${PART_TITLES[i]}\n\n\`\`\`\n${t.text}\n\`\`\``).join('\n\n');
  return `# Meta ads creative brief template\n\nFrom tryloopy.io/ad-creative-brief-template. Start with what customers say, then build the brief.\n\n${body}\n`;
}

export function TemplateTabs() {
  const [tab, setTab] = useState<Key>('research');
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const active = TABS.find((t) => t.key === tab)!;

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(active.text);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable: the text is still selectable */
    }
  }

  function download() {
    const url = URL.createObjectURL(new Blob([markdown()], { type: 'text/markdown' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meta-ads-creative-brief-template.md';
    a.click();
    URL.revokeObjectURL(url);
  }

  function onKeyDown(e: React.KeyboardEvent, i: number) {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = TABS[(i + step + TABS.length) % TABS.length];
    setTab(next.key);
    tabRefs.current[next.key]?.focus();
  }

  return (
    <div className={styles.tpl}>
      <div role="tablist" aria-label="Template parts" className={styles.tabs}>
        {TABS.map((t, i) => (
          <button
            key={t.key}
            ref={(el) => {
              tabRefs.current[t.key] = el;
            }}
            role="tab"
            id={`brief-tab-${t.key}`}
            aria-controls={`brief-panel-${t.key}`}
            type="button"
            aria-selected={tab === t.key}
            tabIndex={tab === t.key ? 0 : -1}
            onClick={() => setTab(t.key)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`${styles.tab}${tab === t.key ? ` ${styles.tabOn}` : ''}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.tplCard}>
        {/* All three panels stay in the HTML so search engines and AI crawlers read the whole template. */}
        {TABS.map((t) => (
          <div
            key={t.key}
            role="tabpanel"
            id={`brief-panel-${t.key}`}
            aria-labelledby={`brief-tab-${t.key}`}
            tabIndex={0}
            hidden={tab !== t.key}
          >
            <pre className={styles.tplText}>{t.text}</pre>
          </div>
        ))}
        <div className={styles.tplActions}>
          <button type="button" onClick={copy} className="pill pill-outline pill-sm" aria-live="polite">
            {copied ? 'Copied' : 'Copy this part'}
          </button>
          <button type="button" onClick={download} className="pill pill-outline pill-sm">
            Download all as .md
          </button>
        </div>
      </div>
    </div>
  );
}
