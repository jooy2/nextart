import { withPigment } from '@pigment-css/nextjs-plugin';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compiler: {
    emotion: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  experimental: {
    scrollRestoration: true,
  },
  staticPageGenerationTimeout: 120,
};

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  // transformLibraries: ['@mui/material'],
};

export default withNextIntl(withPigment(nextConfig, pigmentConfig));
