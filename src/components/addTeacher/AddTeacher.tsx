import styled from "styled-components";
import Button from "../button/Button";

// Images
import inputImg from "../../assets/img/inputImg.png";

export default function () {
  return (
    <StyledAddPage>
      <div className="left">
        <p>Rasm*</p>
        <div className="img__wrapper">
          <img src={inputImg} alt="inputImg.png" />
          <p>Rasmni shu yerga olib keling</p>
        </div>
        <div className="button__wrapper">
          <Button type="button">Rasmni yuklash</Button>
        </div>
      </div>
      <div className="right"></div>
    </StyledAddPage>
  );
}

const StyledAddPage = styled.div`
  padding: 25px;
  width: 100%;
  height: 100vh - 72px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

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
      width: 100%;
      padding: 16px 49px 0px;
    }
  }
`;
