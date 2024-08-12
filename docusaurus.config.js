// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import { GTAG, LINK_GH, LINK_GH_SPONSOR, LINK_LINKEDIN, LINK_NPM, LINK_PAYPAL, LINK_WEBSITE } from './src/constants.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Christian Vadalà Open Source Projects',
  tagline: 'List of open source projects, backed by React, Node.JS and AWS technologies.',
  favicon: 'images/favicon.ico',

  // Set the production url of your site here
  url: LINK_WEBSITE,
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chrvadala', // Usually your GitHub org/user name.
  projectName: 'chrvadala.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: GTAG,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      image: 'images/social-card.png',
      navbar: {
        title: 'Christian Vadalà website',
        // logo: {
        //   alt: 'Christian Vadalà Open Source Projects',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            href: LINK_GH,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Repositories',
            items: [
              {
                label: 'GitHub',
                href: LINK_GH,
              },
              {
                label: 'NPM',
                href: LINK_NPM,
              },
            ],
          },
          {
            title: 'Support projects',
            items: [
              {
                label: 'Support via PayPal',
                href: LINK_PAYPAL,
              },
              {
                label: 'Support via GitHub Sponsor',
                href: LINK_GH_SPONSOR,
              },
            ],
          },
          {
            title: 'Contacts',
            items: [
              {
                label: 'Contact via Linkedin',
                href: LINK_LINKEDIN,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
