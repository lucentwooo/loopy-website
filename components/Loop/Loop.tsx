import styles from './Loop.module.css';

const NODES = [
  { x: '110px', color: 'var(--pop-mint)', label: 'What ran well', note: 'Meta + Google Analytics, read-only' },
  { x: '330px', color: 'var(--pop-violet)', label: 'Each lesson' },
  { x: '550px', color: 'var(--pop-coral)', label: 'The next brief' },
];

export function Loop() {
  return (
    <section className={`wrap section ${styles.loop}`}>
      <span className={styles.beta}>Beta</span>
      <h2 className="sh">Then it learns what worked.</h2>
      <p className="sub">
        Connect your client’s Meta and Google Analytics accounts, which Loopy can only read. It looks at which ads did
        well and uses those lessons in the next brief. This part is still new, but it’s live now.
      </p>
      <div className={styles.fig}>
        <svg className={styles.lines} viewBox="0 0 660 130" fill="none" aria-hidden="true">
          <path d="M110 5.5 H550" stroke="#b9bfca" />
          <path d="M216 1 L221 5.5 L216 10" stroke="#8b93a1" />
          <path d="M436 1 L441 5.5 L436 10" stroke="#8b93a1" />
          <path d="M550 50 V80 C550 128, 110 128, 110 80" stroke="#b9bfca" strokeDasharray="3 4" />
          <path d="M334 111.5 L329 116 L334 120.5" stroke="#8b93a1" />
        </svg>
        {NODES.map((n) => (
          <div key={n.label} className={styles.node} style={{ '--x': n.x }}>
            <b style={{ background: n.color }} />
            <strong>{n.label}</strong>
            {n.note && <small>{n.note}</small>}
          </div>
        ))}
      </div>
    </section>
  );
}
