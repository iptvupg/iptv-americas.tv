import React from 'react';
import { IconWrench, Icon4k, IconDevices, IconUptime, IconHeadset } from './Icons';
import styles from './Benefits.module.css';

const ITEMS = [
  { icon: IconWrench, label: 'Free Installation', desc: 'We set you up and send a step-by-step guide.' },
  { icon: Icon4k, label: '4K Ultra HD', desc: 'Crystal-clear streams with zero buffering.' },
  { icon: IconDevices, label: 'Multi-Device', desc: 'Watch on TV, phone, tablet, and box.' },
  { icon: IconUptime, label: '99.9% Uptime', desc: 'Reliable servers you can count on.' },
  { icon: IconHeadset, label: '24/7 Support', desc: 'Real humans, responding in minutes.' },
];

export default function Benefits() {
  return (
    <section id="about" className={styles.section}>
      <div className={`vt-container ${styles.inner}`}>
        <header className={styles.head} data-reveal>
          <span className="vt-eyebrow">Our Benefits</span>
          <h2 className="vt-section-title">
            Why You Should Choose
            <br /> IPTV Americas
          </h2>
          <p className="vt-section-sub">
            IPTV Americas combines innovative and seamless viewing to bring you the ultimate
            entertainment experience. Whether it's live TV, movies, or sports, we enable
            every moment to count.
          </p>
        </header>

        <div className={styles.grid}>
          {ITEMS.map(({ icon: Icon, label, desc }) => (
            <article key={label} className={styles.card}>
              <span className={styles.iconWrap}>
                <Icon width={26} height={26} />
              </span>
              <span className={styles.label}>{label}</span>
              <span className={styles.desc}>{desc}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
