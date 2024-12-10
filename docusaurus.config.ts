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
          label: 'npm',
          position: 'right',
        },
        {
          href: 'https://github.com/or-temka/shegit',
          label: 'GitHub',
          position: 'right',
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
