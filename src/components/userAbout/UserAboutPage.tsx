import { useEffect } from "react";
import styled, { css } from "styled-components";

// Interface
import { IUsers } from "../../interfaces/Interface";

// Components
import Button from "../button/Button";

// Images
import useravatar from "../../assets/img/userAvatar.png";

// Interface
export interface IAboutUser {
  columns: {}[];
  getValue: any;
  id: string;
  row: IUsers;
}

export default function UserAboutPage({ user, setOpenAdd, setEditUser }: any) {
  let current: any = user;
  let hidePassword: string = "";
  for (let i = 0; i < current?.parol.stringValue.length; i++) {
    hidePassword += "*";
  }

  useEffect(() => {
    const rowList: any = [];

    Object.entries(user).forEach((i: any) => {
      let tempObj: any = {};
      i[0] === "darsOtishDarajasi"
        ? (tempObj[i[0]] = i[1]?.arrayValue?.values)
        : (tempObj[i[0]] = i[1].stringValue);
      rowList.push(tempObj);
    });

    current = rowList;
  }, []);

  return (
    <StyledAboutPage user={user}>
      <div className="left">
        <div className="about-menu">
          <div className="top">
            <i className="icon icon-bell"></i>
            <i className="icon icon-bubble"></i>
          </div>
          <div className="center">
            <img
              src={current?.img ? current?.img?.stringValue : useravatar}
              alt="user_Avatar.png"
            />
          </div>
          <div className="bottom">
            <p>
              {current?.ism
                ? current?.ism?.stringValue +
                  " " +
                  current?.familiya?.stringValue
                : "No name"}
            </p>
            <p>{current?.telefonRaqam?.stringValue}</p>
          </div>
        </div>
        <div className="button__wrapper">
          <Button
            type="button"
            btnSmall={true}
            onClick={() => {
              setOpenAdd(true);
              setEditUser(true);
            }}
          >
            Tahrirlash
          </Button>
        </div>
      </div>
      <div className="about__wrapper">
        <ul className="list__wrapper">
          <li className="list">
            <p>Tug'ilgan kun:</p>
            <h3>
              {
                current?.tugilganSana?.stringValue
                  ?.split("T")
                  .join(" ")
                  .split(".")[0]
              }
            </h3>
          </li>
          <li className="list">
            <p>Jinsi:</p> <h3>{current?.jinsi?.stringValue}</h3>
          </li>
          <li className="list">
            <p>Manzil:</p> <h3>{current?.manzil?.stringValue}</h3>
          </li>
          <li className="list">
            <p>Telegram username:</p>
            <a
              href={
                "https://t.me/" +
                current?.tgUsername?.stringValue?.split("@").join("")
              }
            >
              {current?.tgUsername?.stringValue}
            </a>
          </li>
          <li className="list">
            <p>Karta raqami:</p> <h3>{current?.kartaRaqam?.stringValue}</h3>
          </li>
          <li className="list">
            <p>Faoliyat turi:</p> <h3>{current?.faoliyatTuri?.stringValue}</h3>
          </li>
          <li className="list">
            <p>Fani:</p> <h3>{current?.fani?.stringValue}</h3>
          </li>
          <li className="list">
            <p>Til darajasi:</p> <h3>{current?.tilDarajasi?.stringValue}</h3>
          </li>
          <li className="list">
            <p>Qiziqishlari:</p>{" "}
            {/* <h3>{current?.qiziqishlari.stringValue}</h3> */}
          </li>
          <li className="list">
            <p>Shiori:</p> <h3>{current?.shior?.stringValue}</h3>
          </li>
          <li className="list">
            <p>Parol:</p> <h3 className="password">{hidePassword}</h3>
            <span className="edit-password">Parolni o’zgartirish</span>
          </li>
          <li className="list">
            <p>Rо’yxatdan o’tgan sana:</p>
            {/* <h3>{current?.royxatdanOtganSana.stringValue}</h3> */}
          </li>
          <li className="list">
            <p>Darslari:</p> <h3>{current?.darsOtishDarajasi?.stringValue}</h3>
          </li>
          <li className="list">
            <p>Zoom link:</p>{" "}
            <a href={current?.zoomLink?.stringValue}>
              {current?.zoomLink?.stringValue}
            </a>
          </li>
          <li className="list">
            <p>O’rtacha narxi:</p> {/* <h3>{current}</h3> */}
          </li>
          <li className="list">
            <p>Qaysi darajaga dars o’tishi:</p>
            {/* <h3>{current?.darsOtishDarajasi?.arrayValue?.values[0]?.stringValue + ", " + current?.darsOtishDarajasi?.arrayValue?.values[1]?.stringValue + ", " + current?.darsOtishDarajasi?.arrayValue?.values[2]?.stringValue}</h3> */}
            <h3>
              {current?.darsOtishDarajasi?.arrayValue?.values?.map(
                (i: any, idx: number) => {
                  return (idx === 0 ? "" : ", ") + i?.stringValue;
                }
              )}
            </h3>
          </li>
          <li className="list">
            <p>So’ngi faollik</p> {/* <h3>{current?.}</h3> */}
          </li>
        </ul>
      </div>
    </StyledAboutPage>
  );
}

