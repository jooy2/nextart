import { Button } from '@mui/material';

export default function ButtonSet() {
  return (
    <>
      <Button variant="text" color="primary" fullWidth className="text-red">
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
