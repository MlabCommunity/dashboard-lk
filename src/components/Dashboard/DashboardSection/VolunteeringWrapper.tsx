import styled from "styled-components";

export const VolunteeringStatus = styled.div`
  margin: 0 auto;
  width: 85%;
  padding: 1.4rem 0;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.colorsGray.lightGray3};
  &:nth-child(2) {
    padding-top: 2.2rem;
  }
  &:last-child {
    border-bottom: none;
  }
  p {
    padding-bottom: 0.8rem;
    ${({ theme }) => theme.text12Semi};
    color: ${({ theme }) => theme.colorsGray.midGray2};
  }
  svg {
    margin: 0 0.8rem 0 1.6rem;
  }
  span {
    ${({ theme }) => theme.text14Regular};
    color: ${({ theme }) => theme.colorsGray.darkGray2};
  }
`;
