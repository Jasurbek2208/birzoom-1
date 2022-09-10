import { BrowserRouter } from "react-router-dom";

//
import { GlobalStyle } from "./assets/style/Global";

// 
import Router from "./router/Router";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}
