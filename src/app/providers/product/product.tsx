import { createContext, useState, ReactNode } from "react";
import { IProductContext } from "./product.interface";
import { IProduct } from "../../../components/molecules/select-products-redeem/select-products-redeem";


const ProductContext = createContext<IProductContext | undefined>(undefined);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);

  const toggleProduct = (product: IProduct) => {
    setSelectedProducts((prev) =>
      prev.some((p) => p.customer_product_id === product.customer_product_id)
        ? prev.filter(
          (p) => p.customer_product_id !== product.customer_product_id
        )
        : [...prev, product]
    );
  };

  return (
    <ProductContext.Provider value={{ selectedProducts, toggleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
