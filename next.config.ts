import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextJsConfig: NextConfig = {
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  productionBrowserSourceMaps: false,
  experimental: {
    serverSourceMaps: false,
    scrollRestoration: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  staticPageGenerationTimeout: 120,
  async headers() {
    return [
      {
        // Served identically to every visitor and never user specific, so let the
        // browser and any CDN in front of the app hold on to it.
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
          },
        ],
      },
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

export default withNextIntl(nextJsConfig);
