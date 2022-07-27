import styled from "styled-components";

interface IProps {
  type: string;
  error: boolean;
}

export const Input = styled("input")(
  ({ type, error }: IProps) => `
  border: none;
  padding: 1rem 1.5rem;
  font-size: 14px;
  line-height: 22px;
  color: #232233;
  mix-blend-mode: normal;
  opacity: 0.75;
  outline: none;
  letter-spacing: ${type === "password" && "0.2rem"};
  font-family: ${type === "password" ? "Verdana" : "Ubuntu"};
  background-color: ${error ? "#F9E3E3" : "#fff"};
 
  &::placeholder {
     font-family: "Ubuntu";
     letter-spacing: ${type === "password" && "0"};
  }
  &:focus {
        outline: none;
    }
`
);
