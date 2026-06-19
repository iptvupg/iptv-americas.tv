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
    title: 'Confirm Your Order on WhatsApp',
    desc: 'Send us your order on WhatsApp and pay by card, PayPal, or crypto — no payment is taken on this site.',
  },
  {
    step: 'Step 3',
    title: 'Get Instant Activation',
    desc: 'Receive your login credentials by email within minutes of your order being confirmed.',
  },
  {
    step: 'Step 4',
    title: 'Start Streaming Instantly',
    desc: 'Stream live channels, movies, and sports coverage on any device, anytime.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={`vt-container ${styles.inner}`}>
        <header className={styles.head} data-reveal>
          <span className="vt-eyebrow">How it works</span>
          <h2 className="vt-section-title">How to Set Up IPTV in 4 Steps</h2>
          <p className="vt-section-sub">From order to streaming in just a few minutes.</p>
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
