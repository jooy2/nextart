import { css } from '@mui/material-pigment-css';
import { Button } from '@mui/material';

export default function ButtonSet() {
  return (
    <>
      <Button
        variant="text"
        color="primary"
        fullWidth
        className={css({
          color: 'red',
        })}
      >
        TextButton
      </Button>
      <Button variant="outlined" color="primary" fullWidth>
        OutlinedButton
      </Button>
      <Button variant="contained" color="primary" fullWidth>
        ContainedButton
      </Button>
    </>
  );
}
