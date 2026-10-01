import Image from 'next/image';
import { FINAL_PEEK } from '@/lib/creatives';
import { APP_URL, CAL_URL } from '@/lib/site';
import styles from './FinalCta.module.css';

export function FinalCta() {
  return (
    <section className="wrap section">
      <div className={styles.final}>
        <h2 className="sh">Bring one of your clients and leave with a finished brief.</h2>
        <p className="sub">In a 20-minute demo, we build the brief live on your client’s site, and it’s yours to keep.</p>
        <div className="ctas">
          <a className="pill pill-primary" href={CAL_URL}>
            Book a demo
          </a>
          <a className="pill pill-outline" href={APP_URL}>
            Try it free
          </a>
        </div>
        <div className={styles.peek} aria-hidden="true">
          {FINAL_PEEK.map((src) => (
            <Image key={src} src={src} alt="" width={200} height={200} />
          ))}
        </div>
      </div>
    </section>
  );
}
