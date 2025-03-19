import { useRedeem } from "../../../app/hook/use-redeem"
import { useStep } from "../../../app/hook/use-step"
import { ErrorRedeem } from "../../molecules/error-redeem/error-redeem"


import { GiftSuccessRedeemed } from "../../molecules/gift-success-redeemed/gift-success-redeemed"


import { IntroRedeem } from "../../molecules/intro-redeem/intro-redeem"
import { SelectProductsRedeem } from "../../molecules/select-products-redeem/select-products-redeem"
import { DetailsPersonRedeem } from "../../molecules/details-person-redeem/details-person-redeem"
import { useMemo } from "react"

const redeemSteps: Record<number, React.FC> = {
  0: IntroRedeem,
  1: SelectProductsRedeem,
  2: DetailsPersonRedeem,
  3: GiftSuccessRedeemed,
  4: ErrorRedeem,
};

export const StepsForm = () => {
  const { step } = useStep()
  const { redeem } = useRedeem()

  const CurrentStep = useMemo(() => redeemSteps[step] ?? ErrorRedeem, [step]);

  if (!redeem || redeem.status !== "ACTIVE") {
    return <ErrorRedeem />;
  }

  return <CurrentStep />
}