import { useState } from "react";
import styled, { css } from "styled-components";

// Interface
import { IInput } from "../../interfaces/Interface";

export default function Input({
  label,
  value,
  placeholder,
  type = "text",
  required,
  onChange,
  user,
  defaultValue,
  option,
  error,
}: IInput) {
  const [eyeType, setEyeType] = useState(false);

  const [defValue, setDefValue] = useState(defaultValue || "");

  return (
    <StyledInput type={type}>
      {label ? <label className={"inputLabel"}>{label}</label> : null}
      {value ? (
        <input
          className={error ? "On" : ""}
          type={eyeType ? "text" : type}
          value={value}
          {...option}
          placeholder={placeholder || ""}
          required={required}
          onChange={onChange}
        />
      ) : (
        <input
          className={error ? "On" : ""}
          type={eyeType ? "text" : type}
          {...option}
          placeholder={placeholder || ""}
          required={required}
          onChange={onChange}
        />
      )}
      {placeholder === "Parolni kiriting" ? (
        <div className="icon__wrapper">
          <i
            className="icon icon-password-eye"
            onClick={() => setEyeType((p) => !p)}
          ></i>
          <span className={(eyeType ? "On " : "") + "span"}></span>
        </div>
      ) : null}
    </StyledInput>
  );
}

const StyledInput = styled.div<any>`
  position: relative;
  width: 100%;
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

    &.On {
      border: 1px solid #ff0000;
    }

    :focus {
      outline: 1px solid #00b7ff;
    }

    &::placeholder {
      font-size: 14px;
      line-height: 20px;
      color: #8e8ea9;
    }
  }

  .icon__wrapper {
    cursor: pointer;
    position: absolute;
    top: 56%;
    right: 12px;

    i {
      position: relative;
    }

    .span {
      position: absolute;
      top: 7px;
      left: -3px;
      width: 0px;
      height: 2px;
      background-color: #2e2e2e;
      transform: rotate(45deg);
      transition: 0.1s;

      &.On {
        width: 20px;
      }
    }
  }

  ${({ type }) => {
    if (type === "file") {
      return css`
        input {
          padding: 0px;

          ::-webkit-file-upload-button {
            cursor: pointer;
            padding: 8px 16px;
            width: 100%;
            border: none;
            background: #0086ff;
            font-weight: 500;
            line-height: 16px;
            font-size: 14px;
            color: #fff;
          }
        }
      `;
    }
  }}
`;
