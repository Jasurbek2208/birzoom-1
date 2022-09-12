import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// AUTH
import Login from "../pages/auth/Login";

// ADMIN
import AdminLayout from "../layouts/AdminLayout";
import Teachers from "../pages/admin/teachers/Teachers";

export default function Router() {
  const isAuth = localStorage.getItem("ISAUTH") || false;
  console.log(isAuth);

  return (
    <Routes>
      {!isAuth ? (
        <>
          <Route path="login" element={<Login />} />
          <Route
            path="register"
            element={
              <h1
                style={{
                  margin: "250px",
                  textAlign: "center",
                  fontWeight: "900",
                }}
              >
                Register Page hali yo'q ! <br />
                <br /> 505 😁
              </h1>
            }
          />
          <Route path="*" element={<Navigate to="login" />} />
        </>
      ) : (
        <Route element={<AdminLayout />}>
          <Route path="teachers" element={<Teachers />} />
          <Route path="*" element={<Navigate to="teachers" />} />
        </Route>
      )}
    </Routes>
  );
}
