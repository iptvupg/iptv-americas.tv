import React from 'react';
import {
  IconDevices, IconServer, IconLayers, IconShield, IconRefresh, IconWallet,
} from './Icons';
import styles from './Features.module.css';

const ITEMS = [
  {
    icon: IconDevices,
    title: 'Watch on Every Device',
    desc: 'One subscription works on Smart TVs, Amazon Firestick, Apple TV, Roku, phones, tablets, and computers — no extra boxes to buy.',
  },
  {
    icon: IconServer,
    title: 'Stable, Buffer-Free Streams',
    desc: 'Load-balanced servers and anti-freeze technology keep live channels and movies playing smoothly, even at peak times.',
  },
  {
    icon: IconLayers,
    title: '54,000+ Channels & 120,000+ Titles',
    desc: 'Live news, sports, and international channels plus a large on-demand library of movies and series in HD and 4K.',
  },
  {
    icon: IconShield,
    title: '30-Day Money-Back Guarantee',
    desc: 'Try the service risk-free. If it is not the right fit, request a refund within 30 days.',
  },
  {
    icon: IconRefresh,
    title: 'Free Updates & New Content',
    desc: 'Channel lineups and the movie library are refreshed regularly at no extra cost — nothing to reinstall.',
  },
  {
    icon: IconWallet,
    title: 'Secure, Flexible Payment',
    desc: 'Pay by card, PayPal, or crypto through encrypted checkout. Orders are confirmed with our team over WhatsApp.',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={`vt-container ${styles.inner}`}>
        <header className={styles.head} data-reveal>
          <span className="vt-eyebrow">Features</span>
          <h2 className="vt-section-title">
            Why choose our IPTV service
          </h2>
          <p className="vt-section-sub">
            We focus on stream quality, reliable uptime, and clear pricing — no contracts
            and no hidden fees.
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
