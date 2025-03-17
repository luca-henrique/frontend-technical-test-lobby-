

import { Step1 } from "../../components/molecules/step-1/step-1"
import { Step2 } from "../../components/molecules/step-2/step-2"

import { Step3 } from "../../components/molecules/step-3/step-3"


import { Finish } from "../../components/molecules/finish/finish"
import { Error404 } from "../../components/molecules/error-404/error-404"
import { FormProvider, useForm } from "react-hook-form";



import { zodResolver } from "@hookform/resolvers/zod";
import { RegistrationFormSchemaProps, RegistrationFormTypeEnum, RescuePresentSchema } from "../../schemas/steps-form"

export const Home = () => {

  const methods = useForm<RegistrationFormSchemaProps>({
    //@ts-expect-error
    resolver: zodResolver(RescuePresentSchema),
    defaultValues: {
      step: RegistrationFormTypeEnum.StartStep,
    },
  })


  const { watch, getValues, handleSubmit, formState: { errors } } = methods

  console.log(errors)

  const { step } = watch()

  const formTypeIsPersonalInformation = step === RegistrationFormTypeEnum.StartStep
  const formTypeIsShippingAddress = step === RegistrationFormTypeEnum.SelectProductStep
  const formTypeIsPaymentInformation = step === RegistrationFormTypeEnum.DatailClientProductStep
  const isFinishStep = step === RegistrationFormTypeEnum.FinishStep
  const isErrorStep = step === RegistrationFormTypeEnum.ErrorStep

  function setFormType(formType: RegistrationFormTypeEnum) {
    methods.setValue('step', formType)
  }

  function handleNextFormType() {
    switch (step) {
      case 'startStep':
        setFormType(RegistrationFormTypeEnum.SelectProductStep)
        break
      case RegistrationFormTypeEnum.SelectProductStep:
        setFormType(RegistrationFormTypeEnum.DatailClientProductStep)
        break
      case RegistrationFormTypeEnum.DatailClientProductStep:
        setFormType(RegistrationFormTypeEnum.FinishStep)
        console.log('submit', getValues())

        break
    }
  }

  function handleBackFormType() {
    switch (step) {
      case RegistrationFormTypeEnum.StartStep:
        setFormType(RegistrationFormTypeEnum.SelectProductStep)
        break
      case RegistrationFormTypeEnum.SelectProductStep:
        setFormType(RegistrationFormTypeEnum.DatailClientProductStep)
        break
      case RegistrationFormTypeEnum.DatailClientProductStep:
        setFormType(RegistrationFormTypeEnum.FinishStep)
        console.log('submit', getValues())
        break
    }
  }

  const args = {
    step,
    handleNextFormType,
    handleBackFormType,
    ...methods,
  }

  return (
    <FormProvider {...args}>
      <form onSubmit={handleSubmit(handleNextFormType)}>
        {formTypeIsPersonalInformation ? <Step1 /> : null}
        {formTypeIsShippingAddress ? <Step2 /> : null}
        {formTypeIsPaymentInformation ? <Step3 /> : null}

        {isFinishStep ? <Finish /> : null}
        {isErrorStep ? <Error404 /> : null}
      </form>
    </FormProvider>
  )
}


