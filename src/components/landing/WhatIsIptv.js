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
          movies and series over a standard internet connection instead of a cable line
          or satellite dish. Rather than broadcasting one fixed signal to everyone, IPTV
          streams each program to your device on request, so you can watch live channels,
          catch up on recent shows, and start movies from a library whenever you want.
          Because it runs over the internet, it works on the devices you already own and
          needs no separate cable box, dish, or aerial.
        </p>
        <p className={styles.answer} data-reveal>
          With IPTV Americas, you stream 54,000+ live channels and 120,000+ on-demand
          titles in HD and 4K across Smart TVs, Amazon Firestick, Apple TV, phones,
          tablets, and computers. There is no long-term contract and no equipment to rent —
          plans are billed once, activation is fast, and every subscription is backed by a
          30-day money-back guarantee.
        </p>
        <p className={styles.more} data-reveal>
          New to streaming? Read our full <a href="/what-is-iptv/">guide to what IPTV is</a>, or
          jump straight to setup for <a href="/iptv-for-firestick/">IPTV on Firestick</a> and{' '}
          <a href="/iptv-smarters-pro/">IPTV Smarters Pro</a>.
        </p>
      </div>
    </section>
  );
}
