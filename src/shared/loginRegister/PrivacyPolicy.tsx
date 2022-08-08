import styled from "styled-components";

interface IProps {
  name: string;
  side: string;
}

export const Policy = styled("div")(
  ({ name, side }: IProps) => `
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
    transition: color .3s;
    &:hover {
      color: #232323;
    }
  }
  @media (min-width: 768px) {
    margin: ${side === "right" ? "0.4rem 0 0.9rem" : "2rem 0 0"};
    display: ${name === "login" ? "block" : "none"};
  }
`
);
