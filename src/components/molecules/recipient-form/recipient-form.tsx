import { useFormContext } from "react-hook-form";
import { mock } from "../../../i18n/mock";
import { FormSectionLayout } from "../../layout/form-layout/form-layout";
import { Input } from "../../atoms/input/input";
import { BoxRow } from "../step-3/styled";

export const RecipientForm = () => {
  const {
    recipientForm: { title, fullName, document, email },
  } = mock.form;

  const { control } = useFormContext();

  return (
    <FormSectionLayout title={title}>
      <Input
        label={fullName}
        name="fullName"
        control={control}
        required
        type="text"
      />
      <BoxRow sx={{ display: "flex", flexDirection: "row", gap: "32px" }}>
        <Input
          label={document}
          name="document"
          mask="document"
          control={control}
          required
          type="text"
        />
        <Input
          label={email}
          name="email"
          control={control}
          required
          type="email"
        />
      </BoxRow>
    </FormSectionLayout>
  );
};
