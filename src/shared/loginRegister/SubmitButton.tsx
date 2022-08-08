import styled from "styled-components";

interface IProps {
  name: string;
}

export const SubmitButton = styled("button")(
  ({ name }: IProps) => `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.9rem auto 1.2rem;
  width: 100%;
  max-width: 34.4rem;
  height: 5.6rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.5px;
  border: none;
  color: #fff;
  font-family: "Ubuntu";
  text-transform: uppercase;
  background-color: #43be8d;
  filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.15));
  border-radius: 10px; 
  cursor: pointer;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 20%;
    height: 2px;
    bottom: 20%;
    transition: opacity .3s, transform .4s;
    opacity: 0;
  }
  &:hover, &:focus {
    &::before {
      transform: translateX(3.4rem);
      opacity: 1;
    }
  };
  &::after {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 25%;
    height: 2px;
    bottom: 20%;
    transition: opacity .3s, transform .4s;
    opacity:0;
  }
  &:hover,&:focus {
    &::after {
      transform: translateX(-3.4rem);
      opacity: 1;
    }
  };
  @media(min-width: 768px) {
    margin: ${name === "login" ? "3.7rem auto" : "1.9rem auto 1.1rem"};
  }
  `
);
