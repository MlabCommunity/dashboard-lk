import React from "react";

import styled from "styled-components";

const Input = styled.input`
  border: none;
  padding: 1rem 1.5rem;
  font-size: 14px;
  line-height: 22px;
  color: #232233;
  mix-blend-mode: normal;
  opacity: 0.75;
  outline: none;
`;

const InputEmail = () => <Input type="email" placeholder="Your Email" />;

export default InputEmail;
