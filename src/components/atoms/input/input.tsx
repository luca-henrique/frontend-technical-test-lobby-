import { FormControl, InputLabel, TextField } from '@mui/material';

export default function Input() {
  return (
    <FormControl fullWidth variant="standard">
      <TextField id="standard-basic" fullWidth label="Standard" variant="standard" />
    </FormControl>
  );
}