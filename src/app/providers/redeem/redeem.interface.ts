import { IProduct } from "../../../components/molecules/step-2/step-2";

export interface IRedeem {
  id?: string | undefined;
  logo_url: string;
  welcome_title: string;
  welcome_phrase: string;
  title: string;
  background_color: string;
  button_color: string;
  status: string;
  items: IProduct[];
  extra_questions: IExtraQuestions[];
}

export interface IRedeemContext {
  redeem: IRedeem | null;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

export interface IExtraQuestions {
  id: number;
  answer_type: string;
  options: string[];
  position: number;
  question: string;
}

export interface IFormData {
  full_name: string;
  cpf_cnpj: string;
  email: string;
  cep: string;
  street: string;
  number: number;
  complement?: string | null;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  sizes?: string;
  extra_question_responses?: Array<{
    extra_question_id?: number;
    answer?: string;
  }>;
}

interface IExtraQuestionResponse {
  extra_question_id: number;
  answer: string;
}

interface IItem {
  customer_product_id: string;
  size_name: string;
}

export interface IRedeemerData {
  id: string;
  redeemer_name: string;
  redeemer_email: string;
  redeemer_document_number: string;
  redeemer_zipcode: string;
  redeemer_street: string;
  redeemer_number: string;
  redeemer_complement: string;
  redeemer_neighborhood: string;
  redeemer_city: string;
  redeemer_state: string;
  redeemer_country: string;
  extra_question_responses?: IExtraQuestionResponse[];
  items: IItem[];
}
