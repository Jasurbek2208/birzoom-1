import { useContext, useState } from "react";
import styled from "styled-components";

// Images
import userAvatar from "../../assets/img/userAvatar.png";

// Context
import { LoginContext } from "../../context/auth/LoginContext";

// Components
import MySelect from "../select/Select";

export default function Navbar({ small }: any) {
  const { setIsAuth } = useContext<any>(LoginContext);
  const [openMenu, setOpenMenu] = useState(false);

  function logOut() {
    localStorage.removeItem("ISAUTH");
    localStorage.removeItem("$TOKEN");
    setIsAuth(false);
  }

  return (
    <StyledNavbar className={small ? "On" : ""}>
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
              <li onClick={logOut}>LogOut</li>
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
  padding: 16px 24px 16px;
  width: calc(100vw - 224px);
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #eaeaef;
  z-index: 5;
  border: 1px solid red;

  &.On {
    width: calc(100vw - 60px);
  }

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
    width: calc(100vw - 60px);

    .right {
      .list {
        .user-menu {
          right: 20px;
        }
      }
    }
  }

  @media (max-width: 510px) {
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
