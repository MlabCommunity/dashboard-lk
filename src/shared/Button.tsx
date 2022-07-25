import styled from "styled-components";

type IProps = {
  name: string;
};

export const Button = styled("button")(
  ({ name }: IProps) => `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3.7rem auto 2.5rem;
  padding: 1.7rem;
  width: 100%;
  max-width: ${name === "login" ? "34.4rem" : "20.9rem"};
  height: 5.6rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.5px;
  border: ${name === "login" ? "none" : "2px solid #fff"};
  color: #fff;
  font-family: "Ubuntu";
  text-transform: uppercase;
  background: ${name === "register" && "transparent"} ;
  background-color: ${name === "login" && "#43be8d"};
  filter: ${
    name === "login"
      ? "drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.15))"
      : "drop-shadow(-5px 4px 10px rgba(0, 0, 0, 0.25))"
  };
  border-radius: 10px; 
  cursor: pointer;
  a {
    text-decoration: none;
    color: #fff;
  }
  `
);
