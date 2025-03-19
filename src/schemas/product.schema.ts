import { z } from "zod";

export const productSchema = z.object({
  customer_product_id: z.string().min(1, "ID do produto é obrigatório"),
  name: z.string().min(1, "Nome do produto é obrigatório"),
  quantity: z
    .number()
    .int()
    .positive("A quantidade deve ser um número inteiro positivo"),
  optional: z.boolean(),
  image_url: z.string().url("URL da imagem inválida"),
  sizes_grid: z
    .object({
      name: z.string().min(1, "Nome da grade de tamanhos é obrigatório"),
    })
    .nullable(),
  sizes: z
    .array(
      z.object({
        id: z.string().min(1, "ID do tamanho é obrigatório"),
        name: z.string().min(1, "Nome do tamanho é obrigatório"),
      })
    )
    .min(1, "Pelo menos um tamanho deve ser informado"),
});

export const ProductsSchema = z
  .array(z.any())
  .nonempty({ message: "Tags não pode ser vazio" });

export type ProductsSchemaProps = z.infer<typeof ProductsSchema>;
