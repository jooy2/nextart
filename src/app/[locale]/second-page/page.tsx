import { Container, Grid, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';
import ClientSide from '@/app/[locale]/second-page/ClientSide';

export default async function Index() {
  const t = await getTranslations();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography className="my-10! font-extrabold! text-[#4d4d4d]" component="h1" variant="h4">
            {t('title.second')}
          </Typography>
          <Typography component="p">{t('desc.second')}</Typography>
        </Grid>
        <Grid size={12} className="mt-12.5">
          <ClientSide />
        </Grid>
      </Grid>
    </Container>
  );
}
