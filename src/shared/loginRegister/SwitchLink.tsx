import styled from "styled-components";

export const SwitchLink = styled("div")`
  margin: 1rem;
  width: 11.8rem;
  height: 4rem;
  background: #ffffff;
  border: 1px solid #e1f5ed;
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
    padding: 0.8rem 1.6rem;
    letter-spacing: -0.003em;
    height: 100%;
    width: 100%;
    text-decoration: none;
    transition: transform 0.3s;
    color: #252c32;
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
`;

export const Return = styled(SwitchLink)`
  width: 17rem;
  background: transparent;
  box-shadow: none;
  border: none;
  img {
    padding-right: 0.8rem;
  }
  a {
    color: #287154;
  }
`;
