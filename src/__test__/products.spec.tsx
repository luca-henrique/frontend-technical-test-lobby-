import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi } from "vitest";
import { StepProvider } from "~/app/providers/step/step";
import { ProductProvider } from "~/app/providers/product/product";
import { useRedeem } from "~/app/hook/use-redeem";
import { SelectProductsRedeem } from "~/components/molecules/select-products-redeem/select-products-redeem";
import { mockProducts } from "~/constants/mock-products";



vi.mock("~/app/hook/use-redeem", () => ({
  useRedeem: vi.fn(),
}));

vi.mock("~/app/hook/use-product", () => ({
  useProduct: vi.fn().mockReturnValue({
    toggleProduct: vi.fn(),
    selectedProducts: [],
  }),
}));

const renderWithProviders = (ui: React.ReactNode) => {
  const queryClient = new QueryClient();

  return render(
    <QueryClientProvider client={queryClient}>
      <StepProvider>
        <ProductProvider>{ui}</ProductProvider>
      </StepProvider>
    </QueryClientProvider>
  );
};

describe("Products Component", () => {
  test("Renderiza loading corretamente", () => {
    vi.mocked(useRedeem).mockReturnValue({
      isLoading: true,
      isError: false,
      error: null,
      redeem: null,
    });

    renderWithProviders(<SelectProductsRedeem />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  test("Renderiza erro corretamente", () => {
    vi.mocked(useRedeem).mockReturnValue({
      isLoading: false,
      isError: true,
      error: new Error("Erro ao carregar produtos"),
      redeem: null,
    });

    renderWithProviders(<SelectProductsRedeem />);

    expect(
      screen.getByText("Erro ao carregar produtos: Erro ao carregar produtos")
    ).toBeInTheDocument();
  });

  test("Renderiza os produtos corretamente", async () => {
    vi.mocked(useRedeem).mockReturnValue({
      isLoading: false,
      isError: false,
      error: null,
      redeem: {
        items: mockProducts,
        title: "Empresa Teste",
        logo_url: "",
        welcome_title: "",
        welcome_phrase: "",
        background_color: "",
        button_color: "",
        status: "",
        extra_questions: [],
      },
    });

    renderWithProviders(<SelectProductsRedeem />);

    await waitFor(() => {
      expect(
        screen.getByText("Escolha o seu presente! 🎁")
      ).toBeInTheDocument();
      expect(screen.getByText("Produto 1")).toBeInTheDocument();
      expect(screen.getByText("Produto 2")).toBeInTheDocument();
    });
  });
});
