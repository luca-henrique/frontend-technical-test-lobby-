import { useStep } from "../../../app/hook/use-step"
import { Error404 } from "../../molecules/error-404/error-404"
import { Finish } from "../../molecules/finish/finish"
import { Step1 } from "../../molecules/step-1/step-1"
import { Step2 } from "../../molecules/step-2/step-2"
import { Step3 } from "../../molecules/step-3/step-3"

const steps = {
  0: Step1,
  1: Step2,
  2: Step3,
  3: Finish,
  4: Error404
}

export const StepsForm = () => {
  const { step } = useStep()

  const CurrentStep = steps[step]

  return <CurrentStep />
}