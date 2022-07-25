import React from "react";

import styled from "styled-components";

const Input = styled.input`
  border: none;
  padding: 1rem 1.5rem;
  font-size: 14px;
  line-height: 22px;
  color: #232233;
  mix-blend-mode: normal;
  outline: none;
  font-family: Verdana;
  letter-spacing: 0.2rem;
  opacity: 0.75;
  &::placeholder {
    font-family: "Ubuntu";
    letter-spacing: 0;
  }
`;

const InputPassword = () => <Input type="password" placeholder="Password" />;

export default InputPassword;
