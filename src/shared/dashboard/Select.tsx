// import { useEffect, useState } from "react";
import styled from "styled-components";
// import { Field, useField } from "formik";
// import { at } from "lodash";

export const SelectField = styled("select")`
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

// // interface SelectProps {
// //   // selectLabel: string;
// //   // selectId: string;
// //   // options: string[];
// //   getSelectedValue: any;
// //   props: any;
// // }

// // eslint-disable-next-line arrow-body-style
// export const Select = (
//   // selectLabel,
//   // selectId,
//   // options,
//   // getSelectedValue,
//   props: any
// ) => {
//   const { getSelectedValue, selectId, options, ...rest } = props;
//   const [selectedValue, setSelectedValue] = useState("");
//   useEffect(() => {
//     getSelectedValue(selectedValue);
//   }, [selectedValue]);

//   const [field, meta] = useField(props);

//   const [touched, error] = at(meta, "touched", "error");
//   // const [disabledSelect, setDisabledSelect] = useState(false);
//   // eslint-disable-next-line consistent-return
//   const renderHelperText = () => {
//     if (selectedValue === "" && touched && error) {
//       return error;
//     }
//   };
//   // const handleDisabledSelect = () => {
//   //   if (selectedValue === "Inne") {
//   //     setDisabledSelect(true);
//   //   }
//   // };
//   const handleValue = (e: any) => {
//     renderHelperText();
//     setSelectedValue(e.target.value);
//     // handleDisabledSelect();
//   };

//   return (
//     <Field
//       {...field}
//       // disabled={selectLabel === "Rasa" && disabledSelect}
//       onChange={(e: any) => handleValue(e)}
//       value={selectedValue}
//       as={SelectField}
//       id={selectId}
//       style={{
//         border:
//           selectedValue === "" &&
//           meta.touched &&
//           meta.error &&
//           true &&
//           "1px solid #F76659",
//       }}
//       error={meta.touched && meta.error && true}
//       helperText={renderHelperText()}
//       {...rest}
//     >
//       <option value="" disabled hidden>
//         Wybierz z listy
//       </option>
//       {options.map((option: any) => (
//         <option key={option} value={option}>
//           {option}
//         </option>
//       ))}
//     </Field>
//   );
// };

export {};
