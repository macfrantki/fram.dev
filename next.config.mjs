/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

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
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
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

export default withMDX(nextConfig);
