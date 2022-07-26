import styled from "styled-components";

interface IProps {
  type: string;
}

export const Input = styled("input")(
  ({ type }: IProps) => `
  border: none;
  padding: 1rem 1.5rem;
  font-size: 14px;
  line-height: 22px;
  color: #232233;
  mix-blend-mode: normal;
  opacity: 0.75;
  outline: none;
  font-family: "Ubuntu";
  letter-spacing: ${type === "password" && "0.2rem"};
  font-family: ${type === "password" && "Verdana"};
  &::placeholder {
     font-family: "Ubuntu";
     letter-spacing: ${type === "password" && "0"};
  }
`
);
