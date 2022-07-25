import React from "react";
import Theme from "styles/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import Login from "components/Login/Login";
import Register from "components/Register/Register";

const Wrapper = styled.div`
  background-color: #fff;
  overflow: hidden;
  width: 100vw;

  @media (min-width: 768px) {
    display: flex;
    width: 95vw;
    box-shadow: 0px 0px 29px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  }
  @media (min-width: 992px) {
    max-width: 110rem;
  }
`;

function App() {
  return (
    <>
      <Theme>
        <Wrapper>
          <BrowserRouter>
            <Routes>
              <Route index element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </Theme>
      <GlobalStyles />
    </>
  );
}

export default App;
