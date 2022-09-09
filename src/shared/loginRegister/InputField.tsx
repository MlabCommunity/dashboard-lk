import styled from "styled-components";
import { at } from "lodash";
import { useField } from "formik";

const Input = styled("input")`
  padding: 1rem 1.5rem;
  width: 100%;
  height: 4rem;
  ${({ theme }) => theme.text14Regular};
  color: ${({ theme }) => theme.colorsGray.darkGray2};
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  border: 1px solid ${({ theme }) => theme.colorsGray.lightGray1};
  border-radius: 0.6rem;
  outline: none;
  &::placeholder {
    ${({ theme }) => theme.text14Regular};
    color: ${({ theme }) => theme.colorsGray.midGray4};
    font-family: "Inter";
  }
  &:focus {
    border: 1px solid #1a73e8;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s;
  }
`;

export const InputField = (props: any) => {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  const [touched, error] = at(meta, "touched", "error");

  const renderHelperText = () => {
    if (touched && error) {
      return error;
    }
    return error;
  };

  return (
    <Input
      style={{ border: meta.touched && meta.error && true && "1px solid red" }}
      error={meta.touched && meta.error && true}
      helperText={renderHelperText()}
      {...field}
      {...rest}
    />
  );
};
