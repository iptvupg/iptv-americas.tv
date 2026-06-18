import React from 'react';
import styles from './WhatIsIptv.module.css';

export default function WhatIsIptv() {
  return (
    <section id="what-is-iptv" className={styles.section} aria-label="What is IPTV">
      <div className={`vt-container ${styles.inner}`}>
        <header className={styles.head} data-reveal>
          <span className="vt-eyebrow">Streaming explained</span>
          <h2 className="vt-section-title">What is IPTV?</h2>
        </header>

        <p className={styles.answer} data-reveal>
          IPTV (Internet Protocol Television) delivers live TV channels and on-demand
          movies and series over your internet connection instead of cable or satellite.
          With IPTV Americas, you stream 30,000+ live channels and 150,000+ titles in HD
          and 4K on any device — Smart TV, Firestick, phone, tablet, or PC — with no cable
          box and no long-term contract.
        </p>
      </div>
    </section>
  );
}
