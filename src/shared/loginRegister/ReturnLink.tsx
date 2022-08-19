import styled from "styled-components";

export const ReturnLink = styled("div")`
  height: 3.2rem;
  background: ${({ theme }) => theme.colorsPrimary.white};
  border: 1px solid ${({ theme }) => theme.colorsGray.lightGray2};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: ${({ theme }) => theme.fontSizes.textLarge};
    font-weight: 500;
    line-height: 2.4rem;
    padding: 0.4rem;
    letter-spacing: -0.003em;
    height: 100%;
    width: 100%;
    text-decoration: none;
    transition: background 0.4s;
    color: #252c32;
    border-radius: 8px;
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
