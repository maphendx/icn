import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
