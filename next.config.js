const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  env: {
    PUBLIC_URL: "https://bogdan-bogdanovic.com/",
    assetPrefix: "./",
  },
};

module.exports = nextConfig;
