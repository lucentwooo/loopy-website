'use client';

import { Children, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import styles from './starter.module.css';

const GAP = 12;
const MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeMotion(onChange: () => void) {
  const mq = window.matchMedia(MOTION_QUERY);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

export function HeroCarousel({ children }: { children: React.ReactNode }) {
  const carRef = useRef<HTMLDivElement>(null);
  const curRef = useRef(0);
  const [cur, setCur] = useState(0);
  const [touched, setTouched] = useState(false);
  const reduced = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia(MOTION_QUERY).matches,
    () => false,
  );
  const paused = touched || reduced;
  const count = Children.count(children);

  function go(i: number) {
    const car = carRef.current;
    if (!car) return;
    const first = car.children[0] as HTMLElement;
    const slide = car.children[i] as HTMLElement;
    car.scrollTo({ left: slide.offsetLeft - first.offsetLeft, behavior: reduced ? 'auto' : 'smooth' });
  }

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go((curRef.current + 1) % count), 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, count]);

  const stop = () => setTouched(true);

  return (
    <div className={`${styles.carWrap} ${styles.rise}`}>
      <div
        ref={carRef}
        className={`${styles.car} ${styles.tile} ${styles.gFlow}`}
        tabIndex={0}
        aria-label="Competitor ads and the version we make for you"
        onPointerDown={stop}
        onWheel={stop}
        onTouchStart={stop}
        onKeyDown={stop}
        onScroll={(e) => {
          const car = e.currentTarget;
          const i = Math.round(car.scrollLeft / ((car.children[0] as HTMLElement).offsetWidth + GAP));
          curRef.current = i;
          setCur(i);
        }}
      >
        {children}
      </div>
      <div className={`${styles.dots} ${paused ? styles.paused : ''}`} role="group" aria-label="Choose example">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Example ${i + 1}`}
            aria-current={cur === i}
            onClick={() => {
              stop();
              go(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}
