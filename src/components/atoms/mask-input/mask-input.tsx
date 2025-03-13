import * as React from 'react';
import { IMaskInput } from 'react-imask';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        style={{ width: "100%" }}
        mask="###.###.###-##"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

export default function FormattedInputs() {
  const [values, setValues] = React.useState({
    textmask: '11111111111',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel htmlFor="formatted-text-mask-input">react-imask</InputLabel>
      <Input
        fullWidth
        value={values.textmask}
        onChange={handleChange}
        name="textmask"
        id="formatted-text-mask-input"
        inputComponent={TextMaskCustom as any}
      />
    </FormControl>
  );
}