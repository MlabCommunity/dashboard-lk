import styled from "styled-components";

export const Inputs = styled("div")`
  text-align: left;
  width: 100%;
  label {
    ${({ theme }) => theme.text13Medium}
    color: ${({ theme }) => theme.colorsGray.darkGray2};
  }
  .errorMessage {
    ${({ theme }) => theme.text12Regular};
    color: ${({ theme }) => theme.colorsStatus.redR500};
  }

  .passwordContainer {
    position: relative;
    button {
      position: absolute;
      top: 4rem;
      height: 2.4rem;
      right: 2rem;
      background: none;
      border: none;
      cursor: pointer;
      overflow: hidden;
    }
    input {
      padding-right: 4rem;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
