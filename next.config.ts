import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.phlu.ch',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
