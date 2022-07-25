import styled from "styled-components";

type IProps = {
  name: string;
};

export const SocialLogin = styled("div")(
  ({ name }: IProps) => `
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
      margin-right: 1.5rem;
      filter: ${
        name === "login"
          ? "drop-shadow(-4px 4px 6px rgba(0, 0, 0, 0.1))"
          : "drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.15))"
      };
      path {
        color: ${name === "register" && "#fff"};
      }
    }
    &:hover {
      transform: scale(1.1);
    }
  }
  @media (min-width: 768px) {
    margin: 1.5rem 0 0;
  }
  `
);
