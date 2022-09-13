// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

import styled from "styled-components";

// Components
import Button from "../button/Button";
import Input from "../input/Input";

// React Hook
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";

// Interface
// type Inputs = {
//   example: string;
//   exampleRequired: string;
// };

export default function InputAddForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);

    try {
      const docRef = await addDoc(collection(db, "users"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <StyledInputForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs__wrapper">
          <div className="input__wrapper">
            <Input
              type="text"
              label="Ism*"
              placeholder="ismingizni kiriting"
              defaultValue=""
              option={{ ...register("ism") }}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Familiya*"
              placeholder="familiyangizni kiriting"
              defaultValue=""
              option={{ ...register("familiya") }}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Manzil*"
              placeholder="manzilingizni kiriting"
              defaultValue=""
              option={{ ...register("manzil") }}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="tel"
              label="Telefon raqam*"
              placeholder="telefon raqamingizni kiriting"
              option={{ ...register("telefonRaqam") }}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Parol*"
              placeholder="parolingizni kiriting"
              defaultValue=""
              option={{ ...register("parol") }}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="datetime-local"
              label="Tug’ilgan sana*"
              placeholder="tug'ilgan sanangizni kiriting"
              defaultValue=""
              option={{ ...register("tugilganSana") }}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Telegram username"
              placeholder="telegram username'ingizni kiriting"
              defaultValue=""
              option={{ ...register("tgUsername") }}
            />
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
              defaultValue=""
              option={{ ...register("shior") }}
            />
          </div>

          <div className="input__wrapper">
            <Input
              type="text"
              label="Zoom link*"
              placeholder="Zoom link kiriting"
              defaultValue=""
              option={{ ...register("zoomLink") }}
            />
          </div>
        </div>
        <div className="buttons__wrapper">
          <Button btnSmall={true} closeBtn={true} type="button">
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
    width: 100%;
    height: 100%;

    .inputs__wrapper {
      display: flex;
      gap: 24px;
      row-gap: 24px;
      flex-wrap: wrap;

      .input__wrapper {
        width: 376px;
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
`;
