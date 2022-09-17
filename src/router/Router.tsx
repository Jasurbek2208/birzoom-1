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
import { auth, db } from "../firebase";

export default function Router() {
  const { isAuth, setIsAuth } = useContext<ILoginContext>(LoginContext);
  const navigate = useNavigate();

  let token: any;
  let user: any;

  async function fetchFromAPI() {
    if (user) {
      token = user && (await user.getIdToken());
    }
    if (token !== document.cookie) {
      localStorage.removeItem("ISAUTH");
      localStorage.removeItem("$TOKEN");
      setIsAuth(false);
      navigate("/");
    }
  }

  if (!isAuth) {
    return (
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    );
  } else {
    user = auth.currentUser;
    if (user) {
      fetchFromAPI();
    }
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
