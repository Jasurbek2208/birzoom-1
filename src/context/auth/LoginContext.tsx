import { createContext, useState } from "react";

export const LoginContext = createContext({});

export default function LoginContextApp() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    ></LoginContext.Provider>
  );
}
