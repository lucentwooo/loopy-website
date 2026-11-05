import styles from './Compare.module.css';

type Cell = 'yes' | 'no' | string;

const COLUMNS = ['Ad library', 'AI ad generator', 'Agency or freelancer', 'Loopy'] as const;

const ROWS: { label: string; cells: [Cell, Cell, Cell, Cell] }[] = [
  { label: 'Shows the ads your rivals keep paying to run', cells: ['yes', 'no', 'Sometimes', 'yes'] },
  { label: "Tells you why an idea should work, in your customers' words", cells: ['no', 'no', 'Sometimes', 'yes'] },
  { label: 'A brief your designer can use', cells: ['Some', 'no', 'yes', 'yes'] },
  { label: 'Hands you a finished ad', cells: ['no', 'yes', 'yes', 'yes'] },
  { label: 'Typical cost a month', cells: ['$60–460', '$40–250', '$3,000+', 'From $149'] },
];

function Mark({ cell }: { cell: Cell }) {
  if (cell === 'yes') {
    return (
      <>
        <svg className={styles.tick} viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3.2 8.4l3 3 6.6-7" />
        </svg>
        <span className={styles.sr}>Yes</span>
      </>
    );
  }
  if (cell === 'no') {
    return (
      <>
        <span className={styles.dash} aria-hidden="true">–</span>
        <span className={styles.sr}>No</span>
      </>
    );
  }
  return <>{cell}</>;
}

/** "Why Loopy, not another tool" on /pricing. Its own server component: Pricing.tsx is a
 *  client component (the billing toggle), and this table is static. */
export function Compare() {
  return (
    <section className={`wrap section ${styles.compare}`} id="compare">
      <div className="sec-head">
        <h2 className="sh">Why Loopy, not another tool</h2>
        <p className="sub">
          Ad libraries show you what rivals run. AI generators make images. Loopy tells you which ad to make next,
          backed by what your customers say, and then makes it.
        </p>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td />
            {COLUMNS.map((c, i) => (
              <th key={c} scope="col" className={i === 3 ? styles.us : undefined}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {row.cells.map((cell, i) => (
                <td
                  key={COLUMNS[i]}
                  data-label={COLUMNS[i]}
                  className={`${i === 3 ? styles.us : ''}${cell === 'yes' || cell === 'no' ? '' : ` ${styles.text}`}`}
                >
                  <Mark cell={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.note}>Tool prices from their own pricing pages, November 2026. Agency fees vary.</p>
    </section>
  );
}
