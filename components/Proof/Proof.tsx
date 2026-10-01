import styles from './Proof.module.css';

const STATS = [
  ['7-9 figures', 'revenue range of their client brands'],
  ['$50k-$100k/mo', 'Meta spend on some of those accounts'],
  ['Minutes', 'to research a client and write the brief'],
];

export function Proof() {
  return (
    <section className={`wrap section ${styles.proof}`}>
      <p className={styles.eyebrow}>Built with operators</p>
      <p className={styles.statement}>
        We built Loopy with a Meta ad agency. It follows the playbook they use for their DTC clients.
      </p>
      <dl className={styles.stats}>
        {STATS.map(([value, label]) => (
          <div key={value} className={styles.stat}>
            <dt>{value}</dt>
            <dd>{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
