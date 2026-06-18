import React from 'react';
import {
  IconMacos, IconAndroid, IconRoku, IconFireTV,
  IconAppleTV, IconSamsung, IconLG, IconMag,
} from './DeviceIcons';
import styles from './Devices.module.css';

const DEVICES = [
  { name: 'macOS', Icon: IconMacos },
  { name: 'Android', Icon: IconAndroid },
  { name: 'Roku', Icon: IconRoku },
  { name: 'Fire TV', Icon: IconFireTV },
  { name: 'Apple TV', Icon: IconAppleTV },
  { name: 'Samsung TV', Icon: IconSamsung },
  { name: 'LG TV', Icon: IconLG },
  { name: 'MAG', Icon: IconMag },
];

function DeviceItem({ name, Icon, hidden }) {
  return (
    <div className={styles.device} aria-hidden={hidden || undefined}>
      <span className={styles.icon}>
        <Icon className={styles.svg} aria-hidden="true" focusable="false" />
      </span>
      <span className={styles.name}>{name}</span>
    </div>
  );
}

export default function Devices() {
  return (
    <section className={styles.section} aria-label="Supported devices">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.marquee}>
        <div className={styles.track}>
          {DEVICES.map((d) => (
            <DeviceItem key={d.name} {...d} />
          ))}
          {/* Duplicate set for a seamless loop; hidden from assistive tech */}
          {DEVICES.map((d) => (
            <DeviceItem key={`dup-${d.name}`} {...d} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}
