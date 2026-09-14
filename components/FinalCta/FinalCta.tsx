import Image from 'next/image';
import { CTA_MARQUEE } from '@/lib/creatives';
import { APP_URL, CAL_URL } from '@/lib/site';
import styles from './FinalCta.module.css';

export function FinalCta() {
  return (
    <section className={styles.cta}>
      {/* Decorative background marquee — the set is rendered twice so the
          -50% translate loops seamlessly. */}
      <div className={styles.marquee} aria-hidden="true">
        {[0, 1].map((pass) =>
          CTA_MARQUEE.map((ad) => (
            <Image
              key={`${pass}-${ad.src}`}
              src={ad.src}
              alt=""
              width={ad.width}
              height={ad.height}
              loading="lazy"
              className={styles.marqueeAd}
            />
          )),
        )}
      </div>
      <div className={styles.content}>
        <h2 className={styles.h2}>Watch a client&rsquo;s brief build itself.</h2>
        <p className={styles.sub}>
          Drop in one of your client&rsquo;s websites, watch the research and concepts land, and tell us where your
          week actually goes - that earns your first client brief, free.
        </p>
        <div className={styles.buttons}>
          <a href={CAL_URL} className={styles.button}>
            book 20 minutes with the founders <span aria-hidden="true">↗</span>
          </a>
          <a href={APP_URL} className={styles.appButton}>
            or try the platform yourself <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className={styles.fineprint}>first client brief free on a real client - no card</p>
      </div>
    </section>
  );
}
