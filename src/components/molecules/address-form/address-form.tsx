import { useFormContext } from "react-hook-form";
import { mock } from "../../../i18n/mock";
import { FormSectionLayout } from "../../layout/form-layout/form-layout";
import { BoxRow } from "../details-person-redeem/styled";
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

  const { control, formState: { errors } } = useFormContext();

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
          error={!!errors?.cep?.message}
          helperText={errors?.cep?.message}

        />
        <Input
          label={street}
          name="street"
          control={control}
          required
          type="text"
          error={!!errors?.street?.message}
          helperText={errors?.street?.message}
        />
      </BoxRow>
      <BoxRow>
        <BoxRow sx={{ flexDirection: { mobile: "row", tablet: "row" } }}>
          <Input
            label={number}
            name="number"
            control={control}
            required
            type="text"
            error={!!errors?.number?.message}
            helperText={errors?.number?.message}
          />
          <Input
            label={complement}
            name="complement"
            control={control}
            type="text"
            error={!!errors?.complement?.message}
            helperText={errors?.complement?.message}
          />
        </BoxRow>
        <Input
          label={neighborhood}
          name="neighborhood"
          control={control}
          required
          type="text"
          error={!!errors?.neighborhood?.message}
          helperText={errors?.neighborhood?.message}
        />
      </BoxRow>

      <BoxRow>
        <Input
          label={city}
          name="city"
          control={control}
          required
          type="text"
          error={!!errors?.city?.message}
          helperText={errors?.city?.message}
        />
        <BoxRow width={"100%"} sx={{ flexDirection: { mobile: "row", tablet: "row" } }}>
          <Select
            label={state}
            name="uf"
            control={control}
            required
            options={brazilianStates}
            error={!!errors?.uf?.message}
            helperText={errors?.uf?.message}
          />
          <Select
            label={country}
            name="country"
            control={control}
            required
            options={countries}
            error={!!errors?.country?.message}
            helperText={errors?.country?.message}
          />
        </BoxRow>
      </BoxRow>
    </FormSectionLayout>
  );
};
