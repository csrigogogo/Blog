// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const isDev = process.env.NODE_ENV === "development";
const baseUrl = process.env.BASE_URL ?? "/";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CriSri 的 Blog",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "csrigogogo", // Usually your GitHub org/user name.
  projectName: "Blog", // Usually your repo name.
  trailingSlash: false,
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          //   path: "tag/network",
          //   routeBasePath: "network",
          sidebarPath: require.resolve("./sidebars.js"),
          //   showLastUpdateAuthor: true,
          //   showLastUpdateTime: true,
          editUrl: "https://github.com/csrigogogo/Blog/blob/master",
        },
        blog: {
          showReadingTime: true,
          //   showLastUpdateAuthor: true,
          //   showLastUpdateTime: true,
          editUrl: "https://github.com/csrigogogo/Blog/blob/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "network",
        path: "tech/network",
        routeBasePath: "network",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/csrigogogo/Blog/blob/master",
        // showLastUpdateAuthor: true,
        // showLastUpdateTime: true,
        // breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "soft-route",
        path: "tech/soft-route",
        routeBasePath: "soft-route",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/csrigogogo/Blog/blob/master",
        // showLastUpdateAuthor: true,
        // showLastUpdateTime: true,
        // breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "react",
        path: "tech/react",
        routeBasePath: "react",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/csrigogogo/Blog/blob/master",
        // showLastUpdateAuthor: true,
        // showLastUpdateTime: true,
        // breadcrumbs: false,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "CriSri的 Blog",
        hideOnScroll: true,
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            // to: "/tech",
            label: "技术",
            position: "right",
            items: [
              { to: "/soft-route/概述", label: "软路由" },
              { to: "/network/概述", label: "计算机网络" },
              { to: "/react/概述", label: "react" },
            ],
          },
          {
            position: "right",
            className: "header-github-link",
            "aria-label": "github",
            href: "https://github.com/csrigogogo",
          },
        ],
      },

      //     style: 'dark',
      //     links: [
      //       {
      //         title: 'Docs',
      //         items: [
      //           {
      //             label: 'Tutorial',
      //             to: '/docs/intro',
      //           },
      //         ],
      //       },
      //       {
      //         title: 'Community',
      //         items: [
      //           {
      //             label: 'Stack Overflow',
      //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //           },
      //           {
      //             label: 'Discord',
      //             href: 'https://discordapp.com/invite/docusaurus',
      //           },
      //           {
      //             label: 'Twitter',
      //             href: 'https://twitter.com/docusaurus',
      //           },
      //         ],
      //       },
      //       {
      //         title: 'More',
      //         items: [
      //           {
      //             label: 'Blog',
      //             to: '/blog',
      //           },
      //           {
      //             label: 'GitHub',
      //             href: 'https://github.com/facebook/docusaurus',
      //           },
      //         ],
      //       },
      //     ],
      //     copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      //   },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "powershell",
          "go",
          "json",
          "dart",
          //   "ts",

          //   "sh",
          //   "python",
          "git",
          "nginx",
          "java",
          "php",
          "rust",
          "http",
          "git",
          "yaml",
        ],
      },
    }),
};

module.exports = config;
