import { z } from "zod";

const step1Schema = z.array(
  z.object({
    name: z.string(),
    id: z.string(),
  })
);

const step2Schema = z.object({
  fullName: z.string(),
  document: z.string(),
  email: z.string(),
  cep: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
  bairro: z.string(),
  city: z.string(),
  uf: z.string(),
  pais: z.string(),
  tamanho: z.string(),
  hobbie: z.string(),
  birth: z.string(),
  comercialTime: z.string(),
  sorvete: z.string(),
});

export const orderSchema = z.object({
  title: z.string().min(3, "O título deve ter pelo menos 3 caracteres"),
  description: z
    .string()
    .min(10, "A descrição deve ter pelo menos 10 caracteres"),
  additionalItems: z.array(
    z.object({
      name: z.string().min(1, "Nome do item obrigatório"),
      quantity: z.string().min(1, "Quantidade obrigatória"),
    })
  ),
  materials: z.array(
    z.object({
      name: z.string().min(1, "Nome do material obrigatório"),
      quantity: z.string().min(1, "Quantidade obrigatória"),
    })
  ),
  observations: z.string().optional(),
});
