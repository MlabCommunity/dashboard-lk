import styled from "styled-components";

export const SwitchLink = styled("div")`
  display: flex;
  align-items: center;
  margin: 3.7rem auto 2.5rem;
  width: 100%;
  max-width: 20.9rem;
  height: 5.6rem;
  border: 2px solid ${({ theme }) => theme.colors.white};
  font-family: "Ubuntu";
  text-transform: uppercase;
  background: transparent;
  border-radius: 10px;
  box-shadow: -3px 4px 15px rgba(0, 0, 0, 0.1);
  a {
    position: relative;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.textLarge};
    line-height: 18px;
    letter-spacing: 0.5px;
    display: block;
    padding: 1.7rem;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    &::before {
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.colors.white};
      left: 0;
      width: 50%;
      height: 2px;
      bottom: 20%;
      transition: opacity 0.4s, transform 0.4s;
      opacity: 0;
    }
    &:hover,
    &:focus {
      &::before {
        transform: translateX(30px);
        opacity: 1;
      }
    }
    &::after {
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.colors.white};
      width: 50%;
      right: 0;
      height: 2px;
      bottom: 20%;
      transition: opacity 0.4s, transform 0.4s;
      opacity: 0;
    }
    &:hover,
    &:focus {
      &::after {
        transform: translateX(-30px);
        opacity: 1;
      }
    }
  }
`;
