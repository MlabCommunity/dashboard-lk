import styled from "styled-components";

export const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
  border-radius: 0.8rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
