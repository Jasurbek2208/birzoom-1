import { useContext, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

// AUTH
import Login from "../pages/auth/Login";

// ADMIN
import AdminLayout from "../layouts/AdminLayout";
import Teachers from "../pages/admin/teachers/Teachers";

// Context
import { LoginContext } from "../context/auth/LoginContext";
import { ILoginContext } from "../interfaces/Interface";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Router() {
  const { isAuth, setIsAuth } = useContext<ILoginContext>(LoginContext);
  const navigate = useNavigate();

  async function getUsersToken() {
    let token: string = "";
    try {
      const res = await getDocs(collection(db, "admins"));
      res.forEach((doc: any) => {
        token =
          doc._firestore._authCredentials.auth.auth.currentUser.accessToken;
      });
    } catch (error) {
    } finally {
      if (token !== document.cookie) {
        localStorage.removeItem("ISAUTH");
        localStorage.removeItem("$TOKEN");
        setIsAuth(false);
        navigate("/");
      }
    }
  }

  useEffect(() => {
    getUsersToken();
  }, [isAuth]);

  if (!isAuth) {
    return (
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/teachers" element={<Teachers />} />
        <Route path="*" element={<Navigate to="teachers" />} />
      </Route>
    </Routes>
  );
}
