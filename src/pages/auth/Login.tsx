import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

// IMAGES
import logo from "../../assets/img/logo.png";

// Components
import Button from "../../components/button/Button";
import MyCheckbox from "../../components/checkbox/Checkbox";
import Input from "../../components/input/Input";

// Context
import { LoginContext } from "../../context/auth/LoginContext";
import { ILoginContext } from "../../interfaces/Interface";

export default function Login(): any {
  const { setIsAuth } = useContext<ILoginContext>(LoginContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Firebase ===============
  const userLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user: any = userCredential.user;
        console.log(user);

        localStorage.setItem("ISAUTH", "true");
        user.uid === "P4tftLAJjmcTezH1180YgFLvm2F3"
          ? localStorage.setItem("$TOKEN", "guest")
          : localStorage.setItem("$TOKEN", user?.stsTokenManager?.accessToken);
        if (setIsAuth) setIsAuth(true);
        setEmail("");
        setPassword("");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        localStorage.removeItem("ISAUTH");
        localStorage.removeItem("$TOKEN");
      });
  };

  function guestUser() {
    setEmail("guest@gmail.com");
    setPassword("guest2022");
  }

  return (
    <StyledLogin>
      <div className="login__wrapper">
        <div className="loginTitle-wrapper">
          <div className="img-wrapper">
            <img src={logo} alt="logo" />
          </div>
          <h1>Xush kelibsiz!</h1>
          <p>Login va Parolingizni kiriting</p>
        </div>
        <form onSubmit={handleSubmit(userLogin)} className="form-wrapper">
          <Input
            {...register("email", { required: true })}
            type="email"
            label="Email"
            value={email}
            placeholder="Emailni kiriting"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            option={{
              ...register("password", {
                required: true,
                minLength: {
                  value: 4,
                  message: "Parol uzunligi 4ta belgidan ko'p bo'lishi kerak",
                },
              }),
            }}
            type="password"
            label="Password"
            value={password}
            placeholder="Parolni kiriting"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <MyCheckbox label="Remember me" required={true} />
          {errors.exampleRequired && <span>This field is required</span>}
          <Button onClick={userLogin} type="button">
            Login
          </Button>
          <div className="guest__wrapper">
            <p onClick={guestUser}>I am Guest</p>
          </div>
        </form>
      </div>
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

  .login__wrapper {
    padding: 56px;
    min-width: 552px;
    min-height: 528px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 32px;
    background-color: #fff;
    border: 0.5px solid #eaeaef;
    box-shadow: 0px 1px 4px rgba(33, 33, 52, 0.1);
    border-radius: 4px;

    .loginTitle-wrapper {
      .img-wrapper {
        max-width: 180px;
        max-height: 38px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      h1 {
        margin: 24px 0px 6px;
        text-align: center;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        color: #32324d;
      }

      p {
        text-align: center;
        font-size: 16px;
        line-height: 24px;
        color: #a5a5ba;
      }
    }

    .form-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 24px;

      .guest__wrapper {
        padding: 0px 12px;
        display: flex;
        justify-content: flex-end;

        p {
          cursor: pointer;
          margin-top: -12px;
          text-decoration: none;
          color: #0086ff;
        }
      }
    }
  }
`;
