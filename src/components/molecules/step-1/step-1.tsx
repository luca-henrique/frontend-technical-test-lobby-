import { mock } from "../../../i18n/mock"
import { CardContainer } from "../../organisms/card-container/card-container"
import { CustomButton as Button } from "../../atoms/button/button"


export const Step1 = () => {
  return (
    <CardContainer {...mock.intro}>
      <Button variant="contained" disableElevation>Começar!</Button>
    </CardContainer>
  )
}