import React from 'react';
import { IconArrow, IconShield, IconSpark, IconCheck } from './Icons';
import { useCheckout } from './CheckoutContext';
import styles from './FinalCta.module.css';

const POINTS = [
  { icon: IconSpark, label: 'Instant activation' },
  { icon: IconShield, label: 'Secure payment' },
  { icon: IconCheck, label: '24/7 support included' },
];

export default function FinalCta() {
  const { open } = useCheckout();
  return (
    <section className={styles.section} aria-label="Get started">
      <div className={`vt-container ${styles.inner}`} data-reveal>
        <h2 className={styles.title}>Start streaming in the next five minutes</h2>
        <p className={styles.sub}>
          54,000+ live channels and 120,000+ movies &amp; series in up to 4K — on every
          device you own. Pick a plan and your login arrives by email instantly.
        </p>

        <div className={styles.ctas}>
          <button
            type="button"
            className="vt-btn vt-btn-primary vt-btn-lg"
            onClick={() => open()}
          >
            Get Started <IconArrow width={17} height={17} />
          </button>
          <a className="vt-btn vt-btn-ghost vt-btn-lg" href="#pricing">
            View Plans
          </a>
        </div>

        <ul className={styles.points}>
          {POINTS.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon width={15} height={15} /> {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
