import { createGlobalStyle } from "styled-components";

import "./fonts.css";
import "./icons.css";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-style: normal;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }
`;
