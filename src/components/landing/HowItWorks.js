import React from 'react';
import styles from './HowItWorks.module.css';

const STEPS = [
  {
    step: 'Step 1',
    title: 'Choose Your IPTV Package',
    desc: 'Choose your preferred subscription period: 1, 3, 6, or 12 months.',
  },
  {
    step: 'Step 2',
    title: 'Complete Your Payment',
    desc: 'Complete your secure, SSL-encrypted checkout with card, PayPal, and more.',
  },
  {
    step: 'Step 3',
    title: 'Upon Successful Payment',
    desc: 'Receive your instant activation and login credentials by email right away.',
  },
  {
    step: 'Step 4',
    title: 'Enjoy Unlimited Access',
    desc: 'Stream unlimited channels, films, and live sports on any device, anytime.',
  },
];

export default function HowItWorks() {
  return (
    <section id="install" className={styles.section}>
      <div className={`vt-container ${styles.inner}`}>
        <header className={styles.head} data-reveal>
          <span className="vt-eyebrow">How it works</span>
          <h2 className="vt-section-title">Up and running in four steps</h2>
          <p className="vt-section-sub">From checkout to streaming in just a few minutes.</p>
        </header>

        <ol className={styles.track}>
          {STEPS.map((s, i) => (
            <li key={s.step} className={styles.item} style={{ '--i': i }}>
              <span className={styles.node} aria-hidden="true">
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              </span>
              <div className={styles.card}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
