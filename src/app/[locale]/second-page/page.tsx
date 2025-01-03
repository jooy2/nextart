import { Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';
import { css } from '@mui/material-pigment-css';
import Grid from '@pigment-css/react/Grid';
import Container from '@pigment-css/react/Container';
import ClientSide from '@/app/[locale]/second-page/ClientSide';

const cssTextMainHeading = css({
  userSelect: 'none',
  fontWeight: '800 !important',
  color: '#4d4d4d',
  margin: '40px 0 30px 0 !important',
});

export default async function Index() {
  const t = await getTranslations();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography component="h1" variant="h4" className={cssTextMainHeading}>
            {t('title.second')}
          </Typography>
          <Typography component="p">{t('desc.second')}</Typography>
        </Grid>
        <Grid size={12} className={css({ marginTop: '50px' })}>
          <ClientSide />
        </Grid>
      </Grid>
    </Container>
  );
}
