import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    font-size: 10px;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Inter', sans-serif;
    background-color: #E5E5E5;
    font-size: 1.6rem;
    @media (min-width: 768px) {
    min-height: 100vh;
    }
  }
`;

export default GlobalStyles;
