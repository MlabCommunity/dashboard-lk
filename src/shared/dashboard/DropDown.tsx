import { useRef, useState } from "react";
import { ReactComponent as ArrowDown } from "assets/dashboard/ArrowDown.svg";
import styled from "styled-components";
import { useClickOutside } from "../../hooks/useClickOutside";

export const SelectDateCard = styled("div")`
  position: relative;
  display: flex;
  padding: 0.4rem 0.6rem;
  height: 3.2rem;
  ${({ theme }) => theme.text14Regular}
  color: ${({ theme }) => theme.colorsGray.darkGray2};
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  border: 1px solid ${({ theme }) => theme.colorsGray.lightGray3};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 0.6rem;
`;

export const DropDownButton = styled("button")`
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  border: none;
  ${({ theme }) => theme.text14Regular}
  color: ${({ theme }) => theme.colorsGray.darkGray2};
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  cursor: pointer;
  svg {
    margin-left: 0.6rem;
    &.active {
      transform: rotate(180deg);
    }
  }
`;

export const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 500;
  top: 3.2rem;
  right: 0;
`;

export const DropDownList = styled("ul")`
  padding: 1.2rem 1.6rem;
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  border: 1px solid ${({ theme }) => theme.colorsGray.lightGray3};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 0.6rem;
  z-index: 15;
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
    width: 2rem;
    height: 2rem;
    background: ${({ theme }) => theme.colorsGray.lightGray5};
    border: 1px solid ${({ theme }) => theme.colorsGray.midGray5};
    border-radius: 1rem;
    &:checked {
      border: 6px solid ${({ theme }) => theme.colorsPrimary.pr500};
    }
  }
  label {
    padding: 0 0.8rem;
  }
  &:hover {
    background: ${({ theme }) => theme.colorsGray.lightGray4};
  }
`;

export type OptionType = {
  name: string;
  id: string;
};

type DropdownTypes = {
  options: OptionType[];
  // eslint-disable-next-line no-unused-vars
  onChange: (id: string) => void;
};

export const Dropdown = ({ options, onChange }: DropdownTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedOption, setCheckedOption] = useState(options[2].id);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleRadioChange = (id: string) => () => {
    setCheckedOption(id);
    onChange(id);
  };

  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: containerRef,
    refButton: buttonRef,
    handler: toggleOpen,
  });

  return (
    <>
      <DropDownButton type="button" onClick={toggleOpen} ref={buttonRef}>
        {checkedOption}
        <ArrowDown className={`${isOpen && "active"}`} />
      </DropDownButton>
      {isOpen && (
        <DropDownListContainer ref={containerRef}>
          <DropDownList>
            {options.map((option) => (
              <Option key={option.id}>
                <input
                  type="radio"
                  id={option.id}
                  checked={checkedOption === option.id}
                  onChange={handleRadioChange(option.id)}
                />
                <label htmlFor={option.id}>{option.name}</label>
              </Option>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </>
  );
};
