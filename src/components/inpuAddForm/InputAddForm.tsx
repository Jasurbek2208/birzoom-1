import styled from "styled-components";

// Firebase
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
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
import { useEffect, useState } from "react";

export default function InputAddForm({
  setOpenAdd,
  user,
  // editUser,
  img,
  getUsers,
}: any) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUsers>();

  const [newValue, setNewValue] = useState<any>([]);
  const [interests, setInterests] = useState([
    "Futbol",
    "Kitob o'qish",
    "Uxlash",
    "Kod yozish",
    "Kino ko'rish",
    "O'ynash",
    "Yugurish",
  ]);

  let myInterests: any = [];
  let myClass: any = "";

  function joinInterests(i: string, e: any) {
    e.target.className === ""
      ? (e.target.className = "On")
      : (e.target.className = "");

    if (!myInterests.includes(i)) {
      myInterests.push(i);
    } else {
      myInterests = myInterests.filter((j: any) => (j !== i ? true : false));
    }
    myClass = myInterests.join(" ");
    console.log(myClass);
  }

  useEffect(() => {
    if (!user) return;
    let arrValue: string[] = [];
    user.darsOtishDarajasi.arrayValue.values.map((i: any) => {
      arrValue.push(i.stringValue);
    });
    setNewValue(arrValue);

    reset({
      ism: user.ism.stringValue,
      familiya: user.familiya.stringValue,
      manzil: user.manzil.stringValue,
      telefonRaqam: user.telefonRaqam.stringValue,
      parol: user.parol.stringValue,
      tugilganSana: user.tugilganSana.stringValue,
      tgUsername: user.tgUsername.stringValue,
      kartaRaqam: user.kartaRaqam.stringValue,
      shior: user.shior.stringValue,
      zoomLink: user.zoomLink.stringValue,
    });
  }, [user]);

  const onSubmit: SubmitHandler<IUsers> = async (data) => {
    data.id = data.tgUsername + data.telefonRaqam;
    data.qiziqishlari = myInterests;
    data.img = img;

    let month = new Date().getMonth();
    let day = new Date().getDate();
    let hours = new Date().getHours();
    let minute = new Date().getMinutes();

    data.royxatdanOtganSana =
      new Date().getFullYear() +
      "." +
      (month < 10 ? "0" + (month + 1) : month) +
      "." +
      (day < 10 ? "0" + (day + 1) : day) +
      " " +
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minute < 10 ? "0" + minute : minute);

    try {
      await addDoc(collection(db, "users"), data);
      getUsers();
      setOpenAdd(false);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const onSubmitUpdate: SubmitHandler<IUsers> = async (data) => {
    data.id = user?.id?.stringValue;
    data.qiziqishlari = myInterests;
    data.royxatdanOtganSana = user?.royxatdanOtganSana?.stringValue;
    img !== "" ? (data.img = img) : (data.img = user?.img?.stringValue);

    try {
      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, data);
      getUsers();
      setOpenAdd(false);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <StyledInputForm>
      <form onSubmit={handleSubmit(user?.uid ? onSubmitUpdate : onSubmit)}>
        <div className="inputs__wrapper">
          <div className="input__wrapper">
            <Input
              type="text"
              label="Ism*"
              placeholder="ismingizni kiriting"
              option={{ ...register("ism", { required: true }) }}
            />
            {errors.ism && <span className="error">Ism kiritilmadi !</span>}
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Familiya*"
              placeholder="familiyangizni kiriting"
              option={{ ...register("familiya", { required: true }) }}
            />
            {errors.familiya && (
              <span className="error">Familiya kiritilmadi !</span>
            )}
          </div>

          <div className="input__wrapper">
            <MySelect
              defaultValue={user?.jinsi?.stringValue}
              option={{ ...register("jinsi", { required: true }) }}
              list={["erkak", "ayol"]}
              label="Jinsi*"
              placeholder="jinsingizni belgilang"
            />
            {errors.jinsi && <span className="error">Jins kiritilmadi !</span>}
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Manzil*"
              placeholder="manzilingizni kiriting"
              option={{ ...register("manzil", { required: true }) }}
            />
            {errors.manzil && (
              <span className="error">Manzilni kiritish shart !</span>
            )}
          </div>

          <div className="input__wrapper">
            <Input
              type="tel"
              label="Telefon raqam*"
              placeholder="telefon raqamingizni kiriting"
              option={{ ...register("telefonRaqam", { required: true }) }}
            />
            {errors.telefonRaqam && (
              <span className="error">Telefon raqam kiritilmadi !</span>
            )}
          </div>

          <div className="input__wrapper">
            <Input
              type="password"
              label="Parol*"
              placeholder="Parolni kiriting"
              option={{ ...register("parol", { required: true }) }}
            />
            {errors.parol && (
              <span className="error">Parolni kiritilmadi !</span>
            )}
          </div>

          <div className="input__wrapper">
            <Input
              type="datetime-local"
              label="Tug’ilgan sana*"
              placeholder="tug'ilgan sanangizni kiriting"
              option={{ ...register("tugilganSana", { required: true }) }}
            />
            {errors.tugilganSana && (
              <span className="error">Tug'ilgan sana belgilanmadi !</span>
            )}
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Telegram username"
              placeholder="telegram username'ingizni kiriting"
              option={{ ...register("tgUsername") }}
            />
          </div>

          <div className="input__wrapper">
            <MySelect
              defaultValue={user?.faoliyatTuri?.stringValue}
              option={{ ...register("faoliyatTuri", { required: true }) }}
              placeholder="faoliyat turiingizni kiriting"
              label="Faoliyat turi*"
              list={["O'qituvchi", "Ustoz", "Yordamchi"]}
            />
            {errors.faoliyatTuri && (
              <span className="error">Faoliyat turi belgilanmadi !</span>
            )}
          </div>

          <div className="input__wrapper">
            <MySelect
              defaultValue={user?.fani?.stringValue}
              option={{ ...register("fani", { required: true }) }}
              placeholder="faningizni kiriting"
              label="Fani*"
              list={["Ingliz tili", "Rus tili", "Arab tili"]}
            />
            {errors.fani && <span className="error">Fan belgilanmadi !</span>}
          </div>

          <div className="input__wrapper">
            <MySelect
              defaultValue={user?.tilDarajasi?.stringValue}
              option={{ ...register("tilDarajasi", { required: true }) }}
              placeholder="til darajangizni kiriting"
              label="Til darajasi*"
              list={["Boshlang'ich", "O'rtacha", "Kuchli"]}
            />
            {errors.tilDarajasi && (
              <span className="error">Til darajasi belgilanmadi !</span>
            )}
          </div>

          <div className="input__wrapper">
            <Input
              type="number"
              label="Karta raqami"
              placeholder="karta raqamingizni kiriting"
              option={{ ...register("kartaRaqam") }}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Shiori*"
              placeholder="shioringizni kiriting"
              option={{ ...register("shior", { required: true }) }}
            />
            {errors.shior && (
              <span className="error">Shior yozishga majbursiz !</span>
            )}
          </div>

          <div className="input__wrapper">
            <MySelect
              defaultValue={user?.holati?.stringValue}
              option={{ ...register("holati", { required: true }) }}
              placeholder="holatingizni kiriting"
              label="Holati"
              list={["Faol", "Nofaol"]}
            />
            {errors.holati && (
              <span className="error">Holat belgilanmagan !</span>
            )}
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Zoom link*"
              placeholder="Zoom link kiriting"
              option={{
                ...register("zoomLink", { required: true, minLength: 22 }),
              }}
            />
            {errors.zoomLink && (
              <span className="error">Zoom linkni kiritmadingiz !</span>
            )}
          </div>

          <div className="input__wrapper">
            <MultiSelect
              newValue={newValue}
              option={{ ...register("darsOtishDarajasi", { required: true }) }}
              placeholder="dars o'tish darajangiz"
              label="Qaysi darajaga dars o’tishi*"
              list={["Boshlang'ich", "O'rtacha", "Kuchli"]}
            />
            {errors.darsOtishDarajasi && (
              <span className="error">Tanlashga majbursiz !</span>
            )}
          </div>
        </div>
        <div className="interests__wrapper">
          <p>Qiziqishlari</p>
          <div className="bottom-grid">
            {interests.map((i: string) => {
              return (
                <div
                  className={myClass}
                  key={i}
                  onClick={(e: any) => joinInterests(i, e)}
                >
                  <img src={ball} alt="img" />
                  <div className="interests">{i}</div>
                </div>
              );
            })}
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
          <Button btnSmall={true} type="submit">
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
        position: relative;
        width: 360px;

        .error {
          position: absolute;
          right: 0px;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          color: #ee0000;
        }
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

        & > div {
          cursor: pointer;
          /* padding: 10px 0px; */
          width: 85px;
          height: 85px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid #dcdce4;
          border-radius: 4px;
          transition: 0.2s;

          &.On {
            background-color: #32324d;
          }

          &:hover {
            transform: scale(106%);
            box-shadow: 0px 0px 0px 1px #cecece9f;
          }

          &:active {
            transform: translateY(2px);
          }

          .interests {
            padding-top: 4px;
            text-align: center;
            font-size: 13px;
            line-height: 20px;
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
