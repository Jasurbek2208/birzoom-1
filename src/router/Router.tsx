import { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// AUTH
import Login from "../pages/auth/Login";

// ADMIN
import AdminLayout from "../layouts/AdminLayout";
import Teachers from "../pages/admin/teachers/Teachers";

// Context
import { LoginContext } from "../context/auth/LoginContext";
import { ILoginContext } from "../interfaces/Interface";

export default function Router() {
  const { isAuth } = useContext<ILoginContext>(LoginContext);
  const isAuthLocal = localStorage.getItem("ISAUTH") || false;

  // useEffect(() => {
  //   if (isAuthLocal)
  //     return (
  //       <Routes>
  //       </Routes>
  //     );
  // }, [isAuth]);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to="login" />} />
          <Route element={<AdminLayout />}>
            <Route path="teachers" element={<Teachers />} />
            <Route path="*" element={<Navigate to="teachers" />} />
          </Route>
    </Routes>
  );
}
