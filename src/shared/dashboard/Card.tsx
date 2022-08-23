import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  background: ${({ theme }) => theme.colorsPrimary.white};
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
  border-radius: 0.8rem;
`;
