import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  background: linear-gradient(180deg, #43be8d 8.98%, #0de18c 90.85%), #43be8d;
  box-shadow: inset 0px 0px 29.9351px rgba(0, 0, 0, 0.25);
  .logo {
    padding: 4rem 0 2.4rem;
  }
  .title {
    position: relative;
    padding-top: 5rem;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.title};
    line-height: 4.6rem;
    letter-spacing: 0.571428px;
    color: ${({ theme }) => theme.colors.white};
    &::after {
      content: "";
      position: absolute;
      width: 84px;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.white};
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 12px);
    }
  }
  .description {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.textMedium};
    line-height: 18px;
    color: ${({ theme }) => theme.colors.white};
    mix-blend-mode: normal;
  }
  .return {
    bottom: 0;
    background: ${({ theme }) => theme.colors.dark};
    margin-top: auto;
  }
  @media (min-width: 768px) {
    width: 40%;
    padding-top: 4rem;
    .logo {
      width: 12rem;
    }
    .description {
      padding: 0 5rem;
    }
  }
  @media (min-width: 1200px) {
    width: 42rem;
  }
`;

type Props = {
  children: ReactNode;
};

const GradientWrapper = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default GradientWrapper;
