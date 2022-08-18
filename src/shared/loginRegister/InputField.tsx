import styled from "styled-components";
import { at } from "lodash";
import { useField } from "formik";

const Input = styled("input")`
  padding: 1rem 1.5rem;
  font-size: 1.4rem;
  line-height: 2.2rem;
  letter-spacing: -0.006em;
  color: #232233;
  opacity: 0.75;
  outline: none;
  width: 100%;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d5dadd;
  border-radius: 6px;
  &::placeholder {
    font-weight: normal;
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

export default function InputField(props: any) {
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
}
