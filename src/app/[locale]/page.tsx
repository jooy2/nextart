import { Button, Grid, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';
import { css } from '@mui/material-pigment-css';
import Container from '@pigment-css/react/Container';
import Link from 'next/link';
import { cssBlackButton } from '@/styles/commonStyles';
import PageContentClient from '@/app/[locale]/PageContentClient';
import type { Metadata } from 'next';
import { SITE_NAME } from '@/constants/common';

const cssTextMainHeading = css({
  userSelect: 'none',
  fontWeight: '800 !important',
  color: '#4d4d4d',
  margin: '40px 0 30px 0 !important',
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: SITE_NAME,
  };
}

export default async function Index() {
  const t = await getTranslations();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography component="h1" variant="h4" className={cssTextMainHeading}>
            {t('title.main')}
          </Typography>
          <Typography component="p">{t('desc.main')}</Typography>
        </Grid>
        <Grid size={12} className={css({ marginTop: '50px' })}>
          <Link href="/second-page">
            <Button variant="contained" color="primary" fullWidth className={cssBlackButton}>
              {t('menu.second-page')}
            </Button>
          </Link>
        </Grid>
        <Grid size={12}>
          <PageContentClient />
        </Grid>
      </Grid>
    </Container>
  );
}
