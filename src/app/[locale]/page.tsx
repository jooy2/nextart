import { Button, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';
import { css } from '@mui/material-pigment-css';
import Grid from '@pigment-css/react/Grid';
import Container from '@pigment-css/react/Container';

const cssTextMainHeading = css({
  userSelect: 'none',
  fontWeight: '800 !important',
  color: '#4d4d4d',
  margin: '40px 0 30px 0 !important',
  textAlign: 'center',
});

export default async function Index() {
  const t = await getTranslations();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography component="h2" variant="h2" className={cssTextMainHeading}>
            {/* {t('hello')} */}
            Test
          </Typography>
        </Grid>
        <Grid size={12}>
          <Button variant="contained" color="primary" fullWidth>
            Test Button
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
