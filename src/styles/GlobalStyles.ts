import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Ubuntu", sans-serif;
    text-align: center;
    background: #F6F6F6;
  }
`;

export default GlobalStyles;
