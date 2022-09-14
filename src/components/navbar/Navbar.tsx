import styled from "styled-components";

// Images
import userAvatar from "../../assets/img/userAvatar.png";
import MySelect from "../select/Select";

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className="left">
        <h1>O’qituvchilar</h1>
      </div>
      <ul className="right">
        <li className="list select-wrapper">
          <MySelect list={["Uzb", "Rus", "Eng"]} placeholder="language" />
        </li>
        <li className="list">
          <img src={userAvatar} alt="userAvatar.png" />
        </li>
      </ul>
    </StyledNavbar>
  );
}
const StyledNavbar = styled.div`
  position: fixed;
  top: 0px;
  padding: 16px 264px 16px 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #eaeaef;
  z-index: 5;

  .left {
    h1 {
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      color: #32324d;
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 24px;

    .list {
      &.select-wrapper {
        width: 120px;
      }
    }
  }
`;
