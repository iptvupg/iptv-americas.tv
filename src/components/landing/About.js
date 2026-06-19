import React from 'react';
import { IconLayers, IconDevices, IconHeadset, IconShield } from './Icons';
import styles from './About.module.css';

const WHATSAPP_DISPLAY = '+44 7848 197761';
const WHATSAPP_HREF = 'https://wa.me/447848197761';

const ITEMS = [
  {
    icon: IconLayers,
    title: 'Who we are',
    body: 'IPTV Americas is a subscription IPTV service streaming 54,000+ live TV channels and 120,000+ movies & series in HD and 4K.',
  },
  {
    icon: IconDevices,
    title: 'Who we serve',
    body: 'Viewers across the United States, Canada, and Latin America — on Smart TV, Firestick, mobile, tablet, and PC.',
  },
  {
    icon: IconShield,
    title: 'Our guarantee',
    body: 'Every plan is backed by a 30-day money-back guarantee, billed once with no auto-renewal.',
  },
];

export default function About() {
  return (
    <section id="about" className={styles.section} aria-label="About IPTV Americas">
      <div className={`vt-container ${styles.inner}`}>
        <header className={styles.head} data-reveal>
          <span className="vt-eyebrow">About</span>
          <h2 className="vt-section-title">About IPTV Americas</h2>
        </header>

        <div className={styles.grid}>
          {ITEMS.map(({ icon: Icon, title, body }) => (
            <article key={title} className={styles.card} data-reveal>
              <span className={styles.iconWrap}>
                <Icon width={22} height={22} />
              </span>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.body}>{body}</p>
            </article>
          ))}

          <article className={styles.card} data-reveal>
            <span className={styles.iconWrap}>
              <IconHeadset width={22} height={22} />
            </span>
            <h3 className={styles.title}>Support</h3>
            <p className={styles.body}>
              English &amp; Spanish support over WhatsApp at{' '}
              <a className={styles.link} href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                {WHATSAPP_DISPLAY}
              </a>
              .
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
