import { ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledWrapper = styled(motion.div)`
  padding: 3.2rem;
  width: clamp(30rem, 45vw, 45.6rem);
  background: #ffffff;
  border: 1px solid #f6f7f9;
  box-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32),
    0px 1px 2px rgba(91, 104, 113, 0.32);
  border-radius: 8px;
  .title {
    font-weight: 600;
    font-size: 3rem;
    line-height: 4rem;
    letter-spacing: -0.008em;
    color: #205b43;
  }
  .description {
    padding: 0.8rem 0 4rem;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.006em;
    color: #6e7c87;
  }
  @media (min-width: 768px) {
    transform: translateY(7rem);
  }
`;

interface WrapperProps {
  children: ReactNode;
}

const FormWrapper = ({ children }: WrapperProps) => (
  <StyledWrapper
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </StyledWrapper>
);

export default FormWrapper;
