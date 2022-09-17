import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// Components
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

export default function AdminLayout() {
  const [small, isSmall] = useState(false);

  return (
    <StyledLayout>
      <Sidebar small={small} isSmall={isSmall} />
      <div className={(small ? "On " : "") + "wrapper"}>
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
    transition: 0.3s;

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

    &.On {
      padding-left: 60px;
    }

    @media (max-width: 678px) {
      padding-left: 60px;
    }
  }
`;
