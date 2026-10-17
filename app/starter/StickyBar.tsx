'use client';

import { useEffect, useState } from 'react';
import { ReadyBy } from './ReadyBy';
import styles from './starter.module.css';

export function StickyBar() {
  const [passedIdea, setPassedIdea] = useState(false);
  const [offerOn, setOfferOn] = useState(false);
  const show = passedIdea && !offerOn;

  useEffect(() => {
    const idea = document.getElementById('idea');
    const offer = document.getElementById('offer');
    if (!idea || !offer) return;
    const ideaObs = new IntersectionObserver((es) => {
      setPassedIdea(es[0].isIntersecting || es[0].boundingClientRect.top < 0);
    });
    const offerObs = new IntersectionObserver((es) => setOfferOn(es[0].isIntersecting), {
      rootMargin: '0px 0px -20% 0px',
    });
    ideaObs.observe(idea);
    offerObs.observe(offer);
    return () => {
      ideaObs.disconnect();
      offerObs.disconnect();
    };
  }, []);

  return (
    <div className={`${styles.sticky} ${show ? '' : styles.hide}`} aria-hidden={!show}>
      <div className={styles.stickyIn}>
        <span>
          10 ready-to-test ads
          <small>Ready <ReadyBy hours={1} /></small>
        </span>
        <a className={`${styles.pill} ${styles.pillPrimary} ${styles.pillSm}`} href="#offer" tabIndex={show ? 0 : -1}>
          Get my ads
        </a>
      </div>
    </div>
  );
}
