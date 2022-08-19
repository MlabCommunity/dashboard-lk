import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colorsPrimary: {
    white: "#ffffff",
    black: "#000000",
    pr900: "#194634",
    pr800: "#205b43",
    pr700: "#287154",
    pr600: "#369871",
    pr500: "#43BE8D",
    pr400: "#69cba4",
    pr300: "#8fd8bb",
    pr200: "#bbe8d6",
    pr100: "#e1f5ed",
    pr050: "#f0faf6",
  },
  colorsGray: {
    darkGray1: "#1a2024",
    darkGray2: "#252c32",
    darkGray3: "#303940",
    darkGray4: "#3c464e",
    darkGray5: "#48535b",
    midGray1: "#5b6871",
    midGray2: "#6e7c87",
    midGray3: "#84919a",
    midGray4: "#9aa6ac",
    midGray5: "#b0babf",
    lightGray1: "#d5dadd",
    lightGray2: "#dde2e4",
    lightGray3: "#e5e9eb",
    lightGray4: "#eef0f2",
    lightGray5: "#f6f7f9",
  },
  colorsRed: {
    r800: "#8d0104",
    r700: "#cc0905",
    r600: "#f2271c",
    r500: "#f76659",
    r100: "#ffefeb",
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
