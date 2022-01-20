// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require('remark-math');
const katex = require('rehype-katex');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'osu! トーナメントガイド',
  tagline: 'osu! tourney japanese guide',
  url: 'https://fairy-phy.github.io',
  baseUrl: '/tournament_guide/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'Fairy_Phy', // Usually your GitHub org/user name.
  projectName: 'tournament_guide', // Usually your repo name.
  favicon: "/img/favicon.png",

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Fairy-Phy/tournament_guide/edit/main/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-K7WY2EZS2N',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          trailingSlash: false,
        },
      }),
    ],
  ],

  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      colorMode: {
        defaultMode: "dark"
      },
      navbar: {
        title: 'osu! トーナメントガイド',
        hideOnScroll: true,
        items: [
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright ${new Date().getFullYear()} (Fairy)Phy, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgba(255, 255, 255, 0.5)',
            dark: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
    }),
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;
