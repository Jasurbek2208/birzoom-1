import { useEffect, useState } from "react";
import styled from "styled-components";

// Firebase get users
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

// Images
import NoUsersImg from "../../../assets/img/backgroundEye.png";

// Components
import Button from "../../../components/button/Button";
import DataTable from "../../../components/table/Table";
import AddTeacher from "../../../components/addTeacher/AddTeacher";
import UserAboutPage from "../../../components/userAbout/UserAboutPage";

export default function Teachers() {
  const [editUser, setEditUser] = useState(false);

  const token = localStorage.getItem("$TOKEN");
  const [users, setUsers] = useState<{}[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [usersId, setUsersId] = useState<any>([]);

  async function getUsers() {
    let list: {}[] = [];
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        list.push(doc);
      });
      setUsers(list);
      console.log("get bo'ldi");
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUsers() {
    let id: any = [];

    usersId.forEach((j: string) => {
      users.forEach((i: any) => {
        if (
          i?._document?.data?.value?.mapValue?.fields?.id?.stringValue === j
        ) {
          id.push(i?._document?.key?.path?.segments[6]);
        }
      });
    });
    id.map((i: string) => {
      dbDelete(i);
    });
    getUsers();
  }

  async function dbDelete(id: string) {
    try {
      deleteDoc(doc(db, "users/", id));
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <StyledTeachers>
      {/* Top navbar */}
      <section className="admin-navbar">
        <div className="left">
          <p>{users.length} ta o’qituvchi</p>
        </div>
        <div className="right">
          <div className={(token === "guest" ? "guest " : "") + "icon-wrapper"}>
            <p>Excel</p>
          </div>
          {usersId[0] ? (
            <Button type="button" token={token} onClick={deleteUsers}>
              Delete
            </Button>
          ) : (
            <Button
              type="button"
              token={token}
              onClick={() => setOpenAdd(true)}
            >
              + O’qituvchi qo’shish
            </Button>
          )}
        </div>
      </section>
      {/* ==================== */}
      {users[0] ? (
        <DataTable
          token={token}
          users={users}
          setUsersId={setUsersId}
          setCurrentUser={setCurrentUser}
        />
      ) : (
        <div className="NoUsersImg">
          <img src={NoUsersImg} alt="NoUsersImg" />
        </div>
      )}
      {token !== "guest" ? (
        <AddTeacher
          editUser={editUser}
          openAdd={openAdd}
          setOpenAdd={setOpenAdd}
          user={currentUser}
          getUsers={getUsers}
        />
      ) : null}

      {currentUser ? (
        <UserAboutPage
          user={currentUser}
          setOpenAdd={setOpenAdd}
          setEditUser={setEditUser}
        />
      ) : null}
    </StyledTeachers>
  );
}
const StyledTeachers = styled.div`
  padding: 25px;
  position: relative;
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
        height: max-content;
        background: #fff;
        border: 1px solid #dcdce4;
        border-radius: 4px;

        &.guest {
          cursor: not-allowed;
          background: #e6e6e6b5;
        }
      }
    }

    .left {
      position: relative;
      width: 200px;

      p {
        position: absolute;
        top: 32px;
        left: 0px;
        font-size: 14px;
        line-height: 20px;
        color: #666687;
      }
    }
  }

  .NoUsersImg {
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
