import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

export default function AdminLayout() {
  return (
    <StyledLayout>
      <Sidebar />
      <div className="wrapper">
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
    width: 100%;
  }
`;
