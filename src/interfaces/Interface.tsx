import { ChangeEventHandler } from "react";

// Input interface
export interface IInput {
  inputOn?: string;
  label?: string;
  option?: {};
  value: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
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
}

export interface ILoginContext {
  isAuth?: boolean;
  setIsAuth?: Function;
}
