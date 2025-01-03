'use client';

import { cssBlackButton } from '@/styles/commonStyles';
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
      className={cssBlackButton}
    >
      {t('menu.back')}
    </Button>
  );
}
