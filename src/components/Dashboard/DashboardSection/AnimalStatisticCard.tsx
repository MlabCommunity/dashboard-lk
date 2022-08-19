import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  background: ${({ theme }) => theme.colorsPrimary.white};
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
  border-radius: 0.8rem;
  width: 27.2rem;
  padding: 1.6rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1.2rem;
    p {
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.6rem;
      color: ${({ theme }) => theme.colorsGray.midGray4};
    }
    span {
      padding-top: 0.2rem;
      font-weight: 600;
      font-size: 3rem;
      line-height: 3rem;
      letter-spacing: -0.008em;
      color: ${({ theme }) => theme.colorsGray.darkGray2};
    }
  }
`;
