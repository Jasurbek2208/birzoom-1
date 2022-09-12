import styled from "styled-components";

// Interface
import { IInput } from "../../interfaces/Interface";

export default function Input({
  label,
  value,
  placeholder,
  type = "text",
  required,
  onChange,
  inputOn,
  option,
}: IInput) {
  return (
    <StyledInput>
      {label ? <label className={inputOn + "inputLabel"}>{label}</label> : null}
      <input
        type={type}
        value={value}
        {...option}
        placeholder={placeholder || ""}
        required={required}
        onChange={onChange}
      />
    </StyledInput>
  );
}

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  .inputLabel {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #32324d;
  }

  input {
    padding: 10px 16px;
    width: 100%;
    background: #fff;
    border: 1px solid #dcdce4;
    border-radius: 4px;

    :focus {
      outline: 1px solid #00b7ff;
    }

    &::placeholder {
      font-size: 14px;
      line-height: 20px;
      color: #8e8ea9;
    }
  }
`;
