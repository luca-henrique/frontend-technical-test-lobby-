import { Box, CircularProgress, Container, Typography } from "@mui/material"
import { CardForm } from "../step-3/styled"
import { mock } from "../../../i18n/mock";
import { CustomButton } from "../../atoms/button/button";
import { Product } from "../../organisms/product/product";
import { Copyright } from "../copyright/copyright";

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

const products: IProduct[] = [
  {
    customer_product_id: "prod-001",
    name: "Camiseta Preta",
    quantity: 10,
    optional: false,
    image_url: "https://images.unsplash.com/photo-1537256133192-84bf2f1e3a99?w=800",
    sizes_grid: { name: "Padrão" },
    sizes: [
      { id: "size-001", name: "P" },
      { id: "size-002", name: "M" },
      { id: "size-003", name: "G" }
    ]
  },
  {
    customer_product_id: "prod-002",
    name: "Tênis Esportivo",
    quantity: 5,
    optional: true,
    image_url: "https://images.unsplash.com/photo-1595341928628-7b8ef3d70a15?w=800",
    sizes_grid: { name: "Numeração BR" },
    sizes: [
      { id: "size-004", name: "38" },
      { id: "size-005", name: "40" },
      { id: "size-006", name: "42" }
    ]
  },
  {
    customer_product_id: "prod-003",
    name: "Boné Azul",
    quantity: 8,
    optional: false,
    image_url: "https://images.unsplash.com/photo-1626173903052-38e6f8178137?w=800",
    sizes_grid: null,
    sizes: [
      { id: "size-007", name: "Único" }
    ]
  },
  {
    customer_product_id: "prod-004",
    name: "Jaqueta Jeans",
    quantity: 12,
    optional: false,
    image_url: "https://images.unsplash.com/photo-1604014237744-3d04efc7f5c9?w=800",
    sizes_grid: { name: "Padrão" },
    sizes: [
      { id: "size-008", name: "P" },
      { id: "size-009", name: "M" },
      { id: "size-010", name: "G" }
    ]
  },
  {
    customer_product_id: "prod-005",
    name: "Mochila Casual",
    quantity: 20,
    optional: true,
    image_url: "https://images.unsplash.com/photo-1520374692432-8711e3109797?w=800",
    sizes_grid: null,
    sizes: [
      { id: "size-011", name: "Único" }
    ]
  },
  {
    customer_product_id: "prod-006",
    name: "Óculos de Sol",
    quantity: 15,
    optional: true,
    image_url: "https://images.unsplash.com/photo-1536766768597-00f5b20d3307?w=800",
    sizes_grid: null,
    sizes: [
      { id: "size-012", name: "Único" }
    ]
  },
  {
    customer_product_id: "prod-007",
    name: "Relógio Digital",
    quantity: 7,
    optional: false,
    image_url: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=800",
    sizes_grid: null,
    sizes: [
      { id: "size-013", name: "Único" }
    ]
  },
  {
    customer_product_id: "prod-008",
    name: "Carteira de Couro",
    quantity: 25,
    optional: false,
    image_url: "https://images.unsplash.com/photo-1622447563112-85a1b65ae8ce?w=800",
    sizes_grid: null,
    sizes: [
      { id: "size-014", name: "Único" }
    ]
  },
  {
    customer_product_id: "prod-009",
    name: "Calça Jeans Slim",
    quantity: 9,
    optional: false,
    image_url: "https://images.unsplash.com/photo-1519397651019-5517f6c6ce6a?w=800",
    sizes_grid: { name: "Padrão" },
    sizes: [
      { id: "size-015", name: "38" },
      { id: "size-016", name: "40" },
      { id: "size-017", name: "42" }
    ]
  }
];



export const Step2 = () => {

  const {
    step2: { title },
    common: { buttonBackStep, buttonNextStep },
  } = mock;

  const isLoading = false;
  const isError = false

  const error: Error = new Error()

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
          return (<>

            <Typography
              variant="h2"
              fontWeight="600"
              sx={{ fontSize: { mobile: "16px", tablet: "20px" } }}
            >
              {title}
            </Typography>
            <Box display="flex"
              justifyContent="space-between"
              flexWrap="wrap"
              gap={1.5}
              pt={2}
              pb={4}>

              {products.map((item) => {
                return <Product key={item.customer_product_id} product={item} />;
              })}

            </Box>
          </>
          )
        })()}
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          width={"100%"}
          marginBottom={"40px"}
        >
          <CustomButton variant="outlined">{buttonBackStep}</CustomButton>
          <CustomButton >{buttonNextStep}</CustomButton>
        </Box>
        <Copyright />
      </CardForm>
    </Container>
  )
}