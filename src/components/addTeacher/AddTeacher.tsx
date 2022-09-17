import styled, { css } from "styled-components";

// Images
import inputImg from "../../assets/img/inputImg.png";

// Components
import InputAddForm from "../inpuAddForm/InputAddForm";
import Input from "../input/Input";

// Firebase
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import { useState } from "react";

export default function ({
  openAdd,
  setOpenAdd,
  user,
  editUser,
  getUsers,
}: any) {
  const [img, setImg] = useState("");

  async function setWallpaper(e: any) {
    const file: any = e.target.files[0];
    console.log(file);
    const storageRef = ref(storage, "images/" + file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImg(downloadURL);
          console.log(img);
        });
      }
    );
  }

  return (
    <StyledAddPage openAdd={openAdd}>
      <div className="left">
        <p>Rasm*</p>
        <div className="img__wrapper">
          <img src={img || inputImg} alt="inputImg.png" />
          <p>Rasmni shu yerga olib keling</p>
        </div>
        <div className="button__wrapper">
          <Input
            placeholder="Rasmni yuklash"
            type="file"
            onChange={setWallpaper}
          />
        </div>
      </div>
      <div className="right">
        <InputAddForm
          editUser={editUser}
          setOpenAdd={setOpenAdd}
          openAdd={openAdd}
          user={user}
          img={img}
          getUsers={getUsers}
        />
      </div>
    </StyledAddPage>
  );
}

const StyledAddPage = styled.div<any>`
  padding: 25px;

  position: absolute;
  top: -3500px;
  right: 0px;
  transition: 0.3s;
  background-color: #f5f5f5;

  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  z-index: 3;

  ${({ openAdd }) => {
    if (openAdd)
      return css`
        top: 8px;
      `;
  }}

  .left {
    padding: 16px;
    width: 255px;
    background-color: #fff;
    border: 1px solid #eaeaef;
    border-radius: 4px;

    p {
      margin-bottom: 4px;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: #32324d;
    }

    .img__wrapper {
      padding: 22px 26px 16px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      border: 1px solid #dcdce4;
      border-radius: 4px;

      img {
        margin: 0 auto;
        width: 134px;
        height: 134px;
        border-radius: 50%;
      }

      p {
        margin-top: 18px;
        text-align: center;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #8e8ea9;
      }
    }

    .button__wrapper {
      padding: 16px 30px 0px;
      width: 100%;
    }
  }

  .right {
    width: 74%;
    background-color: #fff;
    border: 0.5px solid #eaeaef;
    border-radius: 4px;
  }

  @media (max-width: 1200px) {
    .right {
      width: 100%;
    }
  }
`;
