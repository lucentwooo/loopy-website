'use client';

import { useState } from 'react';
import styles from './starter.module.css';

const OTHERS = {
  ai: { label: 'AI tools', name: 'An AI ad tool', start: 'A blank prompt', words: 'Guesses', time: 'When you finish them', you: 'Hours of prompting' },
  freelancer: { label: 'Freelancer', name: 'A freelancer', start: 'References you send', words: 'Your brief', time: 'About a week', you: 'Briefs and feedback' },
  agency: { label: 'Agency', name: 'An agency', start: 'Their own process', words: 'Sometimes research', time: '2 to 4 weeks', you: 'Calls and feedback rounds' },
};

type Key = keyof typeof OTHERS;

const ROWS: { label: string; us: string; field: 'start' | 'words' | 'time' | 'you' }[] = [
  { label: 'Starts from', us: 'Ads that already sell', field: 'start' },
  { label: 'The words come from', us: 'Your real customers', field: 'words' },
  { label: 'First ads in', us: '1 hour', field: 'time' },
  { label: 'Your time', us: 'Two minutes', field: 'you' },
];

export function Compare() {
  const [key, setKey] = useState<Key>('ai');
  const d = OTHERS[key];
  return (
    <div className={`${styles.cmpBox} ${styles.rise}`}>
      <div className={styles.seg} role="group" aria-label="Compare with">
        {(Object.keys(OTHERS) as Key[]).map((k) => (
          <button key={k} type="button" aria-pressed={key === k} onClick={() => setKey(k)}>
            {OTHERS[k].label}
          </button>
        ))}
      </div>
      <div>
        <div className={styles.cmpHead}>
          <span>Loopy</span>
          <span>{d.name}</span>
        </div>
        {ROWS.map((r) => (
          <div key={r.field} className={styles.cmpRow}>
            <span className={styles.cmpLabel}>{r.label}</span>
            <span className={styles.cmpUs}>
              <svg width="14" height="14"><use href="#i-check" /></svg>
              {r.us}
            </span>
            <span className={styles.cmpThem}>{d[r.field]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
