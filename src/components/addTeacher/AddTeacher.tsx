import styled, { css } from "styled-components";
import Button from "../button/Button";

// Images
import inputImg from "../../assets/img/inputImg.png";
import InputAddForm from "../inpuAddForm/InputAddForm";

export default function ({ openAdd, setOpenAdd }: any) {
  return (
    <StyledAddPage openAdd={openAdd}>
      <div className="left">
        <p>Rasm*</p>
        <div className="img__wrapper">
          <img src={inputImg} alt="inputImg.png" />
          <p>Rasmni shu yerga olib keling</p>
        </div>
        <div className="button__wrapper">
          <Button btnSmall={true} type="button">
            Rasmni yuklash
          </Button>
        </div>
      </div>
      <div className="right">
        <InputAddForm setOpenAdd={setOpenAdd} />
      </div>
    </StyledAddPage>
  );
}

const StyledAddPage = styled.div<any>`
  padding: 25px;

  position: absolute;
  top: -1500px;
  right: 0px;
  transition: 0.3s;
  background-color: #f5f5f5;

  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  z-index: 2;

  ${({ openAdd }) => {
    if (openAdd)
      return css`
        top: 8px;
      `;
  }}

  .left {
    padding: 16px;
    background-color: #fff;
    border: 1px solid #eaeaef;
    border-radius: 4px;

    p {
      margin-bottom: 4px;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: #32324d;
    }

    .img__wrapper {
      padding: 22px 26px 16px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      border: 1px solid #dcdce4;
      border-radius: 4px;

      img {
        margin: 0 auto;
        width: 134px;
        height: 134px;
      }

      p {
        margin-top: 18px;
        text-align: center;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #8e8ea9;
      }
    }

    .button__wrapper {
      padding: 16px 30px 0px;
      width: 100%;
    }
  }

  .right {
    width: 74%;
    background-color: #fff;
    border: 0.5px solid #eaeaef;
    border-radius: 4px;
  }
`;
