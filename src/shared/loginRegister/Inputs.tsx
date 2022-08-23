import styled from "styled-components";

export const Inputs = styled("div")`
  width: 100%;
  .passwordContainer {
    position: relative;
    button {
      position: absolute;
      top: 2rem;
      right: 2rem;
      background: none;
      border: none;
      cursor: pointer;
      overflow: hidden;
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
