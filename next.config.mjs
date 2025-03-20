/** @type {import('next').NextConfig} */
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
          },
        ],
      },
};

if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }

export default nextConfig;