const StyledAboutPage = styled.div<any>`
  padding: 25px;

  position: absolute;
  top: -3500px;
  right: 0px;
  background-color: #f5f5f5;

  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  z-index: 2;
  transition: 0.3s;

  ${({ user }) => {
    if (user.length !== 0)
      return css`
        top: 8px;
      `;
  }}

  .left {
    width: 250px;

    .about-menu {
      padding: 20px 28px 16px;
      background: #fff;
      border: 1px solid #eaeaef;
      border-radius: 4px;

      .top {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 16px;
      }

      .center {
        padding: 2px;
        margin: 0 auto;
        margin-top: 28px;
        margin-bottom: 24px;
        width: 130px;
        height: 130px;
        border: 1px solid #0086ff;
        border-radius: 50%;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .bottom {
        display: flex;
        justify-content: center;
        flex-direction: column;
        row-gap: 8px;

        p {
          text-align: center;
          font-weight: 600;
          font-size: 16px;
          line-height: 16px;
          color: #32324d;

          &:last-of-type {
            color: #666687;
          }
        }
      }
    }

    .button__wrapper {
      margin-top: 16px;
      width: 100%;
    }
  }

  .about__wrapper {
    padding: 24px;
    width: 74%;
    border: 0.5px solid #eaeaef;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 1px 4px rgba(33, 33, 52, 0.1);

    .list__wrapper {
      width: 582px;
      display: flex;
      flex-direction: column;
      row-gap: 16px;

      .list {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        p {
          width: 240px;
          font-size: 16px;
          line-height: 22px;
          color: #828282;
        }

        h3,
        a {
          font-weight: 500;
          font-size: 16px;
          line-height: 28px;
          color: #32324d;
        }

        a {
          text-decoration: none;
          color: #0086ff;
        }

        .password {
          position: relative;
        }

        .edit-password {
          cursor: pointer;
          margin-left: 130px;
          font-weight: 500;
          font-size: 14px;
          line-height: 28px;
          text-decoration-line: underline;
          color: #0086ff;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .about__wrapper {
      width: 100%;
    }
  }

  @media (max-width: 766px) {
    .about__wrapper {
      max-width: 400px;
      overflow: auto;

      .list__wrapper {
        width: 400px;

        .list {
          p {
            width: 200px;
            font-size: 14px;
          }

          h3,
          a {
            font-size: 14px;
          }
          /* 
          @media (max-width: 526px) {
            p {
              width: 190px;
              font-size: 12px;
            }

            h3,
            a {
              font-size: 12px;
            }
          }

          @media (max-width: 488px) {
            p {
              width: 170px;
            }
          }

          @media (max-width: 488px) {
            p {
              width: 150px;
              font-size: 11px;
            }

            h3,
            a {
              font-size: 11px;
            }
          }
          
          @media (max-width: 435px) {
            p {
              width: 130px;
              font-size: 11px;
            }

            h3,
            a {
              font-size: 11px;
            }
          } */
        }
      }
    }
  }
`;
