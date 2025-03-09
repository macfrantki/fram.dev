/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fram.dev',
        port: '',
        pathname: '/**',
      },
      // Keep localhost for development
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Required for static export
  },
  webpack: (config) => {
    const rules = config.module.rules;

    // Find the CSS rule
    const cssRule = rules.find((rule) => rule.test && rule.test.toString().includes('css'));

    if (cssRule) {
      // Make sure TypeScript files are included
      cssRule.test = /\.(css|ts|tsx)$/;
    }

    return config;
  },
};

export default nextConfig;
