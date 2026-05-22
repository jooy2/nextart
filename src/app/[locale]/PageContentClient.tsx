'use client';

import { AccountCircle, Home } from '@mui/icons-material';
import ComponentShowcase from '@/components/ComponentShowcase';

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
      <ComponentShowcase menuItem={menuItem} />
  );
}
