import { Container, Grid, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';
import ClientSide from '@/app/[locale]/second-page/ClientSide';

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
            {t('title.second')}
          </Typography>
          <Typography component="p">{t('desc.second')}</Typography>
        </Grid>
        <Grid size={12} marginTop="50px">
          <ClientSide />
        </Grid>
      </Grid>
    </Container>
  );
}
