import styled from "styled-components";

export const ReturnButton = styled("button")`
  padding: 1.5rem;
  background: transparent;
  border: none;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.textLarge};
  line-height: 2.2rem;
  color: #ffffff;
  mix-blend-mode: normal;
  cursor: pointer;
`;
