/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? '/toolbox' : '',
  trailingSlash: true,
}
