import { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";
import { motion } from "framer-motion";

export const override: CSSProperties = {
  position: "absolute",
  zIndex: "10",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
};

const StyledWrapper = styled(motion.div)`
  padding: 2.4rem 1.6rem;
  width: clamp(30rem, 80vw, 45.6rem);
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
    padding: 0.8rem 0 1.6rem;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.006em;
    color: #6e7c87;
    .highlighted {
      color: ${({ theme }) => theme.colors.green};
    }
  }
  .stepper-description {
    padding: 0.5rem 0 2.4rem;
    display: flex;
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      width: 50%;
    }
  }
  .MuiStepper-root {
    .MuiStep-root {
      &:first-child {
        .MuiStepLabel-root {
          .MuiStepLabel-iconContainer {
            padding: 0 0.5rem 0 0;
          }
        }
      }
      &:nth-child(3) {
        .MuiStepLabel-root {
          .MuiStepLabel-iconContainer {
            padding: 0 0.5rem;
          }
        }
      }
      &:last-child {
        .MuiStepLabel-root {
          .MuiStepLabel-iconContainer {
            padding: 0 0 0 0.5rem;
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    width: clamp(30rem, 45vw, 45.6rem);
    padding: 3.2rem;
    .description {
      padding-bottom: 4rem;
    }
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
    transition={{ duration: 0.1 }}
    className="mainForm"
  >
    {children}
  </StyledWrapper>
);

export default FormWrapper;
