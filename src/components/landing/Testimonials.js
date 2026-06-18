import React from 'react';
import { IconStar } from './Icons';
import styles from './Testimonials.module.css';

const REVIEWS = [
  {
    name: 'James W.',
    meta: 'Verified customer · 1 month ago',
    rating: 5,
    quote: 'Set up in minutes and the picture quality is incredible — 4K with zero buffering. Worth every penny.',
  },
  {
    name: 'Sofia M.',
    meta: 'Verified customer · 3 weeks ago',
    rating: 5,
    quote: 'Support replied in under two minutes and walked me through installing it on my Fire Stick. Genuinely helpful.',
  },
  {
    name: 'Daniel R.',
    meta: 'Verified customer · 6 months ago',
    rating: 5,
    quote: 'All my sports channels in one place and rock-solid reliability. After six months I am never going back to cable.',
  },
  {
    name: 'Aisha K.',
    meta: 'Verified customer · 2 months ago',
    rating: 5,
    quote: 'The VOD library is huge and I can watch on three devices at once with no lag at all.',
  },
  {
    name: 'Marco T.',
    meta: 'Verified customer · 1 week ago',
    rating: 5,
    quote: 'Just renewed my 12-month plan. Best IPTV service I have tried — highly recommend it.',
  },
];

function Stars({ rating }) {
  return (
    <span className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} width={15} height={15} aria-hidden="true" />
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className={styles.section} aria-label="Customer reviews">
      <div className={`vt-container ${styles.inner}`}>
        <header className={styles.head} data-reveal>
          <span className="vt-eyebrow">Reviews</span>
          <h2 className="vt-section-title">Rated 4.9/5 by thousands of viewers</h2>
          <p className="vt-section-sub">
            Based on 2,000+ verified customer reviews across our subscriptions.
          </p>
        </header>
      </div>

      <div className={styles.scroller}>
        <div className={styles.track}>
          {REVIEWS.map((r) => (
            <article key={r.name} className={styles.card}>
              <Stars rating={r.rating} />
              <p className={styles.quote}>{r.quote}</p>
              <div className={styles.author}>
                <span className={styles.avatar}>{r.name.charAt(0)}</span>
                <div className={styles.meta}>
                  <span className={styles.name}>{r.name}</span>
                  <span className={styles.role}>{r.meta}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
