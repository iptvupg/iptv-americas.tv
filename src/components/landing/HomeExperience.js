import React from 'react';
import { IconCheck } from './Icons';
import styles from './HomeExperience.module.css';

const POINTS = [
  'Works on Smart TV, Firestick, Android TV, Apple TV, mobile, tablet, and PC',
  'Easy setup with IPTV Smarters Pro, TiviMate, M3U playlist, or Xtream Codes',
  'Free 24-hour trial before choosing a plan',
  'Instant activation and 24/7 WhatsApp support',
];

const BADGES = ['Smart TV', '4K', 'Free Trial'];

export default function HomeExperience() {
  return (
    <section className={styles.section}>
      <div className={`vt-container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="vt-eyebrow">Home IPTV Experience</span>

          <h2 className={styles.title}>
            Watch live TV, sports, movies, and shows from your sofa.
          </h2>

          <p className={styles.body}>
            Enjoy IPTV Americas on Smart TV, Firestick, Android TV, Apple TV, phone,
            tablet, or PC. Start with a free 24-hour trial, test the streaming quality,
            then choose the IPTV plan that fits you best.
          </p>

          <ul className={styles.points}>
            {POINTS.map((p) => (
              <li key={p}>
                <span className={styles.tick} aria-hidden="true">
                  <IconCheck width={13} height={13} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.media}>
          <div className={styles.card}>
            <img
              className={styles.img}
              src="/img/couple-watching-iptv-smart-tv.webp"
              alt="Couple watching IPTV on Smart TV at home"
              width={1280}
              height={853}
              loading="lazy"
              decoding="async"
            />
            <div className={styles.badges} aria-hidden="true">
              {BADGES.map((b) => (
                <span key={b} className={styles.badge}>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
