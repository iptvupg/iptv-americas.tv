import React from 'react';
import { IconArrow } from './Icons';
import { useCheckout } from './CheckoutContext';
import styles from './StickyCta.module.css';

export default function StickyCta() {
  const { open, isOpen } = useCheckout();
  if (isOpen) return null;

  return (
    <div className={styles.bar} role="region" aria-label="Subscribe">
      <span className={styles.price}>
        <span className={styles.from}>From</span>
        <span className={styles.amount}>$7.50</span>
        <span className={styles.per}>/mo</span>
      </span>
      <button type="button" className={styles.cta} onClick={() => open()}>
        Get Started <IconArrow width={16} height={16} />
      </button>
    </div>
  );
}
