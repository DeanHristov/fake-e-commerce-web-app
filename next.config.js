/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    API_URL: process.env.API_URL || 'https://dummyjson.com',
    API_MOCKING: process.env.API_MOCKING,
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
