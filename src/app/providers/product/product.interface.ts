import { IProduct } from "../../../components/molecules/select-products-redeem/select-products-redeem";

export interface IProductContext {
  selectedProducts: IProduct[];
  toggleProduct: (product: IProduct) => void;
}
