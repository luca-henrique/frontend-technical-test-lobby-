import { Box, Typography } from "@mui/material";

// Define or import the toggleProduct function
const toggleProduct = (product: IProduct) => {
  // Implementation of toggleProduct
};
import { IProduct } from "../../molecules/step-2/step-2";
import { CheckProduct } from "../../molecules/check-product/check-product";
import { useState } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";

export interface IProductProps {
  product?: IProduct;
}


type FieldProps = IProduct & {
  id: string
}

export const Product = ({ product }: IProductProps) => {

  const { watch, control } = useFormContext()

  const { selectProductStep } = watch()

  const { append, fields, remove } = useFieldArray({
    control,
    name: "selectProductStep",
  })

  console.log(fields)


  const isChecked = fields.some(
    (p) => p.customer_product_id === (product as IProduct).customer_product_id
  );

  const handleSelect = (product: IProduct) => {
    if (isChecked) {
      remove(product.id)
    } else {
      append(product)
    }

  };

  if (product?.quantity === 0) return;

  return (

    <Box
      border={`0.5px solid ${isChecked ? "#000" : "#D8DCE2"
        }`}
      width={["100%", "calc(50% - 8px)", "calc(33.33% - 8px)"]}
      minHeight={290}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
      p={1.75}
      borderRadius={1.5}
      position="relative"
      sx={{
        cursor: "pointer",
        boxSizing: "border-box",
        img: {
          objectFit: "contain",
          display: "block",
          width: "100%",
          maxWidth: 261,
        },
      }}
      onClick={() => handleSelect(product)}
    >
      <CheckProduct checked={isChecked} control={control} />
      <img src={'https://fakeimg.pl/260x260'} width={260} height={260} alt="text" />
      <Typography component="p" mt={2} fontWeight={600}>
        {product?.name}
      </Typography>
    </Box>

  );
};