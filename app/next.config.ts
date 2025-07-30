import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  images: {
    remotePatterns: [{ protocol: 'http', hostname: 'books.google.com' }],
  },
};

export default nextConfig;
