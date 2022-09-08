// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Raj's Python Guide",
  tagline: 'Learn Python Programming!',
  url: 'https://rajtech.me',
  baseUrl: '/python-guide/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: "https://github.com/RajDave69/Python-Guide/edit/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        content: `⭐️ If you like this Guide, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/RajDave69/Python-Guide">GitHub</a> and check out my <a target="_blank" rel="noopener noreferrer" href="https://rajtech.me">Website</a>`,
      },
      navbar: {
        title: "Raj's Python Guide",
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [

          {
            href: 'https://github.com/RajDave69/Python-Guide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tutorial',
            items: [
              {
                label: 'Intro',
                to: '/intro',
              },
            ],
          },
          {
            title: 'My Socials',
            items: [
              {
                label: 'GitHub',
                href: 'https://rajtech.me/github',
              },
              {
                label: 'Instagram',
                href: 'https://rajtech.me/instagram',
              },
              {
                label: 'Twitter',
                href: 'https://rajtech.me/twitter',

              },
              {
                label: 'YouTube',
                href: 'https://rajtech.me/youtube',
              }
            ],
          },
          {
            title: 'My Other Projects',
            items: [
              {
                label: 'GCR Renamer | Chrome Extension',
                href: 'https://github.com/Rajdave69/GCR-Renamer',
              },
              {
                label: 'BPS Circular API',
                href: 'https://github.com/BPS-Circular-API/api',
              },
                {
                  label: 'Mini Projects',
                  href: 'https://github.com/Rajdave69/Mini-Projects'
                }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Raj's Vault. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
