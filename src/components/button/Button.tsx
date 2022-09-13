import styled, { css } from "styled-components";

// Interface
import { IButton } from "../../interfaces/Interface";

export default function Button({
  children,
  onClick,
  type,
  btnSmall,
  closeBtn,
}: IButton) {
  return (
    <StyledButton btnSmall={btnSmall} closeBtn={closeBtn}>
      <button className="button" type={type} onClick={onClick}>
        {children}
      </button>
    </StyledButton>
  );
}

const StyledButton = styled.div<any>`
  .button {
    cursor: pointer;
    padding: 12px 28px;
    width: 100%;
    background: #0086ff;
    border: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
    transition: 0.3s;

    :hover {
      box-shadow: 0px 0px 10px 2px #00b7ff;
    }

    :focus {
      outline: none;
      box-shadow: 0px 0px 10px 2px #00b7ff;
    }

    :active {
      transform: translateY(2px);
      background: #0088ffdc;
    }

    ${({ btnSmall }: any) => {
      if (btnSmall) {
        return css`
          padding: 9px 28px;
          font-weight: 500;
          font-size: 12px;
        `;
      }
    }}

    ${({ closeBtn }: any) => {
      if (closeBtn) {
        return css`
          color: #666687;
          background-color: #fff0;
          border: 1px solid #dcdce4;
          border-radius: 4px;
        `;
      }
    }}
  }
`;
