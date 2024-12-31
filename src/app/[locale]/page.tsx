import { Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';
import { css } from '@mui/material-pigment-css';

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
    <Typography component="h2" variant="h2" className={cssTextMainHeading}>
      {t('hello')}
    </Typography>
  );
}
