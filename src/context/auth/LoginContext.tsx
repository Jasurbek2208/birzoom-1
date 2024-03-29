import { createContext, useState } from "react";

export const LoginContext = createContext({});

export default function LoginContextApp({ children }: any) {
  const [isAuth, setIsAuth] = useState<boolean>(
    JSON.parse(localStorage.getItem("ISAUTH") || "false")
  );

  return (
    <LoginContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
