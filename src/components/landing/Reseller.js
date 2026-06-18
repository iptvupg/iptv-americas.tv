import React from 'react';
import styles from './Reseller.module.css';

export default function Reseller() {
  return (
    <section id="reseller" className={styles.section}>
      <div className={`vt-container ${styles.inner}`}>
        <div className={styles.glow} aria-hidden="true" />
        <span className="vt-eyebrow">Partner program</span>
        <h2 className={styles.title}>
          Join our IPTV reseller program
        </h2>
        <p className={styles.sub}>
          Start your own streaming business with wholesale pricing, a dedicated panel,
          and priority support. Grow your income with IPTV Americas.
        </p>
        <a className={styles.cta} href="#contact">
          Learn more
        </a>
      </div>
    </section>
  );
}
