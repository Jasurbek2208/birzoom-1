import { BrowserRouter } from "react-router-dom";

//
import { GlobalStyle } from "./assets/style/Global";
import LoginContextApp from "./context/auth/LoginContext";

//
import Router from "./router/Router";

export default function App() {
  return (
    <BrowserRouter>
      <LoginContextApp>
        <GlobalStyle />
        <Router />
      </LoginContextApp>
    </BrowserRouter>
  );
}
