import { PigmentOptions, withPigment } from '@pigment-css/nextjs-plugin';
import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextJsConfig: NextConfig = {
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
const pigmentCssConfig: PigmentOptions = {
  transformLibraries: ['@mui/material'],
};

export default withPigment(withNextIntl(nextJsConfig), pigmentCssConfig);
