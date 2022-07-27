import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .logo {
    padding: 2rem 0 1.5rem;
  }
  .title {
    position: relative;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.title};
    line-height: 4.6rem;
    letter-spacing: 0.571428px;
    color: ${({ theme }) => theme.colors.green};
    &::after {
      content: "";
      position: absolute;
      width: 8.4rem;
      height: 0.4rem;
      background-color: ${({ theme }) => theme.colors.green};
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 1.2rem);
    }
    .hidden {
      display: none;
    }
  }
  @media (min-width: 768px) {
    width: 60%;
    .logo {
      padding: 1.85rem 3rem;
      text-align: left;
    }
    .title {
      .hidden {
        display: inline;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 68rem;
  }
`;

interface Props {
  children: ReactNode;
}

const InnerWrapper = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default InnerWrapper;
