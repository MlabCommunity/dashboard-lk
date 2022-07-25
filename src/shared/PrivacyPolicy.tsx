// import React from "react";
import styled from "styled-components";

type IProps = {
  name: string;
};

export const Policy = styled("div")(
  ({ name }: IProps) => `
  margin: 2rem 0 1.5rem;
  display: ${name === "login" ? "none" : "block"};
  a {
    padding: 0 1rem;
    text-decoration: none;
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 2.2rem;
    text-align: center;
    color: ${name === "register" ? "#232323" : "#77838f"};
    mix-blend-mode: normal;
  }
  @media (min-width: 768px) {
    margin: 7rem 0 0;
    display: ${name === "login" ? "block" : "none"}
  }
`
);
