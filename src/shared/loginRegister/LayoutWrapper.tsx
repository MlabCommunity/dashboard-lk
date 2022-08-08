import { ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledWrapper = styled(motion.div)<{ isreversed: boolean }>`
  background-color: #fff;
  overflow: hidden;
  width: 100vw;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: ${(props) => (props.isreversed ? "row-reverse" : "row")};
    width: 95vw;
    box-shadow: 0px 0px 29px rgba(0, 0, 0, 0.15);
    border-radius: 2rem;
  }
  @media (min-width: 992px) {
    max-width: 110rem;
  }
`;

interface WrapperProps {
  isreversed: boolean;
  children: ReactNode;
}

const LayoutWrapper = ({ isreversed, children }: WrapperProps) => (
  <StyledWrapper
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
    isreversed={isreversed}
  >
    {children}
  </StyledWrapper>
);

export default LayoutWrapper;
