/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'utfs.io',
      },
    ],
    deviceSizes: [160, 320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

// next.config.js
module.exports = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs', '.json', '.ts', '.tsx'],
  },
};

module.exports = nextConfig;

