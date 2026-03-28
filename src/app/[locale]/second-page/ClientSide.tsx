'use client';

import { Button } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function ClientSide() {
  const router = useRouter();
  const t = useTranslations();

  return (
    <Button
      onClick={() => router.push('/')}
      variant="contained"
      color="primary"
      fullWidth
      className="bg-black text-white"
    >
      {t('menu.back')}
    </Button>
  );
}
