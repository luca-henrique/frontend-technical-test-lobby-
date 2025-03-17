import { z } from "zod";

import { ProductsSchema, ProductsSchemaProps } from "./product.schema";
import { DetailUserFormSchema, FormSchemaProps } from "./detail-user.schema";

export enum RegistrationFormTypeEnum {
  StartStep = "startStep",
  SelectProductStep = "selectProductStep",
  DatailClientProductStep = "detailClientProductStep",
  FinishStep = "finishStep",
  ErrorStep = "errorStep",
}

export const RescuePresentSchema = z.discriminatedUnion("step", [
  z.object({
    step: z.literal(RegistrationFormTypeEnum.StartStep),
  }),
  z.object({
    step: z.literal(RegistrationFormTypeEnum.SelectProductStep),
    products: ProductsSchema,
  }),
  z.object({
    step: z.literal(RegistrationFormTypeEnum.DatailClientProductStep),
    form: DetailUserFormSchema,
  }),
  z.object({
    step: z.literal(RegistrationFormTypeEnum.FinishStep),
  }),
  z.object({
    step: z.literal(RegistrationFormTypeEnum.ErrorStep),
  }),
]);

export type RegistrationFormSchemaProps = {
  step: RegistrationFormTypeEnum;
  startStep: any;
  selectProductStep: ProductsSchemaProps;
  detailClientProductStep: FormSchemaProps;
  errorStep: any;
  finishStep: any;
};
