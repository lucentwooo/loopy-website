import Image from 'next/image';
import Link from 'next/link';
import { APP_URL, CAL_URL } from '@/lib/site';
import styles from './Footer.module.css';

/* Privacy and Terms live in the app (app.tryloopy.io/privacy, /terms). */
export function Footer({ page = 'landing' }: { page?: 'landing' | 'pricing' | 'content' }) {
  const home = page === 'landing' ? '' : '/';

  return (
    <footer className={`wrap ${styles.footer}`}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Image src="/loopy-logo.png" alt="Loopy" width={70} height={28} />
          <p>Loopy researches your clients’ customers, ranks the ad ideas and writes the brief.</p>
        </div>
        <div className={styles.cols}>
          <div>
            <h4>Product</h4>
            <a href={APP_URL}>Try it free</a>
            <Link href={`${home}#how`}>How it works</Link>
            <Link href={page === 'content' ? '/pricing' : '#pricing'}>Pricing</Link>
            <Link href="/ad-creative-brief-template">Ad brief template</Link>
            <Link href="#faq">FAQ</Link>
          </div>
          <div>
            <h4>Company</h4>
            <a href={CAL_URL}>Talk to the founders</a>
            <a href={`${APP_URL}/privacy`}>Privacy</a>
            <a href={`${APP_URL}/terms`}>Terms</a>
          </div>
        </div>
      </div>
      <div className={styles.base}>
        <span>© 2026 Loopy</span>
        <span>tryloopy.io</span>
      </div>
    </footer>
  );
}
