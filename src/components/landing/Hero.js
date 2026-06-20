import React from 'react';
import { IconArrow, IconSpark, IconShield, IconUptime } from './Icons';
import { useCheckout } from './CheckoutContext';
import styles from './Hero.module.css';

const TRUST = [
  { icon: IconSpark, label: 'Free 24-hour trial' },
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
        <span className="vt-eyebrow">Premium IPTV · 54,000+ channels</span>

        <h1 className={styles.title}>
          Best IPTV Service for
          <br />
          <span className={styles.accent}>USA, Canada &amp; Latin America</span>
        </h1>

        <p className={styles.sub}>
          54,000+ live TV channels and 120,000+ movies &amp; series, streaming on every
          device you own — Smart TV, Firestick, phone, tablet and PC. Instant setup,
          no contract, and a free trial so you can{' '}
          <a href="/iptv-free-trial/">test IPTV before you pay</a>.
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
      </div>
    </section>
  );
}
