import Image from 'next/image';
import Link from 'next/link';
import { APP_URL } from '@/lib/site';
import styles from './Nav.module.css';

type Page = 'landing' | 'pricing' | 'content';

/** Section links resolve on the landing page; elsewhere they point back to it.
 *  Pricing and FAQ stay on the page when it has those sections. */
function navLinks(page: Page) {
  const home = page === 'landing' ? '' : '/';
  return [
    { label: 'How it works', href: `${home}#how` },
    { label: 'Inside a brief', href: `${home}#brief` },
    { label: 'Pricing', href: page === 'content' ? '/pricing' : '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];
}

export function Nav({ page = 'landing' }: { page?: Page }) {
  const links = navLinks(page);

  return (
    <header className={`wrap ${styles.nav}`}>
      <Link className={styles.logo} href="/" aria-label="Loopy home">
        <Image src="/loopy-logo.png" alt="Loopy" width={70} height={28} loading="eager" />
      </Link>
      <nav className={styles.links} aria-label="Main">
        {links.map((l) => (
          <Link key={l.label} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>
      <div className={styles.right}>
        <a className={styles.signin} href={APP_URL}>
          Sign in
        </a>
        <a className="pill pill-outline pill-sm" href={APP_URL}>
          Try it free
        </a>
        {/* Phone menu: native details/summary, no client JS. */}
        <details className={styles.menu}>
          <summary className={styles.menuBtn} aria-label="Open menu">
            <i />
            <i />
          </summary>
          <div className={styles.panel}>
            {links.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
            <a href={APP_URL}>Try it free</a>
          </div>
        </details>
      </div>
    </header>
  );
}
