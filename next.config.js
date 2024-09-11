const withVercelToolbar = require("@vercel/toolbar/plugins/next")();

/** @type {import("next").NextConfig} */
const nextConfig = {};

module.exports = withVercelToolbar(nextConfig);