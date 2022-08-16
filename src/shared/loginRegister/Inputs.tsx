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
  .error {
    margin: 0.5rem 0;
    color: #db524e;
    text-align: left;
    padding-left: 0.4rem;
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
