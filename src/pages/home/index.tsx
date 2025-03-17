
import { MainContainer } from "../../components/molecules/main-container/main-container"

import { Step1 } from "../../components/molecules/step-1/step-1"
import { Step2 } from "../../components/molecules/step-2/step-2"

import { Step3 } from "../../components/molecules/step-3/step-3"


import { Finish } from "../../components/molecules/finish/finish"
import { Error404 } from "../../components/molecules/error-404/error-404"
import { FormProvider, useForm } from "react-hook-form";

export const Home = () => {

  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <Step2 />
    </FormProvider>
  )
}


