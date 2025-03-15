import { useFormContext } from "react-hook-form";
import { mock } from "../../../i18n/mock";
import { FormSectionLayout } from "../../layout/form-layout/form-layout";
import { Box } from "@mui/material";
import { Select } from "../../atoms/select/select";
import { sizes } from "../../../constants/sizes";


export const ShirtSizeForm = () => {
  const {
    size: { title, shirt },
  } = mock.form;

  const { control } = useFormContext();

  return (
    <FormSectionLayout title={title}>
      <Box
        sx={{
          width: "48%",
        }}
      >
        <Select
          label={shirt}
          name="country"
          control={control}
          required
          options={sizes}
        />
      </Box>
    </FormSectionLayout>
  );
};