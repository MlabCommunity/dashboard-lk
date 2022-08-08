import styled from "styled-components";

interface IProps {
  name: string;
  side: string;
}

export const SocialLogin = styled("div")(
  ({ name, side }: IProps) => `
  margin-bottom: ${name === "login" && "1rem"};
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    padding-right: 1.5rem;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: ${name === "login" ? "#77838f" : "#fff"};
    mix-blend-mode: normal;
    opacity: ${name === "login" ? "0.75" : "1"};
  }
  a {
    color: #43be8d;
    transition: transform .3s;
    svg {
      margin: .4rem .7rem;
      filter: ${
        name === "login"
          ? "drop-shadow(-4px 4px 6px rgba(0, 0, 0, 0.1))"
          : "drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.15))"
      };
      path {
        color: ${name === "register" && "#fff"}
      }
    }
    &:hover,&:focus {
      transform: scale(1.1);
    }
  }
  @media (min-width: 768px) {
    margin: ${side === "right" ? "0" : "1.5rem 0 4rem"};
  }
  `
);
