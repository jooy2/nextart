import { Container, Button, Grid, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import PageContentClient from '@/app/[locale]/PageContentClient';
import type { Metadata } from 'next';
import { SITE_NAME } from '@/constants/common';

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
          <Typography
            component="h1"
            variant="h4"
            fontWeight={800}
            color="#4d4d4d"
            marginY="40px"
            marginX="30px"
          >
            {t('title.main')}
          </Typography>
          <Typography component="p">{t('desc.main')}</Typography>
        </Grid>
        <Grid size={12} marginTop="50px">
          <Link href="/second-page">
            <Button variant="contained" color="primary" fullWidth className="bg-black text-white">
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
