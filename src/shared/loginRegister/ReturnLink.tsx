import styled from "styled-components";

export const ReturnLink = styled("div")`
  height: 3.2rem;
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  border: 1px solid ${({ theme }) => theme.colorsGray.lightGray2};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 0.8rem;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0.4rem;
    height: 100%;
    width: 100%;
    text-decoration: none;
    border-radius: 8px;
    ${({ theme }) => theme.text16Medium};
    color: ${({ theme }) => theme.colorsGray.darkGray2};
    transition: background 0.4s;
    &:hover {
      background: ${({ theme }) => theme.colorsGray.lightGray5};
    }
  }
  @media (min-width: 768px) {
    a {
      padding: 0.8rem 1.6rem;
    }
  }
`;

export const Return = styled(ReturnLink)`
  background: transparent;
  box-shadow: none;
  border: none;
`;
