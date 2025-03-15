import { useFormContext } from "react-hook-form";
import { mock } from "../../../i18n/mock";
import { FormSectionLayout } from "../../layout/form-layout/form-layout";
import { BoxRow } from "../step-3/styled";
import { Input } from "../../atoms/input/input";
import { Select } from "../../atoms/select/select";

export const ExtraQuestionForm = () => {
  const {
    extraQuestions: { title, hobbie, birthDate, iceCreamFalvors, salesTeam },
  } = mock.form;

  const { control } = useFormContext();

  return (
    <FormSectionLayout title={title}>
      <BoxRow>
        <Input label={hobbie} name="hobbie" control={control} />
        <Input label={salesTeam} name="salesTeam" control={control} />
      </BoxRow>
      <BoxRow
      >
        <Input label={birthDate} name="birthDate" control={control} />
        <Select
          label={iceCreamFalvors}
          name="iceCreamFalvors"
          control={control}
          options={[]}
        />
      </BoxRow>
    </FormSectionLayout>
  );
};