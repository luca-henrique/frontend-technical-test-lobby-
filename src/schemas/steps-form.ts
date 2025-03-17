import { z } from "zod";
import { validateDocument } from "../utils/validate-document";

export const VALIDATION = {
  DOCUMENT: {
    MIN_LENGTH: 11,
    MAX_LENGTH: 14,
  },
  ADDRESS: {
    CEP_LENGTH: 8,
    UF_LENGTH: 2,
    COMPLEMENT_MAX_LENGTH: 50,
  },
};

export const MIN_DOCUMENT_SIZE = 11;
export const MAX_DOCUMENT_SIZE = 14;

export const errorMessages = {
  document: {
    invalid: "CPF/CNPJ inválido",
    minLength: `O CPF/CNPJ deve ter pelo menos ${VALIDATION.DOCUMENT.MIN_LENGTH} caracteres`,
    maxLength: `O CPF/CNPJ deve ter no máximo ${VALIDATION.DOCUMENT.MAX_LENGTH} caracteres`,
  },
  address: {
    cep: {
      required: "O CEP é obrigatório",
      invalid: "CEP inválido",
      minLength: `O CEP deve ter ${VALIDATION.ADDRESS.CEP_LENGTH} caracteres`,
    },
    street: {
      required: "O endereço é obrigatório",
    },
    number: {
      required: "O número é obrigatório",
    },
    complement: {
      maxLength: `O complemento deve ter no máximo ${VALIDATION.ADDRESS.COMPLEMENT_MAX_LENGTH} caracteres`,
    },
    bairro: {
      required: "O bairro é obrigatório",
    },
    city: {
      required: "A cidade é obrigatória",
    },
    uf: {
      required: "O estado (UF) é obrigatório",
      invalid: `UF inválida, deve conter ${VALIDATION.ADDRESS.UF_LENGTH} caracteres`,
    },
    country: {
      required: "O país é obrigatório",
    },
  },
};

export const formStepsSchema = z.object({
  step: z.number(),
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
