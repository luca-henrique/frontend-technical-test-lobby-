import { z } from "zod";

export const ProductsSchema = z
  .array(
    z
      .object({
        value: z.string().min(1, { message: "Value é obrigatório" }),
        name: z.string().min(1, { message: "Text é obrigatório" }),
      })
      .required()
  )
  .nonempty({ message: "Tags não pode ser vazio" });

export type ProductsSchemaProps = z.infer<typeof ProductsSchema>;
