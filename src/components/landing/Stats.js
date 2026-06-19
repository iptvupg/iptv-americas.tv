import React from 'react';
import styles from './Stats.module.css';

const STATS = [
  { value: '54,000+', label: 'Live TV channels' },
  { value: '120K+', label: 'Movies & series' },
  { value: '99.9%', label: 'Streaming uptime' },
  { value: '24/7', label: 'Expert support' },
];

export default function Stats() {
  return (
    <section className={styles.section} aria-label="Company statistics">
      <div className="vt-container">
        <div className={styles.bar} data-reveal>
          {STATS.map((s, i) => (
            <div key={s.label} className={styles.item} data-reveal style={{ '--i': i }}>
              <span className={styles.value}>{s.value}</span>
              <span className={styles.label}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
