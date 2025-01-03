import { PigmentOptions, withPigment } from '@pigment-css/nextjs-plugin';
import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';
import { createTheme } from '@mui/material';

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

const pigmentCssConfig: PigmentOptions = {
  transformLibraries: ['@mui/material'],
  theme: createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: {
      htmlFontSize: 17.5,
    },
    palette: {
      mode: 'light',
      info: {
        main: '#486ce3',
      },
      primary: {
        main: '#006c8a',
      },
      secondary: {
        main: '#3e3e3e',
      },
      background: {
        default: '#efefef',
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          h2: {
            fontWeight: '500',
            fontSize: '1.5em',
            marginTop: '35px',
          },
          h3: {
            fontWeight: '500',
            fontSize: '1.2em',
            marginTop: '35px',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '20px',
            boxShadow: '1px 1px 50px 1px #b8b8b8',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
  }),
};

export default withPigment(withNextIntl(nextJsConfig), pigmentCssConfig);
