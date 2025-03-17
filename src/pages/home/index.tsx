
import { MainContainer } from "../../components/molecules/main-container/main-container"

import { Step1 } from "../../components/molecules/step-1/step-1"
import { Step2 } from "../../components/molecules/step-2/step-2"

import { Step3 } from "../../components/molecules/step-3/step-3"


import { Finish } from "../../components/molecules/finish/finish"
import { Error404 } from "../../components/molecules/error-404/error-404"
import { FormProvider, useForm } from "react-hook-form";



import { zodResolver } from "@hookform/resolvers/zod";
import { formStepsSchema } from "../../schemas/steps-form"

export const Home = () => {

  const methods = useForm({
    resolver: zodResolver(formStepsSchema),
    defaultValues: {
      step: 0,
      fullName: "",
      document: "",
      email: "",
      street: "",
      city: "",
      uf: "",
      country: "",
      complement: "",
      neighborhood: "",
      iceCreamFalvors: "",
      salesTeam: "",
      birthDate: "",
      hobbie: ""
    }
  })


  const { watch } = methods

  const { step } = watch()

  const STEPS_SIZE = 3


  const handleStep = () => {

    const currentStep = step

    const nextStep = step + 1


    if (STEPS_SIZE === step) {
      console.log('finish')
    } else {
      methods.setValue('step', nextStep)
    }
  }

  const backStep = () => {
    const nextStep = step - 1
    methods.setValue('step', nextStep)
  }


  const args = {
    step,
    handleStep,
    backStep,
    ...methods,
  }

  return (
    <FormProvider {...args}>
      {step === 0 ? <Step1 /> : null}
      {step === 1 ? <Step2 /> : null}
      {step === 2 ? <Step3 /> : null}

      {step === 3 ? <Finish /> : null}
      {step === 4 ? <Error404 /> : null}

    </FormProvider>
  )
}


