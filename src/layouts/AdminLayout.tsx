import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

export default function AdminLayout() {
  const token = localStorage.getItem("$TOKEN");

  return (
    <StyledLayout>
      <Sidebar />
      <div className="wrapper">
        {token === "guest" ? (
          <div className="guest">
            <h1>Siz Admin Emassiz !</h1>
          </div>
        ) : null}
        <Navbar />
        <Outlet />
      </div>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  background: #f5f5f5;
  display: flex;

  .wrapper {
    padding: 77px 0px 0px 224px;
    width: 100%;
    height: 100vh;
    transition: .3s;

    .guest {
      height: 88vh;
      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        text-align: center;
        font-weight: 800;
      }
    }

    @media (max-width: 678px) {
      padding-left: 60px;
    }
  }
`;
