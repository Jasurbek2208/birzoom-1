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
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Router() {
  const { isAuth, setIsAuth } = useContext<ILoginContext>(LoginContext);

  const token = localStorage.getItem("$TOKEN");
  const navigate = useNavigate();

  useEffect(() => {
    if (token === "guest" || token === document.cookie) return;
    localStorage.removeItem("ISAUTH");
    localStorage.removeItem("$TOKEN");
    setIsAuth(false);
    navigate("/");
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
