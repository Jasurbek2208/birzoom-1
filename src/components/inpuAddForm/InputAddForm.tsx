import styled from "styled-components";

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

// Components
import Button from "../button/Button";
import Input from "../input/Input";
import MySelect from "../select/Select";

// React Hook
import { useForm, SubmitHandler } from "react-hook-form";

// Interface
import { IUsers } from "../../interfaces/Interface";

// Images
import ball from "../../assets/img/basketball 1.png";
import MultiSelect from "../select/MultiSelect";
import { useEffect } from "react";

export default function InputAddForm({
  setOpenAdd,
  user,
  openAdd,
  editUser,
  img,
}: any) {
  const { register, handleSubmit } = useForm<IUsers>();

  const onSubmit: SubmitHandler<IUsers> = async (data) => {
    data.id = data.tgUsername + data.telefonRaqam;
    data.img = img;
    console.log(data);

    try {
      const docRef = await addDoc(collection(db, "users"), data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    console.log(img);
  }, [img]);

  return (
    <StyledInputForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs__wrapper">
          <div className="input__wrapper">
            <Input
              type="text"
              label="Ism*"
              placeholder="ismingizni kiriting"
              defaultValue={editUser ? user.ism.stringValue : ""}
              option={{ ...register("ism") }}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Familiya*"
              placeholder="familiyangizni kiriting"
              defaultValue={editUser ? user.familiya.stringValue : ""}
              option={{ ...register("familiya") }}
            />
          </div>

          <div className="input__wrapper">
            <MySelect
              option={{ ...register("jinsi") }}
              list={["erkak", "ayol"]}
              label="Jinsi*"
              placeholder="jinsingizni belgilang"
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Manzil*"
              placeholder="manzilingizni kiriting"
              defaultValue={editUser ? user.manzil.stringValue : ""}
              option={{ ...register("manzil") }}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="tel"
              label="Telefon raqam*"
              placeholder="telefon raqamingizni kiriting"
              defaultValue={editUser ? user.telefonRaqam.stringValue : ""}
              option={{ ...register("telefonRaqam") }}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Parol*"
              placeholder="parolingizni kiriting"
              defaultValue={editUser ? user.parol.stringValue : ""}
              option={{ ...register("parol") }}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="datetime-local"
              label="Tug’ilgan sana*"
              placeholder="tug'ilgan sanangizni kiriting"
              defaultValue={editUser ? user.tugilganSana.stringValue : ""}
              option={{ ...register("tugilganSana") }}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Telegram username"
              placeholder="telegram username'ingizni kiriting"
              defaultValue={editUser ? user.tgUsername.stringValue : ""}
              option={{ ...register("tgUsername") }}
            />
          </div>

          <div className="input__wrapper">
            <MySelect
              option={{ ...register("faoliyatTuri") }}
              placeholder="faoliyat turiingizni kiriting"
              label="Faoliyat turi*"
              list={["O'qituvchi", "Ustoz", "Yordamchi"]}
            />
          </div>

          <div className="input__wrapper">
            <MySelect
              option={{ ...register("fani") }}
              placeholder="faningizni kiriting"
              label="Fani*"
              list={["Ingliz tili", "Rus tili", "Arab tili"]}
            />
          </div>

          <div className="input__wrapper">
            <MySelect
              option={{ ...register("tilDarajasi") }}
              placeholder="til darajangizni kiriting"
              label="Til darajasi*"
              list={["Boshlang'ich", "O'rtacha", "Kuchli"]}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="number"
              label="Karta raqami"
              placeholder="karta raqamingizni kiriting"
              defaultValue={editUser ? user.kartaRaqam.stringValue : ""}
              option={{ ...register("kartaRaqam") }}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Shiori*"
              placeholder="shioringizni kiriting"
              defaultValue={editUser ? user.shior.stringValue : ""}
              option={{ ...register("shior") }}
            />
          </div>

          <div className="input__wrapper">
            <MySelect
              option={{ ...register("holati") }}
              placeholder="holatingizni kiriting"
              label="Holati"
              list={["Faol", "Nofaol"]}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Zoom link*"
              placeholder="Zoom link kiriting"
              defaultValue={
                editUser ? user.zoomLink.stringValue : "https://zoom.us/"
              }
              option={{ ...register("zoomLink") }}
            />
          </div>

          <div className="input__wrapper">
            <MultiSelect
              option={{ ...register("darsOtishDarajasi") }}
              placeholder="dars o'tish darajangiz"
              label="Qaysi darajaga dars o’tishi*"
              list={["Boshlang'ich", "O'rtacha", "Kuchli"]}
            />
          </div>
        </div>
        <div className="interests__wrapper">
          <p>Qiziqishlari</p>
          <div className="bottom-grid">
            <div>
              <img src={ball} alt="img" />
              <small>Kitoblar</small>
            </div>
            <div>
              <img src={ball} alt="img" />
              <small>Sayohat</small>
            </div>
            <div>
              <img src={ball} alt="img" />
              <small>Sayohat</small>
            </div>

            <div>
              <img src={ball} alt="img" />
              <small>Sayohat</small>
            </div>
            <div>
              <img src={ball} alt="img" />
              <small>Iqtisod</small>
            </div>
            <div>
              <img src={ball} alt="img" />
              <small>Sayohat</small>
            </div>
            <div>
              <img src={ball} alt="img" />
              <small>Sayohat</small>
            </div>
            <div>
              <img src={ball} alt="img" />
              <small>Sayohat</small>
            </div>
            <div>
              <img src={ball} alt="img" />
              <small>Sayohat</small>
            </div>
          </div>
        </div>
        <div className="buttons__wrapper">
          <Button
            onClick={() => setOpenAdd(false)}
            btnSmall={true}
            closeBtn={true}
            type="button"
          >
            Bekor qilish
          </Button>
          <Button
            onClick={() => setOpenAdd(false)}
            btnSmall={true}
            type="submit"
          >
            Saqlash
          </Button>
        </div>
      </form>
    </StyledInputForm>
  );
}

const StyledInputForm = styled.div`
  padding: 24px;
  width: 100%;
  height: 100%;

  form {
    height: 100%;

    .inputs__wrapper {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      row-gap: 24px;
      flex-wrap: wrap;

      .input__wrapper {
        width: 360px;
      }
    }

    .interests__wrapper {
      margin-top: 24px;

      p {
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: left;
        color: #32324d;
        padding-bottom: 4px;
      }
      .bottom-grid {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;

        div {
          cursor: pointer;
          padding: 10px 14px;
          width: 72px;
          height: 72px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #dcdce4;
          border-radius: 4px;
          transition: 0.2s;

          &:hover {
            transform: scale(106%);
            box-shadow: 0px 0px 0px 1px #cecece9f;
          }

          &:active {
            transform: translateY(2px);
          }

          small {
            font-size: 14px;
            padding-top: 4px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0px;
            text-align: left;
            color: #8e8ea9;
          }
        }
      }
    }

    .buttons__wrapper {
      margin-top: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
    }
  }

  @media (max-width: 678px) {
    form {
      .inputs__wrapper {
        .input__wrapper {
          width: 100%;
        }
      }
    }
  }
`;
