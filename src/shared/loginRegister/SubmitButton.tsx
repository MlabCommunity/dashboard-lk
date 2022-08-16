import styled from "styled-components";

interface IProps {
  name: string;
}

export const SubmitButton = styled("button")(
  ({ name }: IProps) => `
  position: relative;
  margin-top: ${name === "next" ? "0" : "1rem"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.8rem;
  border: ${name === "prev" ? "1px solid #DDE2E4" : "none"};
  box-shadow: ${name === "prev" && "0px 1px 2px rgba(16, 24, 40, 0.05)"};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: -0.004em;
  color: ${name === "prev" ? "#252C32" : "#F6F7F9"};
  font-family: "Inter";
  background: ${name === "prev" ? "transparent" : "#369871"};
  border-radius: 0.8rem; 
  transition: background .4s;
  cursor: pointer;
  svg {
    margin-right: ${name === "prev" ? "1rem" : "0"};
    margin-left: ${name === "next" ? "1rem" : "0"};
    path {
      color: ${name === "prev" ? "#3C464E" : "#fff"};
    }
    transform: rotate(${name === "prev" ? "180deg" : "0"});
  }
  &:hover {
    background: ${name === "next" ? "#287154" : "#E5E5E5"}
  }
  @media (min-width: 768px) {
     margin-top: 1rem;
  }
  `
);
