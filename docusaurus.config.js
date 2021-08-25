/** @type {import('@docusaurus/types').DocusaurusConfig} */

const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'IOTA Wiki',
  tagline: 'The complete reference for IOTA',
  url: 'https://wiki.iota.org',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',
  organizationName: 'iota-community', // Usually your GitHub org/user name.
  projectName: 'iota-wiki', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  themeConfig: {
    announcementBar: {
      id: 'wip', // Any value that will identify this message.
      content:
        'The work on this Wiki is still in progress. Consider contributing by using the in page editor or creating a <a href="https://github.com/iota-community/iota-wiki">PR directly</a>',
      backgroundColor: '#ff0000', // Defaults to `#fff`.
      textColor: '#fff', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    matomo: {
      matomoUrl: 'https://matomo.antonionardella.it/',
      siteId: '6',
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'IOTA Wiki Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          label: "Learn",
          to: "learn/about-iota/an-introduction-to-iota",
        },
        {
          label: "Use",
          to: "use/use-cases/industry-applications",
        },
        {
          label: 'Develop',
          items: [
            {
              label: "Getting Started",
              to: "develop/getting-started/architecture",
              className: 'icon-getting-started',
              activeBaseRegex: 'develop/getting-started/.*'
            },
            /* AUTO GENERATED EXTERNAL DOCS DROPDOWN CONFIG */
          ]
        },
        {
          label: "Participate",
          to: "participate/support-the-network/run-a-node",
        },
        { to: '/blog', label: 'Blog', position: 'right' },
      ],

    },
    footer: {
      links: [
        {
          title: 'LEARN',
          items: [
            {
              label: 'About IOTA',
              to: "learn/about-iota/an-introduction-to-iota",
            },
            {
              label: 'IOTA Token',
              to: "learn/iota-token/overview",
            },
            {
              label: 'Wallets',
              to: "learn/wallets/what-is-a-wallet",
            },
            {
              label: 'Networks',
              to: "learn/networks/iota-1.5-chrysalis",
            },
            {
              label: 'Resource Materials',
              to: "learn/resource-materials/glossary",
            },
            {
              label: 'Research',
              to: "learn/research/research-outline",
            },
          ],
        },
        {
          title: 'USE',
          items: [
            {
              label: 'Use Cases',
              to: "use/use-cases/industry-applications",
            },
            {
              label: 'Streams',
              to: "use/streams/encrypted-data-comms",
            },
            {
              label: 'Identity',
              to: "use/identity/enabling-privacy-and-trust",
            },
            {
              label: 'Access',
              to: "use/access/secure-access-control",
            },
            {
              label: 'Smart Contracts',
              to: "use/smart-contracts/programmable-contracts",
            },
            {
              label: 'Stronghold',
              to: "use/stronghold/protecting-your-secrets",
            },
            {
              label: 'Oracles',
              to: "use/oracles/trust-in-real-world-data",
            },
            {
              label: 'Utilities',
              to: "use/utilities/tangle-explorer",
            },
          ],
        },
        {
          title: 'DEVELOP',
          items: [
            {
              label: 'Getting Started',
              to: "develop/getting-started/architecture",
            },
            {
              label: 'Fundamentals',
              to: "develop/fundamentals/cryptography",
            },
            {
              label: 'Exchange Integration',
              to: "develop/exchange-integration/exchange-integration-guide",
            },
            {
              label: 'Tutorials',
              to: "develop/tutorials/youtube",
            },
          ],
        },
        {
          title: 'PARTICIPATE',
          items: [
            {
              label: 'Support the network',
              to: "participate/support-the-network/run-a-node",
            },
            {
              label: 'The Community',
              to: "participate/the-community/discord",
            },
            {
              label: 'Partnerships',
              to: "participate/partnerships/iota-partnerships",
            },
            {
              label: 'Funding',
              to: "participate/funding/edf-funding",
            },
          ],
        },
      ],
      logo: {
        alt: 'IOTA Logo',
        src: 'img/iota_logo.svg',
        srcDark: 'img/iota_logo_dark.svg',
        href: 'https://www.iota.org',
      },
      copyright: `© ${new Date().getFullYear()} IOTA Wiki, Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'dark',

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: 'light_mode',

        // CSS to apply to dark icon
        darkIconStyle: {
          fontFamily: 'Material Icons',
        },

        lightIcon: 'dark_mode',

        lightIconStyle: {
          fontFamily: 'Material Icons',
        },
      },
    },
    searchMode: {
      switchConfig: {
        closeIcon: 'close',

        closeIconStyle: {
          fontFamily: 'Material Icons',
        },

        searchIcon: 'search',

        searchIconStyle: {
          fontFamily: 'Material Icons',
        },
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/iota-community/iota-wiki/edit/develop/',
          remarkPlugins: [require('remark-code-import'), require('remark-import-partial')],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      },
    ]
  ],
  plugins: [
    [
      '@jlvandenhout/docusaurus-plugin-docs-editor',
      {
        // GitHub OAuth Application settings
        github: {
          // REQUIRED - The Client ID you got from the GitHub OAuth App setup
          clientId: '30a8f5a21215004e81ca',
          // REQUIRED - The plugin will append the authorization code to this URL
          tokenUrl: 'https://iota-wiki-github-oauth-login.iotaledger.workers.dev',
          // The request method to use (GET or POST), defaults to GET
          method: 'POST',
        },
      }
    ],
    'docusaurus-plugin-matomo',
    /* AUTO GENERATED EXTERNAL DOCS CONFIG */
  ]
};
