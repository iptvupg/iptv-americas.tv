// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IPTV Americas',
  tagline: 'Lightning fast IPTV streaming',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.iptv-americas.tv',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  organizationName: 'IPTV Americas', // GitHub org/user name.
  projectName: 'iptv-americas.tv', // Repo name.

  // Emit pages as /path/ so canonical tags and sitemap <loc> match the
  // trailing-slash URLs Netlify actually serves (avoids 301 + canonical mismatch).
  trailingSlash: true,

  onBrokenLinks: 'throw',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'ujlGhSq48aL0_mUmSmr-reYx24eYgBTeBmcyhMFt0gU',
      },
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // Single-page marketing site — no docs or blog.
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social/preview card (Open Graph + Twitter).
      image: 'img/og-image.jpg',
      metadata: [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'keywords', content: 'IPTV, IPTV subscription, live TV streaming, 4K IPTV, sports channels, movies and series, IPTV Americas' },
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // The landing page renders its own custom Navbar/Footer components, so
      // the theme navbar/footer are left empty to avoid duplicate chrome.
      navbar: {
        title: '',
        items: [],
      },
      footer: undefined,
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
