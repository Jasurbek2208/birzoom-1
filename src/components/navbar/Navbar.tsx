import { useState } from "react";
import styled from "styled-components";

// Images
import userAvatar from "../../assets/img/userAvatar.png";
import MySelect from "../select/Select";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

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
          <img
            src={userAvatar}
            alt="userAvatar.png"
            onClick={() => setOpenMenu((p) => !p)}
          />
          <div className={(openMenu ? "On " : "") + "user-menu"}>
            <ul>
              <li>Add user</li>
              <li>LogOut</li>
              <li className="select-wrapper">
                <MySelect list={["Uzb", "Rus", "Eng"]} placeholder="language" />
              </li>
            </ul>
          </div>
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

      &:last-of-type {
        position: relative;

        img {
          cursor: pointer;
        }
      }

      .user-menu {
        position: absolute;
        top: 50px;
        right: 0px;
        width: 0px;
        transition: 0.2s;

        ul {
          li {
            cursor: pointer;
            padding: 0px;
            width: 0%;
            font-size: 0px;
            transition: 0.1s;

            &:hover {
              background-color: #dcdce4;
            }

            &:active {
              background-color: #eaeaef;
            }

            &.select-wrapper {
              display: none;
            }
          }
        }

        &.On {
          width: 100px;
          background-color: #fff;
          border: 1px solid #dcdce4;
          border-radius: 4px;
          box-shadow: 0px 0px 10px 1px #b6b6b671;

          ul {
            li {
              padding: 12px 16px;
              width: 100%;
              font-size: 16px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 678px) {
    padding: 16px 84px 16px 20px;

    .right {
      .list {
        .user-menu {
          right: 20px;
        }
      }
    }
  }

  @media (max-width: 510px) {
    padding: 16px 80px 16px 20px;

    .right {
      display: flex;
      align-items: center;
      gap: 24px;

      .list {
        &.select-wrapper {
          display: none;
        }

        .user-menu {
          &.On {
            width: 155px;

            .select-wrapper {
              display: block;
            }
          }
        }
      }
    }
  }
`;
