// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Drone Learning Space User Guide",
  tagline: "คู่มือการใช้งาน Drone Learning Space สำหรับผู้ใช้งานแบบสมาชิก",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://KireinaSoft.github.io/kku-drone-user-docs",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "KireinaSoft", // Usually your GitHub org/user name.
  projectName: "kku-drone-user-docs", // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    locales: ["th"],
    defaultLocale: "th",
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // TODO: Make this project open source to let people contribute to the docs
          // editUrl: "https://github.com/KireinaSoft/kku-drone-user-docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "คู่มือการใช้งาน Drone Learning Space",
        logo: {
          alt: "Drone Learning Space",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            label: "หน้าแรก",
            position: "left",
            sidebarId: "tutorialSidebar",
          },
          // TODO: Make this project open source to let people contribute to the docs
          // {
          //   href: "https://github.com/KireinaSoft/kku-drone-user-docs",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Drone Learning Space. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
