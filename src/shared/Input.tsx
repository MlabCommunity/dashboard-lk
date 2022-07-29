import styled from "styled-components";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

// interface Animal<T> {
//   name: string;
//   data: T;
// }

// const animal: Animal<string> = { name: "xd", data: "asdasd" };

export const Input = styled("input")<IProps>(
  ({ type }: IProps) => `
  border: none;
  padding: 1rem 1.5rem;
  font-size: 14px;
  line-height: 22px;
  color: #232233;
  opacity: 0.75;
  outline: none;
  letter-spacing: ${type === "password" && "0.2rem"};
  font-family: ${type === "password" ? "Verdana" : "Ubuntu"};
  font-weight: ${type === "password" ? "normal" : "bold"};
  background-color: #fff;
  &::placeholder {
     font-weight: normal;
     font-family: "Ubuntu";
     letter-spacing: ${type === "password" && "0"};
  }
  &:focus {
        outline: none;
    }
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active{
    transition: background-color 5000s;
    
  } 
`
);
