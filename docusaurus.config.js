// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Raj's Python Guide",
  tagline:
    "Raj's lil guide to learning Python",
  url: "https://rajtech.me",
  trailingSlash: false,
  baseUrl: "/python-guide/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "", // Usually your GitHub org/user name.
  projectName: "", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "classic",
      {
        docs: {
          editUrl:
            "https://github.com/RajDave69/Python-Guide/edit/main/",
          routeBasePath: "/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/scss/main.scss"),
        },
      },
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,  // TODO: Support light mode (I know, I know. Eww. I'm sorry.)
    },
    navbar: {
      title: "Raj's Python Guide",
      hideOnScroll: true,
      items: [
        {
          label: "My Website",
          position: "left",
          href: "https://rajtech.me/",
        },
        {
          label: "W3 Schools",
          position: "left",
          href: "https://w3schools.com/python",
        },

        {
          label: "Source",
          // We should use href instead of to, but it creates a strange styling issue
          to: 'https://github.com/RajDave69/Python-Guide/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Raj Dave.`,
    },
    prism: {
      defaultLanguage: "python",
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    // algolia: {
    //   appId: "B3W8ZM9HW4",
    //   apiKey: "1bf03e7f2ea8fef3ab0c70f50c65e063",  // Public key
    //   indexName: "pycord",
    // }
  },
};

module.exports = config;
