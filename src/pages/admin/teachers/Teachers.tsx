// Firebase get users
import { collection, getDocs } from "firebase/firestore"; 

import styled from "styled-components";

// Components
import Button from "../../../components/button/Button";
import DataTable from "../../../components/table/Table";

export default function Teachers() {
  return (
    <StyledTeachers>
      {/* Top navbar */}
      <section className="admin-navbar">
        <div className="left">
          <div className="icon-wrapper">
            <i className="icon icon-search"></i>
          </div>
          <div className="icon-wrapper">
            <i className="icon icon-search"></i>
          </div>
        </div>
        <div className="right">
          <div className="icon-wrapper">
            <p>Excel</p>
          </div>
          <Button type="button">+ O’qituvchi qo’shish</Button>
        </div>
      </section>
      {/* ==================== */}

      <DataTable />
    </StyledTeachers>
  );
}
const StyledTeachers = styled.div`
  padding: 25px;
  width: 100%;
  height: 100vh - 72px;

  .admin-navbar {
    margin-bottom: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left,
    .right {
      display: flex;
      align-items: center;
      gap: 16px;

      .icon-wrapper {
        cursor: pointer;
        padding: 12px 14px;
        background: #fff;
        border: 1px solid #dcdce4;
        border-radius: 4px;
      }
    }

    .right {
    }
  }
`;
