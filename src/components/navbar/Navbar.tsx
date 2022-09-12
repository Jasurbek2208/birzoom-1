import styled from "styled-components";

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className="left">
        <h1>O’qituvchilar</h1>
      </div>
      <ul className="right">
        <li className="list"></li>
      </ul>
    </StyledNavbar>
  );
}
const StyledNavbar = styled.div`
  width: 100%;
  background: #fff;
  border: 1px solid #eaeaef;

  .left {
    h1 {
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      color: #32324d;
    }
  }
`;
