import React from 'react';
import clsx from 'clsx';
import { IconCheck, IconShield, IconSpark, IconWallet, IconHeadset } from './Icons';
import { useCheckout } from './CheckoutContext';
import styles from './Pricing.module.css';

const PLANS = [
  { duration: '1 Month', total: 16, months: 1, popular: false },
  { duration: '3 Months', total: 39, months: 3, popular: false },
  { duration: '6 Months', total: 60, months: 6, popular: false },
  { duration: '12 Months', total: 90, was: 192, months: 12, popular: true },
];

const MONTHLY_BASE = 16; // 1-month reference rate

const FEATURES = [
  '4K, HD, & SD Quality',
  '30,000+ Live TV Channels',
  'All Sports Channels',
  '150,000+ Movies & Series',
  'Anti-Freezing Technology',
  'Catch-Up (Up to 4 Days)',
  'TV Guide (EPG)',
  'Pay-Per-View (PPV)',
  'Built-in VPN Protection',
  'Adult Channels (Optional)',
  '24/7 Technical Support',
];

const PAY_METHODS = [
  { name: 'Visa', src: '/img/pay/visa.svg' },
  { name: 'Mastercard', src: '/img/pay/mastercard.svg' },
  { name: 'PayPal', src: '/img/pay/paypal.svg' },
  { name: 'Crypto', src: '/img/pay/crypto.svg' },
];

function perMonth(total, months) {
  return (total / months).toFixed(2);
}

function savingsPct(total, months) {
  // vs paying the 1-month rate every month.
  return Math.round((1 - total / months / MONTHLY_BASE) * 100);
}

export default function Pricing() {
  const { open } = useCheckout();
  return (
    <section id="pricing" className={styles.section}>
      <div className={`vt-container ${styles.inner}`}>
        <header className={styles.head} data-reveal>
          <span className="vt-eyebrow">Pricing</span>
          <h2 className="vt-section-title">IPTV Subscription Plans &amp; Pricing</h2>
          <p className="vt-section-sub">
            Every plan unlocks the full library — pick the term that suits you.
            Billed once, no auto-renewal, cancel anytime.
          </p>
        </header>

        <div className={styles.grid}>
          {PLANS.map((p) => (
            <article
              key={p.duration}
              className={clsx(styles.card, p.popular && styles.cardPopular)}
            >
              {p.popular && <span className={styles.ribbon}>Best Value</span>}
              <div className={styles.cardHead}>
                <h3 className={styles.duration}>{p.duration}</h3>
                {p.months > 1 && (
                  <span className={styles.save}>Save {savingsPct(p.total, p.months)}%</span>
                )}
              </div>

              <div className={styles.priceRow}>
                {p.was && <span className={styles.was}>${p.was}</span>}
                <span className={styles.currency}>$</span>
                <span className={styles.price}>{p.total}</span>
              </div>
              <p className={styles.permonth}>${perMonth(p.total, p.months)} / month</p>
              <p className={styles.billed}>Billed once · No renewal</p>

              <ul className={styles.featureList}>
                {FEATURES.map((f) => (
                  <li key={f}>
                    <IconCheck width={15} height={15} /> {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={styles.cta}
                onClick={() => open({ duration: p.duration, total: p.total })}
              >
                Get Started
              </button>
            </article>
          ))}
        </div>

        <ul className={styles.assurances}>
          <li className={clsx(styles.assurance, styles.assuranceGuard)}>
            <IconShield width={15} height={15} /> 30-day money-back guarantee
          </li>
          <li className={styles.assurance}>
            <IconSpark width={15} height={15} /> Instant activation by email
          </li>
          <li className={styles.assurance}>
            <IconWallet width={15} height={15} /> Secure, encrypted payment
          </li>
          <li className={styles.assurance}>
            <IconHeadset width={15} height={15} /> 24/7 support included
          </li>
        </ul>

        <div className={styles.pay}>
          <span className={styles.payLabel}>
            <IconShield width={15} height={15} /> Order over WhatsApp · pay by card, PayPal or crypto
          </span>
          <div className={styles.payMethods}>
            {PAY_METHODS.map((m) => (
              <span key={m.name} className={styles.payChip}>
                <img src={m.src} alt={m.name} loading="lazy" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
