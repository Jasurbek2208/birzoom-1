import { Navigate, Route, Routes } from "react-router-dom";

// AUTH
import Login from "..//assets/pages/auth/Login";

// ADMIN
import AdminLayout from "../layouts/AdminLayout";
import Teachers from "../assets/pages/admin/teachers/Teachers";

export default function Router() {
  const isAuth = false;

  return (
    <Routes>
      {!isAuth ? (
        <Route element={<AdminLayout />}>
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
        </Route>
      ) : (
        <Route element={<AdminLayout />}>
          <Route path="teachers" element={<Teachers />} />
          <Route path="*" element={<Navigate to="teachers" />} />
        </Route>
      )}
    </Routes>
  );
}
