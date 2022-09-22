import styled from "styled-components";

export const FormWrapper = styled("div")`
  padding: 2.4rem 0;
  margin: 0 auto;
  width: clamp(27rem, 80vw, 56rem);
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
  border-radius: 8px;
  @media (min-width: 768px) {
    padding: 4rem 0 2.4rem;
    margin: unset;
  }
`;
export const FormContainer = styled("form")`
  text-align: left;
  .controls {
    padding: 1.6rem 2.4rem 0;
    display: flex;
    justify-content: flex-end;
    gap: 1.6rem;
    border-top: 1px solid ${({ theme }) => theme.colorsGray.lightGray4};
    button,
    div a {
      ${({ theme }) => theme.buttonLarge}
    }
    button {
      margin-top: 0;
    }
    div {
      height: auto;
    }
  }
  .photos-title {
    ${({ theme }) => theme.text13Medium};
    color: ${({ theme }) => theme.colorsGray.darkGray2};
  }
  .errorMessage {
    ${({ theme }) => theme.text12Regular};
    color: ${({ theme }) => theme.colorsStatus.redR500};
  }
`;

export const FileInputWrapper = styled("div")`
  width: 100%;
  height: 4rem;
  ${({ theme }) => theme.text14Regular};
  color: ${({ theme }) => theme.colorsGray.darkGray2};
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  border: 1px solid ${({ theme }) => theme.colorsGray.lightGray1};
  border-radius: 0.6rem;
  outline: none;
  &:focus {
    border: 1px solid #1a73e8;
  }
  label {
    padding-left: 1.6rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ theme }) => theme.text14Regular};
    color: ${({ theme }) => theme.colorsGray.midGray4};
    overflow: hidden;
    cursor: pointer;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 4rem;
      background: ${({ theme }) => theme.colorsGray.lightGray4};
      border-left: 1px solid ${({ theme }) => theme.colorsGray.lightGray1};
      border-radius: 0 0.5rem 0.5rem 0;
    }
  }
`;
