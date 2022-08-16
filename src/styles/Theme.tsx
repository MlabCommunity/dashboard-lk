import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#fff",
    green: "#43BE8D",
    dark: "#232233",
    textGrey: "#77838F",
    warning: "#F76659",
  },
  fontSizes: {
    titleLarge: "4.2rem",
    title: "4rem",
    textLarge: "1.6rem",
    textMedium: "1.4rem",
    textSmall: "1.2rem",
  },
};

interface Props {
  children: React.ReactNode;
}

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
