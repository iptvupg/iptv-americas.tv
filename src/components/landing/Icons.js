import React from 'react';

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const IconSpark = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
  </svg>
);

export const IconWrench = (p) => (
  <svg {...base} {...p}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z" />
  </svg>
);

export const Icon4k = (p) => (
  <svg {...base} {...p}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M7 9v3h2M9 9v6M14 9v6M14 12l3-3M14 12l3 3" />
  </svg>
);

export const IconDevices = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="14" height="10" rx="1.5" />
    <path d="M3 18h11" />
    <rect x="16" y="9" width="5" height="11" rx="1.2" />
  </svg>
);

export const IconUptime = (p) => (
  <svg {...base} {...p}>
    <path d="M21 12a9 9 0 1 1-3-6.7" />
    <path d="M21 4v4h-4" />
    <path d="M12 8v4l3 2" />
  </svg>
);

export const IconHeadset = (p) => (
  <svg {...base} {...p}>
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
    <rect x="2.5" y="13" width="4" height="6" rx="1.4" />
    <rect x="17.5" y="13" width="4" height="6" rx="1.4" />
    <path d="M20 19a4 4 0 0 1-4 3h-2" />
  </svg>
);

export const IconGlobe = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
);

export const IconShield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const IconRefresh = (p) => (
  <svg {...base} {...p}>
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M21 4v4h-4" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    <path d="M3 20v-4h4" />
  </svg>
);

export const IconWallet = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="6" width="18" height="13" rx="2.5" />
    <path d="M3 10h18M16 14h2" />
  </svg>
);

export const IconLayers = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l9 5-9 5-9-5 9-5Z" />
    <path d="M3 13l9 5 9-5" />
  </svg>
);

export const IconServer = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="7" rx="2" />
    <rect x="3" y="13" width="18" height="7" rx="2" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </svg>
);

export const IconCheck = (p) => (
  <svg {...base} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const IconArrow = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconChevron = (p) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconStar = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.3l6.5-.9L12 2.5Z" />
  </svg>
);

export const IconPlay = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M8 5.5v13a1 1 0 0 0 1.52.85l10.5-6.5a1 1 0 0 0 0-1.7L9.52 4.65A1 1 0 0 0 8 5.5Z" />
  </svg>
);

export const IconMenu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const IconClose = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconWhatsapp = (p) => (
  <svg viewBox="0 0 32 32" width={20} height={20} {...p}>
    <path
      fill="#25D366"
      d="M16 0C7.164 0 0 7.164 0 16c0 2.824.738 5.586 2.141 8.016L0 32l8.18-2.145A15.93 15.93 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0Z"
    />
    <path
      fill="#FFF"
      d="M24.34 22.46c-.36 1.01-2.1 1.93-2.92 2.01-.78.07-1.55.36-5.33-1.11-4.55-1.79-7.43-6.43-7.66-6.73-.22-.3-1.82-2.42-1.82-4.62 0-2.2 1.16-3.28 1.57-3.73.41-.45.89-.56 1.19-.56.3 0 .59.003.85.016.27.012.64-.103 1 .76.36.87 1.23 3.02 1.34 3.24.11.22.18.48.04.78-.14.3-.21.48-.41.74-.2.26-.43.58-.61.78-.2.22-.42.46-.18.86.24.4 1.06 1.75 2.28 2.83 1.57 1.4 2.89 1.84 3.3 2.04.41.2.65.17.89-.1.24-.27 1.02-1.19 1.29-1.6.27-.41.55-.34.93-.21.38.13 2.41 1.14 2.82 1.34.41.2.69.3.79.47.1.17.1.97-.26 1.98Z"
    />
  </svg>
);
