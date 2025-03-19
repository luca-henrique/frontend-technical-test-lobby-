import { IProduct } from "../../../components/molecules/step-2/step-2";

export interface IProductContext {
  selectedProducts: IProduct[];
  toggleProduct: (product: IProduct) => void;
}
