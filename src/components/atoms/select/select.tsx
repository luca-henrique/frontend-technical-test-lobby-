import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select as CustomSelect, SelectProps } from "@mui/material";
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
} & SelectProps;

export const Select = ({
  label,
  control,
  name,
  options,
}: SelectCustomProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl variant="standard" fullWidth>
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <CustomSelect
            labelId={`${name}-label`} // Associando o InputLabel ao Select
            value={field.value ?? ""}
            onChange={field.onChange}
            id={name}
            label={label}
            fullWidth
          >
            {options.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </CustomSelect>
        </FormControl>
      )}
    />
  );
};
