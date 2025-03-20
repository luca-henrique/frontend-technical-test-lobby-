import { renderHook, act } from "@testing-library/react";
import { useProduct } from "~/app/hook/use-product";
import { ProductProvider } from "~/app/providers/product/product";
import { mockProducts } from "~/constants/mock-products";

describe("ProductProvider", () => {
  test("Adiciona e remove produtos corretamente", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ProductProvider>{children}</ProductProvider>
    );

    const { result } = renderHook(() => useProduct(), { wrapper });

    act(() => {
      result.current.toggleProduct(mockProducts[0]);
    });

    expect(result.current.selectedProducts).toHaveLength(1);

    act(() => {
      result.current.toggleProduct(mockProducts[0]);
    });

    expect(result.current.selectedProducts).toHaveLength(0);
  });
});
