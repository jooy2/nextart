'use client';

import { AccountCircle, Home } from '@mui/icons-material';
import ComponentShowcase from '@/components/ComponentShowcase';
import { Grid2 as Grid } from '@mui/material';

export default function PageContentClient() {
  const menuItem = [
    { text: 'Home', icon: <Home />, href: '/account/home' },
    {
      text: 'Account',
      icon: <AccountCircle />,
      href: '/',
    },
  ];

  return (
    <Grid container>
      <ComponentShowcase menuItem={menuItem} />
    </Grid>
  );
}
