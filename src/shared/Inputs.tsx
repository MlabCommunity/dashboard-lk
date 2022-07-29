import styled from "styled-components";

export const Inputs = styled("div")`
  .errorBackground {
    background-color: #f9e3e3;
  }
  button {
    position: relative;
    margin-left: auto;
    background: none;
    border: none;
    cursor: pointer;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      width: 2px;
      height: 0;
      left: 50%;
      top: 50%;
      background-color: grey;
      transform: translate(-1px, -50%) rotate(-45deg);
      transition: height 0.3s;
    }
    &:hover::after {
      height: 20px;
    }
  }
  .error {
    margin: 0.5rem 0;
    color: #db524e;
    text-align: left;
    padding-left: 0.4rem;
  }
`;
