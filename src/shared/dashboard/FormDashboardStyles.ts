import styled from "styled-components";
import { motion } from "framer-motion";
import { Inputs } from "shared/loginRegister";
import { ReactComponent as Success } from "assets/dashboard/WorkerSuccess.svg";

export { Success };

export const FormWrapper = styled(motion.div)`
  position: relative;
  text-align: left;
  padding: 0;
  max-width: 56rem;
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  border: 1px solid ${({ theme }) => theme.colorsGray.lightGray5};
  box-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32),
    0px 1px 2px rgba(91, 104, 113, 0.32);
  border-radius: 8px;
  .errorMessage {
    ${({ theme }) => theme.text12Regular};
    color: ${({ theme }) => theme.colorsStatus.redR500};
    padding: 0.5rem 0;
  }
`;
export const FormContainer = styled.form`
  button[type="submit"] {
    margin-top: 4rem;
  }
`;
export const InputWrapper = styled(Inputs)`
  padding: 0 2.4rem 2.4rem;
`;
export const Title = styled("h2")`
  padding: 2.4rem 2.4rem 0.8rem;
  ${({ theme }) => theme.heading18Semi};
  color: ${({ theme }) => theme.colorsGray.darkGray2};
`;
export const Description = styled("p")`
  padding: 0 2.4rem 2.4rem;
  ${({ theme }) => theme.text12Regular};
  color: ${({ theme }) => theme.colorsGray.midGray1};
`;
export const Controls = styled("div")`
  padding: 1.6rem 2.4rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.6rem;
  border-top: 1px solid ${({ theme }) => theme.colorsGray.lightGray4};
  button {
    ${({ theme }) => theme.buttonLarge};
    width: auto;
    margin-top: 0;
  }
  button[type="submit"] {
    margin-top: 0;
  }
`;
export const Modal = styled("div")`
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  left: 50%;
  top: 50%;
  width: 95%;
  height: 65%;
  border: 1px solid ${({ theme }) => theme.colorsGray.lightGray5};
  box-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32),
    0px 1px 2px rgba(91, 104, 113, 0.32);
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  border-radius: 0.8rem;
  transform: translate(-50%, -50%);
  z-index: 50;
  svg {
    color: ${({ theme }) => theme.colorsPrimary.pr500};
    transform: scale(1.15);
  }
  @media (min-width: 576px) {
    flex-direction: row;
  }
`;
export const ModalBackground = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(246, 247, 249, 0.85);
  border-radius: 0.8rem;
  z-index: 20;
`;
