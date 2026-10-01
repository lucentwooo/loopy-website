import styles from './Problem.module.css';

/** The unlabelled problem section right under the hero. */
export function Problem() {
  return (
    <section className={`wrap ${styles.problem}`}>
      <h2 className="sh">You’re still the one gluing it together.</h2>
      <p className="sub">
        You have Ad Library open in one tab and ChatGPT in another. Your notes sit in Sheets and the brief lives in
        Notion. It takes hours for every client before a designer can even start.
      </p>
      <figure className={styles.quote}>
        <blockquote>“the biggest bottleneck isn’t the media buying; it’s the creative research and validation”</blockquote>
        <figcaption>r/FacebookAds</figcaption>
      </figure>
    </section>
  );
}
