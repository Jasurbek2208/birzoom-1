import { ChangeEventHandler } from "react";

// Input interface
export interface IInput {
  inputOn?: string;
  label?: string;
  option?: {};
  value?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  defaultValue?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

// Checkbox interface
export interface ICheckbox {
  label: string;
  required: boolean;
}

// Button interface
export interface IButton {
  type: "button" | "submit";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  closeBtn?: boolean;
  btnSmall?: boolean;
  token?: string | null;
}

// Select
export interface ISelect {
  list: String[];
  label?: string;
  placeholder: string;
  option?: {};
}

export interface ILoginContext {
  isAuth?: boolean;
  setIsAuth?: any;
}

// db Users
export interface IUsers {
  id: string;
  ism: string;
  familiya: string;
  manzil: string;
  telefonRaqam: string;
  parol: string;
  tugilganSana: string;
  tgUsername: string;
  kartaRaqam: number;
  shior: string;
  zoomLink: string;
  darsOtishDarajasi: any;
  jinsi: string;
  faoliyatTuri: string;
  fani: string;
  tilDarajasi: string;
  holati: string;
  img: string;
  royxatdanOtganSana: string;
}
