import { z } from "zod";

export const personalInformationSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "Name is too long"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name is too long"),
  phone: z.string().min(1, "Phone is required").max(20, "Phone is invalid"),
});

export type PersonalInformationFormSchemaProps = z.infer<
  typeof personalInformationSchema
>;

export const shippingAddressSchema = z.object({
  address: z
    .string()
    .min(1, "Address is required")
    .max(50, "Address is too long"),
  city: z.string().min(1, "City is required").max(50, "City is too long"),
  state: z.string().min(1, "State is required").max(50, "State is too long"),
  zipCode: z
    .string()
    .min(1, "Zip code is required")
    .max(50, "Zip code is too long"),
});

export type ShippingAddressFormSchemaProps = z.infer<
  typeof shippingAddressSchema
>;

export const paymentInformationSchema = z.object({
  cardNumber: z
    .string()
    .min(1, "Card number is required")
    .max(19, "Card number is too long"),
  cardholderName: z
    .string()
    .min(1, "Cardholder name is required")
    .max(50, "Cardholder name is too long"),
  expirationDate: z
    .string()
    .min(1, "Expiration date is required")
    .max(50, "Expiration date is too long"),
  cvv: z.string().min(1, "CVV is required").max(3, "CVV is invalid"),
});

export type PaymentInformationFormSchemaProps = z.infer<
  typeof paymentInformationSchema
>;

export enum RegistrationFormTypeEnum {
  PersonalInformation = "personalInformation",
  ShippingAddress = "shippingAddress",
  PaymentInformation = "paymentInformation",
}

export const registrationFormSchema = z.discriminatedUnion("formType", [
  z.object({
    formType: z.literal(RegistrationFormTypeEnum.PersonalInformation),
    personalInformation: personalInformationSchema,
  }),
  z.object({
    formType: z.literal(RegistrationFormTypeEnum.ShippingAddress),
    shippingAddress: shippingAddressSchema,
  }),
  z.object({
    formType: z.literal(RegistrationFormTypeEnum.PaymentInformation),
    paymentInformation: paymentInformationSchema,
  }),
]);

export type RegistrationFormSchemaProps = {
  formType: RegistrationFormTypeEnum;
  personalInformation: PersonalInformationFormSchemaProps;
  shippingAddress: ShippingAddressFormSchemaProps;
  paymentInformation: PaymentInformationFormSchemaProps;
};
