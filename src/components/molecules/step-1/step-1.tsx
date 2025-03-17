import { mock } from "../../../i18n/mock"
import { CardContainer } from "../../organisms/card-container/card-container"
import { CustomButton as Button } from "../../atoms/button/button"
import { Container } from "@mui/material"
import { useFormContext } from "react-hook-form"


export const Step1 = () => {

  const { handleStep } = useFormContext()

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
        height: "100vh",
        padding: { mobile: "40px 20px", tablet: "100px 140px" },
      }}
    >
      <CardContainer {...mock.intro}>
        <Button variant="contained" disableElevation onClick={() => handleStep()}>Começar!</Button>
      </CardContainer>
    </Container>
  )
}