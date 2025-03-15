import { Container } from "../../atoms/container/container";
import { Typography } from "../../atoms/typography/typography";

import { mock } from "../../../i18n/mock";
import { Box, styled } from "@mui/material";
import { Input } from "../../atoms/input/input";
import { Select } from "../../atoms/select/select";
import { Copyright } from "../copyright/copyright";
import { useFormContext } from "react-hook-form";
import { FormSectionLayout } from "../../layout/form-layout/form-layout";
import { brazilianStates } from "../../../constants/uf";
import { countries } from "../../../constants/country";
import { sizes } from "../../../constants/sizes";
import { CustomButton } from "../../atoms/button/button";

export const CardForm = styled(Container)(({ theme }) => ({
  backgroundColor: "#fff",
  width: "100%",
  maxWidth: "1000px",
  borderRadius: "20px",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  alignItems: "center",

  [theme.breakpoints.down("mobile")]: {
    maxWidth: "100%",
  },
}));

export const Step3 = () => {
  const {
    form: { title },
    common: { buttonBackStep, buttonNextStep },
  } = mock;

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        flexDirection: "column",
        background: "#EFF6FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 140px",
      }}
    >
      <CardForm maxWidth={false} disableGutters>
        <Box
          height="100%"
          width={"100%"}
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap={"40px"}
        >
          <Typography
            variant="h2"
            fontWeight="600"
            sx={{ fontSize: { mobile: "16px", tablet: "20px" } }}
          >
            {title}
          </Typography>
          <RecipientForm />
          <AddressForm />
          <SizeForm />
          <ExtraQuestionsForm />


        </Box>
        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} width={"100%"} marginBottom={"40px"}>
          <CustomButton>{buttonBackStep}</CustomButton>
          <CustomButton>{buttonNextStep}</CustomButton>
        </Box>
        <Copyright />
      </CardForm>
    </Container>
  );
};

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
      <Box sx={{ display: "flex", flexDirection: "row", gap: "32px" }}>
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
      </Box>
    </FormSectionLayout>
  );
};

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
      <Box sx={{ display: "flex", flexDirection: "row", gap: "32px" }}>
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
      </Box>
      <Box
        flexDirection="row"
        gap="32"
        sx={{ width: "100%", display: "flex", gap: "32px" }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: "32px",
          }}
        >
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
        </Box>
        <Input
          label={neighborhood}
          name="neighborhood"
          control={control}
          required
          type="text"
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "32px",
        }}
      >
        <Input
          label={city}
          name="city"
          control={control}
          required
          type="text"
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: "32px",
          }}
        >
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
        </Box>
      </Box>
    </FormSectionLayout>
  );
};

export const SizeForm = () => {
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

export const ExtraQuestionsForm = () => {
  const {
    extraQuestions: { title, hobbie, birthDate, iceCreamFalvors, salesTeam },
  } = mock.form;

  const { control } = useFormContext();

  return (
    <FormSectionLayout title={title}>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "32px" }}>
        <Input label={hobbie} name="hobbie" control={control} />
        <Input label={salesTeam} name="salesTeam" control={control} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "32px",
        }}
      >
        <Input label={birthDate} name="birthDate" control={control} />
        <Select
          label={iceCreamFalvors}
          name="iceCreamFalvors"
          control={control}
          options={[]}
        />
      </Box>
    </FormSectionLayout>
  );
};
