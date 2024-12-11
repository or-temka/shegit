import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Shegit',
  tagline: 'Shegit modular utilities',
  favicon: 'img/favicon/favicon.ico',

  // Set the production url of your site here
  url: 'https://or-temka.github.io',
  baseUrl: '/shegit/',
  organizationName: 'or-temka',
  projectName: 'shegit',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/or-temka/shegit/tree/docs',
          includeCurrentVersion: true,
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   editUrl: 'https://github.com/or-temka/shegit/tree/docs',
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Shegit',
      logo: {
        alt: 'Shegit Logo',
        src: 'img/logo-dark.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'shegitSidebar',
          position: 'left',
          label: 'Documentation',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://www.npmjs.com/package/shegit',
          position: 'right',
          className: 'navbar-icon-link',
          html: `
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="38px" xmlns="http://www.w3.org/2000/svg">
              <path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"></path>
            </svg>`,
        },
        {
          href: 'https://github.com/or-temka/shegit',
          position: 'right',
          className: 'navbar-icon-link',
          html: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.286-.01-1.04-.016-2.04-3.338.726-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.997.11-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.932 0-1.31.468-2.382 1.235-3.222-.123-.303-.534-1.525.117-3.177 0 0 1.008-.323 3.3 1.23a11.523 11.523 0 013.003-.405c1.02.005 2.047.138 3.003.405 2.292-1.553 3.3-1.23 3.3-1.23.652 1.653.24 2.874.117 3.177.77.84 1.235 1.912 1.235 3.222 0 4.61-2.803 5.625-5.475 5.922.43.372.81 1.1.81 2.22 0 1.605-.015 2.897-.015 3.287 0 .32.216.694.825.576C20.565 21.797 24 17.298 24 12 24 5.37 18.63 0 12 0z"></path>
            </svg>`,
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Colors',
              to: '/docs/category/colors',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/or-temka/shegit',
            },
            {
              label: 'npm',
              href: 'https://www.npmjs.com/package/shegit',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Artem Shchegortsov`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
