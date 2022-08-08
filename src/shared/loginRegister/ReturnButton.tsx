import styled from "styled-components";

export const ReturnButton = styled("button")`
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0.65rem 1.5rem;
  background: transparent;
  border: none;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.textLarge};
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.white};
  mix-blend-mode: normal;
  cursor: pointer;
  transition: transform 0.2s;
  svg {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }
  &:hover,
  &:focus {
    svg {
      animation: arrowMove 0.3s ease-out;
    }
  }
  @keyframes arrowMove {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-1.4rem);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
