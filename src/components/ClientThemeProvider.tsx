'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '@/styles/theme';

export default function ClientThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
