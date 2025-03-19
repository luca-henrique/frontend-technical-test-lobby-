import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { CardForm } from "../details-person-redeem/styled";
import { mock } from "../../../i18n/mock";
import { CustomButton } from "../../atoms/button/button";
import { Product } from "../../organisms/product/product";
import { Copyright } from "../copyright/copyright";
import { useRedeem } from "../../../app/hook/use-redeem";
import { useStep } from "../../../app/hook/use-step";
import { useProduct } from "../../../app/hook/use-product";

const IS_EMPTY = 0

export interface IProduct {
  customer_product_id: string;
  name: string;
  quantity: number;
  optional: boolean;
  image_url: string;
  sizes_grid: {
    name: string;
  } | null;
  sizes: Array<{
    id: string;
    name: string;
  }>;
}


export const SelectProductsRedeem = () => {

  const { redeem, isLoading, isError, error } = useRedeem();
  const { nextStep, previousStep } = useStep();

  const {
    step2: { title },
    common: { buttonBackStep, buttonNextStep },
  } = mock;

  const { selectedProducts } = useProduct()

  const isNotSelectedProducts = selectedProducts.length <= IS_EMPTY

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        flexDirection: "column",
        background: "#EFF6FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { mobile: "40px 20px", tablet: "100px 140px" },
      }}
    >
      <CardForm maxWidth={false} disableGutters>
        {(() => {
          if (isLoading) {
            return <CircularProgress />;
          }

          if (isError) {
            return (
              <div>
                Erro ao carregar produtos:{" "}
                {error instanceof Error ? error.message : "Erro desconhecido"}
              </div>
            );
          }
          return (
            <>
              <Typography
                variant="h2"
                fontWeight="600"
                sx={{ fontSize: { mobile: "16px", tablet: "20px" } }}
              >
                {title}
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                gap={1.5}
                pt={2}
                pb={4}
              >
                {redeem?.items.map((item) => {
                  return (
                    <Product
                      key={item.customer_product_id}
                      product={item}
                    />
                  );
                })}
              </Box>
            </>
          );
        })()}
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          width={"100%"}
          marginBottom={"40px"}
        >
          <CustomButton variant="outlined" onClick={() => previousStep()}>
            {buttonBackStep}
          </CustomButton>
          <CustomButton disabled={isNotSelectedProducts} onClick={() => nextStep()}>{buttonNextStep}</CustomButton>
        </Box>
        <Copyright />
      </CardForm>
    </Container>
  );
};
