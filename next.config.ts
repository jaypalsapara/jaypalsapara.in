import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/avif'],
    minimumCacheTTL: 31536000, // 1 Year cached
  },
};

export default nextConfig;
