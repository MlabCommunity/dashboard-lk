import { PropsWithChildren } from "react";
import styled, { CSSProperties } from "styled-components";
import { motion } from "framer-motion";

export const override: CSSProperties = {
  position: "absolute",
  zIndex: "10",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
};

export const StyledWrapper = styled(motion.div)`
  padding: 2.4rem 1.6rem;
  width: clamp(30rem, 80vw, 45.6rem);
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  border: 1px solid ${({ theme }) => theme.colorsGray.lightGray5};
  box-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32),
    0px 1px 2px rgba(91, 104, 113, 0.32);
  border-radius: 8px;

  .title {
    ${({ theme }) => theme.heading30Semi};
    color: ${({ theme }) => theme.colorsPrimary.pr800};
  }
  .description {
    padding: 0.8rem 0 1.6rem;
    ${({ theme }) => theme.text14Regular};
    color: ${({ theme }) => theme.colorsGray.midGray2};
    .highlighted {
      color: ${({ theme }) => theme.colorsPrimary.pr500};
    }
  }
  .stepper-description {
    padding: 0.5rem 0 2.4rem;
    display: flex;
    p {
      ${({ theme }) => theme.text12Regular};
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

export const FormWrapper = ({ children }: PropsWithChildren) => (
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
