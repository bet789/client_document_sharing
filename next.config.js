/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.bet789.mobi"],
  },
};
const { withSuperjson } = require("next-superjson");

module.exports = nextConfig;
module.exports = withSuperjson()(nextConfig);
