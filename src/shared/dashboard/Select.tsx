import styled from "styled-components";
import { Field } from "formik";

const SelectField = styled("select")`
  padding: 1rem 1.5rem;
  width: 100%;
  height: 4rem;
  ${({ theme }) => theme.text14Regular};
  color: ${({ theme }) => theme.colorsGray.midGray4};
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  border: 1px solid ${({ theme }) => theme.colorsGray.lightGray1};
  border-radius: 0.6rem;
  outline: none;
  &:focus {
    border: 1px solid #1a73e8;
  }
  option {
    color: black;
  }
`;

interface SelectProps {
  selectId: string;
  options: string[];
}

// eslint-disable-next-line arrow-body-style
export const Select = ({ selectId, options }: SelectProps) => {
  return (
    <Field defaultValue="" as={SelectField} name={selectId} id={selectId}>
      <option value="" disabled hidden>
        Wybierz z listy
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Field>
  );
};