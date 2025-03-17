import { Container } from "../../atoms/container/container";
import { Typography } from "../../atoms/typography/typography";

import { mock } from "../../../i18n/mock";
import { Box } from "@mui/material";

import { Copyright } from "../copyright/copyright";

import { CustomButton } from "../../atoms/button/button";
import { RecipientForm } from "../recipient-form/recipient-form";
import { AddressForm } from "../address-form/address-form";
import { ShirtSizeForm } from "../shirt-size-form/shirt-size-form";
import { ExtraQuestionForm } from "../extra-question-form/extra-question-form";
import { CardForm } from "./styled";
import { useFormContext } from "react-hook-form";

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
        padding: { mobile: "40px 20px", tablet: "100px 140px" },
      }}
    >
      <CardForm maxWidth={false} disableGutters>
        <Box
          height="100%"
          width="100%"
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap="40px"
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
          <ShirtSizeForm />
          <ExtraQuestionForm />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          width={"100%"}
          marginBottom={"40px"}
        >
          <CustomButton variant="outlined" onClick={() => handleBackFormType()}>{buttonBackStep}</CustomButton>
          <CustomButton type="submit" >{buttonNextStep}</CustomButton>
        </Box>
        <Copyright />
      </CardForm>
    </Container>
  );
};
