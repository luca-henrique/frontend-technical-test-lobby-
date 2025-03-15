import { useFormContext } from "react-hook-form";
import { mock } from "../../../i18n/mock";
import { FormSectionLayout } from "../../layout/form-layout/form-layout";
import { BoxRow } from "../step-3/styled";
import { Input } from "../../atoms/input/input";
import { Select } from "../../atoms/select/select";
import { brazilianStates } from "../../../constants/uf";
import { countries } from "../../../constants/country";

export const AddressForm = () => {
  const {
    address: {
      title,
      cep,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      country,
    },
  } = mock.form;

  const { control } = useFormContext();

  return (
    <FormSectionLayout title={title}>
      <BoxRow>
        <Input
          mask="cep"
          label={cep}
          name="cep"
          control={control}
          required
          type="text"
        />
        <Input
          label={street}
          name="street"
          control={control}
          required
          type="text"
        />
      </BoxRow>
      <BoxRow>
        <BoxRow>
          <Input
            label={number}
            name="number"
            control={control}
            required
            type="text"
          />
          <Input
            label={complement}
            name="complement"
            control={control}
            type="text"
          />
        </BoxRow>
        <Input
          label={neighborhood}
          name="neighborhood"
          control={control}
          required
          type="text"
        />
      </BoxRow>

      <BoxRow>
        <Input
          label={city}
          name="city"
          control={control}
          required
          type="text"
        />
        <BoxRow width={"100%"}>
          <Select
            label={state}
            name="uf"
            control={control}
            required
            options={brazilianStates}
          />
          <Select
            label={country}
            name="country"
            control={control}
            required
            options={countries}
          />
        </BoxRow>
      </BoxRow>
    </FormSectionLayout>
  );
};
