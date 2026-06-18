import React from 'react';
import { IconPlay, IconStar } from './Icons';
import styles from './Showcase.module.css';

const POSTERS = [
  {
    title: 'Spider-Man: Brand New Day',
    img: 'https://image.tmdb.org/t/p/w342/yyB2VJEW3an2xCdcYCPQhn9QERR.jpg',
    rating: 0,
    year: 2026,
  },
  {
    title: 'Toy Story 5',
    img: 'https://image.tmdb.org/t/p/w342/pxG26JdyuiDvJbSoucknaFiLeZD.jpg',
    rating: 7.2,
    year: 2026,
  },
  {
    title: 'Mortal Kombat II',
    img: 'https://image.tmdb.org/t/p/w342/hwRdDFIhaEmpRgoki805YvyyjZf.jpg',
    rating: 8.0,
    year: 2026,
  },
  {
    title: 'FROM',
    img: 'https://image.tmdb.org/t/p/w342/pRtJagIxpfODzzb0T0NAvZSzErC.jpg',
    rating: 8.5,
    year: 2022,
  },
  {
    title: 'The Simpsons',
    img: 'https://image.tmdb.org/t/p/w342/uWpG7GqfKGQqX4YMAo3nv5OrglV.jpg',
    rating: 8.0,
    year: 1989,
  },
];

export default function Showcase() {
  return (
    <section className={styles.showcase} aria-label="Featured titles">
      <div className={`vt-container ${styles.row}`}>
        {POSTERS.map((p, i) => (
          <article key={p.title} className={styles.poster} style={{ '--i': i }}>
            <img className={styles.img} src={p.img} alt={p.title} loading="lazy" />
            <div className={styles.sheen} aria-hidden="true" />
            <div className={styles.scrim} aria-hidden="true" />
            <span className={styles.play} aria-hidden="true">
              <IconPlay width={18} height={18} />
            </span>
            <div className={styles.meta}>
              <span className={styles.title}>{p.title}</span>
              <span className={styles.info}>
                {p.rating > 0 && (
                  <span className={styles.rating}>
                    <IconStar /> {p.rating.toFixed(1)}
                  </span>
                )}
                <span>{p.year}</span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
