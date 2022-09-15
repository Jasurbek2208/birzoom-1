import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// Images
import logo from "../../assets/img/logo.png";

export default function Sidebar() {
  const location = useLocation().pathname;
  const [small, isSmall] = useState(false);

  return (
    <StyledSidebar className={small ? "On" : ""}>
      <div className="top">
        <img src={logo} alt="logo.png" />
      </div>
      <div className="center">
        <h1>Asosiy</h1>
        <ul className="sidebar-navigate">
          <li className="link">
            <Link to="/">
              <i className="icon icon-home"></i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="link">
            <Link className={location === "/teachers" ? "Active" : ""} to="/">
              <i className="icon icon-person"></i>
              <p>O’qituvchi</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="icon-wrapper" onClick={() => isSmall((p) => !p)}>
          <i className="icon icon-sidebarMain"></i>
        </div>
      </div>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  position: relative;
  position: fixed;
  width: 224px;
  height: 100vh;
  background-color: #fff;
  border-right: 1px solid #eaeaef;
  transition: 0.3s;

  .top {
    padding: 21px 12px;
    border-bottom: 1px solid #eaeaef;
    transition: 0.3s;

    img {
      width: 138px;
      height: 30px;
    }
  }

  .center {
    padding: 12px;
    transition: 0.3s;

    h1 {
      margin: 29px 0px 12px 12px;
      font-weight: 600;
      font-size: 11px;
      line-height: 16px;
      text-transform: uppercase;
      color: #666687;
      transition: 0.3s;
    }

    .sidebar-navigate {
      display: flex;
      flex-direction: column;
      row-gap: 8px;

      .link {
        a {
          background: rgba(0, 136, 255, 0);
          border-radius: 4px;
          padding: 10px 9px;
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          transition: 0.3s;

          p {
            font-size: 14px;
            line-height: 20px;
            color: #666687;
            transition: 0.3s;
          }

          &.Active {
            background: rgba(0, 134, 255, 0.1);
          }
        }
      }
    }
  }

  .bottom {
    padding: 16px 13px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 60px;
    border-top: 1px solid #eaeaef;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .icon-wrapper {
      padding: 8px 7px;
      border: 1px solid #eaeaef;
      border-radius: 4px;
    }
  }

  &.On {
    width: 60px;
    overflow: hidden;

    .top {
      padding: 21px 20px;
    }

    .center {
      padding: 12px 0px;

      h1 {
        margin: 0px 0px 0px 11px;
        font-weight: 500;
      }

      .sidebar-navigate {
        .link {
          a {
            padding: 16px 21px;
            gap: 25px;
          }
        }
      }
    }
  }

  @media (max-width: 678px) {
    width: 60px;
    overflow: hidden;

    .top {
      padding: 21px 20px;
    }

    .center {
      padding: 12px 0px;

      h1 {
        margin: 0px 0px 0px 11px;
        font-weight: 500;
      }

      .sidebar-navigate {
        .link {
          a {
            padding: 16px 21px;
            gap: 25px;
          }
        }
      }
    }
  }
`;
