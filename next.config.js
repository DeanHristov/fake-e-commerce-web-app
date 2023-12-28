/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#advanced-middleware-flags
  skipTrailingSlashRedirect: true,
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000/api',
    API_URL: process.env.API_URL || 'http://localhost:3002/api/v1',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com',
      },
    ],
  },
};

module.exports = nextConfig;
