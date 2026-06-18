import React from 'react';
import {
  IconDevices, IconServer, IconLayers, IconShield, IconRefresh, IconWallet,
} from './Icons';
import styles from './Features.module.css';

const ITEMS = [
  {
    icon: IconDevices,
    title: 'Multi-Device Support',
    desc: 'Use IPTV Americas subscriptions seamlessly across all your TVs, phones, tablets, and boxes.',
  },
  {
    icon: IconServer,
    title: 'High Availability Servers',
    desc: 'Take advantage of our powerful servers to enjoy zero-buffering, premium performance.',
  },
  {
    icon: IconLayers,
    title: 'Invaluable Content',
    desc: 'Gain access to premium channels and worldwide VODs, offering the most popular movies, series, and shows.',
  },
  {
    icon: IconShield,
    title: 'Money Back Guarantee',
    desc: "We stand by our subscriptions. If you're not happy, simply request a refund.",
  },
  {
    icon: IconRefresh,
    title: 'Free Updates',
    desc: 'Keep up with our complimentary IPTV updates. Enjoy the latest content and features at no additional cost.',
  },
  {
    icon: IconWallet,
    title: '100% Secure Payment',
    desc: 'Shop with confidence: every transaction is protected through advanced security systems.',
  },
];

export default function Features() {
  return (
    <section id="blog" className={styles.section}>
      <div className={`vt-container ${styles.inner}`}>
        <header className={styles.head} data-reveal>
          <span className="vt-eyebrow">Features</span>
          <h2 className="vt-section-title">
            Everything you need for perfect entertainment
          </h2>
          <p className="vt-section-sub">
            We specialize in offering the best IPTV services with a focus on quality,
            reliability, and unbeatable value.
          </p>
        </header>

        <div className={styles.grid}>
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <article key={title} className={styles.card}>
              <span className={styles.iconWrap}>
                <Icon width={24} height={24} />
              </span>
              <div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
