import { ReactNode } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div<{ isReversed: boolean }>`
  background-color: #fff;
  overflow: hidden;
  width: 100vw;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: ${(props) => (props.isReversed ? "row-reverse" : "row")};
    width: 95vw;
    box-shadow: 0px 0px 29px rgba(0, 0, 0, 0.15);
    border-radius: 2rem;
  }
  @media (min-width: 992px) {
    max-width: 110rem;
  }
`;

type WrapperProps = {
  isReversed: boolean;
  children: ReactNode;
};

const LayoutWrapper = ({ isReversed, children }: WrapperProps) => (
  <StyledWrapper isReversed={isReversed}>{children}</StyledWrapper>
);

export default LayoutWrapper;
