import { StepProvider } from "../../app/providers/step/step"
import { StepsForm } from "../../components/organisms/steps/steps"

export const Home = () => {
  return (
    <StepProvider>
      <StepsForm />
    </StepProvider>
  )
}


