import styles from './ProofBand.module.css';

const STATS = [
  { stat: '7-9 figures', label: 'revenue range of the client brands' },
  { stat: '$50k-$100k/mo', label: 'Meta spend on some of those accounts' },
  { stat: 'days to minutes', label: 'per-client research and briefing' },
];

export function ProofBand() {
  return (
    <section className={styles.band}>
      <div className="wrap">
        <p className="eyebrow">built by operators</p>
        <p className={styles.kicker}>
          Built on foundational direct-response marketing concepts and the internal playbooks of a performance agency
          running Meta ads for nine-figure DTC brands - where it&rsquo;s in daily use today.
        </p>
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.stat} className={styles.cell}>
              <span className={styles.stat}>{s.stat}</span>
              <span className={styles.label}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
