import { z } from "zod";
import { validateDocument } from "../utils/validate-document";
import { errorMessages } from "./error-message";
import {
  MIN_DOCUMENT_SIZE,
  MAX_DOCUMENT_SIZE,
  VALIDATION,
} from "./validations";

export const DetailUserFormSchema = z.object({
  fullName: z.string(),
  document: z
    .string()
    .min(MIN_DOCUMENT_SIZE, errorMessages.document.minLength)
    .max(MAX_DOCUMENT_SIZE, errorMessages.document.maxLength)
    .refine((value) => validateDocument(value), {
      message: errorMessages.document.invalid,
    }),
  email: z.string().email(),
  cep: z
    .string()
    .min(VALIDATION.ADDRESS.CEP_LENGTH, errorMessages.address.cep.minLength)
    .regex(/^\d{5}-?\d{3}$/, errorMessages.address.cep.invalid),
  street: z.string().min(1, errorMessages.address.street.required),
  number: z.string().min(1, errorMessages.address.number.required),
  complement: z
    .string()
    .max(
      VALIDATION.ADDRESS.COMPLEMENT_MAX_LENGTH,
      errorMessages.address.complement.maxLength
    )
    .optional(),
  neighborhood: z.string().min(1, errorMessages.address.bairro.required),
  city: z.string().min(1, errorMessages.address.city.required),
  uf: z
    .string()
    .length(VALIDATION.ADDRESS.UF_LENGTH, errorMessages.address.uf.invalid)
    .regex(/^[A-Z]{2}$/, errorMessages.address.uf.invalid),
  country: z.string().min(1, errorMessages.address.country.required),
  size: z.string(),
  hobbie: z.string(),
  birthDate: z.string(),
  salesTeam: z.string(),
  iceCreamFalvors: z.string(),
});

export type FormSchemaProps = z.infer<typeof DetailUserFormSchema>;
