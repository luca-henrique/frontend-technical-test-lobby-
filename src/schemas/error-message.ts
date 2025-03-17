import { VALIDATION } from "./validations";

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
