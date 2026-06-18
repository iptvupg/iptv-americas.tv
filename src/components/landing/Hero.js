import React from 'react';
import { IconArrow, IconStar, IconShield, IconUptime } from './Icons';
import { useCheckout } from './CheckoutContext';
import styles from './Hero.module.css';

const BRANDS = [
  { name: 'Netflix', src: 'https://image.tmdb.org/t/p/w200/wwemzKWzjKYJFfCeiB57q3r4Bcm.png' },
  { name: 'Prime Video', src: 'https://image.tmdb.org/t/p/w200/w7HfLNm9CWwRmAMU58udl2L7We7.png' },
  { name: 'HBO Max', src: 'https://image.tmdb.org/t/p/w200/tuomPhY2UtuPTqqFnKMVHvSb724.png' },
  { name: 'Disney+', src: 'https://image.tmdb.org/t/p/w200/gJ8VX6JSu3ciXHuC2dDGAo2lvwM.png' },
  { name: 'Apple TV+', src: 'https://image.tmdb.org/t/p/w200/4KAy34EHvRM25Ih8wb82AuGU7zJ.png' },
  { name: 'AMC', src: 'https://image.tmdb.org/t/p/w200/pmvRmATOCaDykE6JrVoeYxlFHw3.png' },
  { name: 'Paramount+', src: 'https://image.tmdb.org/t/p/w200/wFVDi1bYoyriigHFKIRSdJ9l8kD.png' },
  { name: 'Hulu', src: 'https://image.tmdb.org/t/p/w200/pqUTCleNUiTLAVlelGxUgWn1ELh.png' },
];

const TRUST = [
  { icon: IconStar, label: '4.9/5 from 2,000+ reviews' },
  { icon: IconUptime, label: 'Instant activation in minutes' },
  { icon: IconShield, label: '30-day money-back guarantee' },
];

export default function Hero() {
  const { open } = useCheckout();
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.spotlight} aria-hidden="true" />

      <div className={`vt-container ${styles.inner}`}>
        <span className="vt-eyebrow">Premium IPTV · 30,000+ channels</span>

        <h1 className={styles.title}>
          Every channel, every match,
          <br />
          <span className={styles.accent}>every movie — in 4K</span>
        </h1>

        <p className={styles.sub}>
          30,000+ live TV channels and 150,000+ movies &amp; series, streaming on every
          device you own — Smart TV, Firestick, phone, tablet and PC. Instant setup,
          no contract.
        </p>

        <p className={styles.offer}>
          Plans from <strong>$7.50/mo</strong> · billed once, no auto-renewal
        </p>

        <div className={styles.ctas}>
          <button type="button" className="vt-btn vt-btn-primary" onClick={() => open()}>
            Get Started <IconArrow width={17} height={17} />
          </button>
          <a className="vt-btn vt-btn-ghost" href="#pricing">
            View Plans
          </a>
        </div>

        <ul className={styles.trust}>
          {TRUST.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon width={15} height={15} /> {label}
            </li>
          ))}
        </ul>

        <div className={styles.brandsWrap}>
          <span className={styles.brandsLabel}>All your favorite platforms, one subscription</span>
          <div className={styles.brands}>
            {BRANDS.map((b) => (
              <span key={b.name} className={styles.brand}>
                <img src={b.src} alt={b.name} loading="lazy" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
