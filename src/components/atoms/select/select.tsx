import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select as CustomSelect, FormHelperText, SelectProps } from "@mui/material";
import { Controller } from "react-hook-form";
interface OptionProps {
  label: string;
  value: string;
}

export type SelectCustomProps = {
  label: string;
  control: any;
  name: string;
  options: OptionProps[];
  helperText: string
} & SelectProps;

export const Select = ({
  label,
  control,
  name,
  options,
  error,
  helperText
}: SelectCustomProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl variant="standard" fullWidth error={error}>
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <CustomSelect
            labelId={`${name}-label`} // Associando o InputLabel ao Select
            value={field.value ?? ""}
            onChange={field.onChange}
            id={name}
            label={label}
            fullWidth
            error={error}
          >
            {options.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </CustomSelect>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
