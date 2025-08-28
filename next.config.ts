import { PigmentOptions, withPigment } from '@pigment-css/nextjs-plugin';
import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';
import theme from '@/styles/theme';

const withNextIntl = createNextIntlPlugin();

const nextJsConfig: NextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  productionBrowserSourceMaps: false,
  experimental: {
    serverSourceMaps: false,
    webpackMemoryOptimizations: true,
    scrollRestoration: true,
  },
  staticPageGenerationTimeout: 120,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

const pigmentCssConfig: PigmentOptions = {
  transformLibraries: ['@mui/material'],
  theme,
};

export default withPigment(withNextIntl(nextJsConfig), pigmentCssConfig);
