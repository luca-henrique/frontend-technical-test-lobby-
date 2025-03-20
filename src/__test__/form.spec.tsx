import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { vi } from "vitest";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RedeemProvider } from "~/app/providers/redeem/redeem";
import { StepProvider } from "~/app/providers/step/step";
import { ProductProvider } from "~/app/providers/product/product";
import { DetailsPersonRedeem } from "~/components/molecules/details-person-redeem/details-person-redeem";
import { fetchAddressByCep } from "~/service/cep";

vi.mock("~/service/cep", async () => ({
  fetchAddressByCep: vi.fn(),
}));

vi.mocked(fetchAddressByCep).mockResolvedValueOnce({
  street: "Rua Suzana Cortez Balreira",
  neighborhood: "São Gonçalo",
  city: "Pelotas",
  state: "RS",
});

const queryClient = new QueryClient();

const renderComponent = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <RedeemProvider>
        <StepProvider>
          <ProductProvider>
            <DetailsPersonRedeem />
          </ProductProvider>
        </StepProvider>
      </RedeemProvider>
    </QueryClientProvider>
  );
};

describe("Details Redeem Component", () => {
  test("Renderiza corretamente os campos do formulário", () => {
    renderComponent();

    expect(screen.getByLabelText(/Nome completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CPF ou CNPJ/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CEP/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Rua/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Bairro/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Cidade/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Estado/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/País/i)).toBeInTheDocument();
  });

  test("Preenche e formata corretamente o CEP", async () => {
    vi.mocked(fetchAddressByCep).mockResolvedValue({
      street: "Rua Suzana Cortez Balreira",
      neighborhood: "São Gonçalo",
      city: "Pelotas",
      state: "RS",
    });

    renderComponent();

    const cepInput = screen.getByLabelText(/CEP/i);
    fireEvent.change(cepInput, { target: { value: "96.075-160" } });

    await waitFor(() =>
      expect(fetchAddressByCep).toHaveBeenCalledWith("96.075-160")
    );

    expect(
      screen.getByDisplayValue("Rua Suzana Cortez Balreira")
    ).toBeInTheDocument();
  });

  test("Submete os dados corretamente", async () => {
    const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => { });

    renderComponent();

    fireEvent.change(screen.getByLabelText(/Nome completo/i), {
      target: { value: "João da Silva" },
    });

    fireEvent.change(screen.getByLabelText(/CPF ou CNPJ/i), {
      target: { value: "123.456.789-09" },
    });

    fireEvent.change(screen.getByLabelText(/E-mail/i), {
      target: { value: "joao@email.com" },
    });

    fireEvent.change(screen.getByLabelText(/CEP/i), {
      target: { value: "96.075-160" },
    });

    fireEvent.change(screen.getByLabelText(/Rua/i), {
      target: { value: "Rua Suzana Cortez Balreira" },
    });

    fireEvent.click(screen.getByText(/Continuar/i));

    await waitFor(() => {
      expect(consoleLogSpy).not.toHaveBeenCalledWith(
        expect.stringMatching(/Error:/)
      );
    });

    consoleLogSpy.mockRestore();
  });
});
