import styled from "styled-components";

export const DropDownHeader = styled("div")`
  padding: 0 1rem;
  display: flex;
  justify-content: space-evenly;
  gap: 0.8rem;
  cursor: pointer;
`;

export const SelectDateCard = styled("div")`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.6rem;
  height: 3.2rem;
  ${({ theme }) => theme.text14Regular}
  color: ${({ theme }) => theme.colorsGray.darkGray2};
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  border: 1px solid ${({ theme }) => theme.colorsGray.lightGray3};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 0.6rem;
`;

export const DropDownListContainer = styled("div")`
  display: flex;
  flex-direction: column;
  &.active {
    align-self: flex-start;
    transform: translateY(1px);
    img {
      transform: rotate(180deg);
    }
  }
`;

export const DropDown = styled("ul")`
  margin-top: 1rem;
  padding: 1.2rem 1.6rem;
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  border: 1px solid ${({ theme }) => theme.colorsGray.lightGray3};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 0.6rem;
`;

export const Option = styled("li")`
  display: flex;
  align-items: center;
  margin-bottom: 0.8em;
  list-style: none;
  border-radius: 0.4rem;
  cursor: default;
  &:last-child {
    margin-bottom: 0;
  }
  input[type="radio"] {
    appearance: none;
    margin-right: 0.8rem;
    width: 2rem;
    height: 2rem;
    background: ${({ theme }) => theme.colorsGray.lightGray5};
    border: 1px solid ${({ theme }) => theme.colorsGray.midGray5};
    border-radius: 1rem;
    &:checked {
      border: 6px solid ${({ theme }) => theme.colorsPrimary.pr500};
    }
  }
  &:hover {
    background: ${({ theme }) => theme.colorsGray.lightGray4};
  }
`;
