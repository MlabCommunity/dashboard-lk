import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colorsBlackandWhite: {
    white: "#ffffff",
    black: "#000000",
  },
  colorsPrimary: {
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
  colorsStatus: {
    statusSuccess: "#47D16C",
    redR500: "#f76659",
    statusFocus: "#1a73e8",
  },
  heading30Semi: {
    "font-weight": "600",
    "font-size": "3rem",
    "line-height": "4rem",
    "letter-spacing": "-0.008em",
  },
  heading24Semi: {
    "font-weight": "600",
    "font-size": "2.4rem",
    "line-height": "3.2rem",
    "letter-spacing": "-0.019em",
  },
  heading20Semi: {
    "font-weight": "600",
    "font-size": "2rem",
    "line-height": "2.6rem",
    "letter-spacing": "-0.01em",
  },
  heading18Semi: {
    "font-weight": "600",
    "font-size": "1.8rem",
    "line-height": "2.4rem",
    "letter-spacing": "-0.014em",
  },
  heading12Semi: {
    "font-weight": "600",
    "font-size": "1.2rem",
    "line-height": "1.6rem",
    "letter-spacing": "0.018em",
  },
  text16Semi: {
    "font-weight": "600",
    "font-size": "1.6rem",
    "line-height": "2.4rem",
    "letter-spacing": "-0.004em",
  },
  text16Medium: {
    "font-weight": "500",
    "font-size": "1.6rem",
    "line-height": "2.4rem",
    "letter-spacing": "-0.008em",
  },
  text14Regular: {
    "font-weight": "400",
    "font-size": "1.4rem",
    "line-height": "2.4rem",
    "letter-spacing": "-0.006em",
  },
  text14Semi: {
    "font-weight": "600",
    "font-size": "1.4rem",
    "line-height": "2.4rem",
    "letter-spacing": "-0.006em",
  },
  text14Medium: {
    "font-weight": "500",
    "font-size": "1.4rem",
    "line-height": "2rem",
    "letter-spacing": "-0.003em",
  },
  text14ReularNumbers: {
    "font-weight": "400",
    "font-size": "1.4rem",
    "line-height": "2.4rem",
    "letter-spacing": "-0.006em",
  },
  text13Medium: {
    "font-weight": "500",
    "font-size": "1.3rem",
    "line-height": "1.8rem",
    "letter-spacing": "0",
  },
  text13Regular: {
    "font-weight": "400",
    "font-size": "1.3rem",
    "line-height": "1.6rem",
    "letter-spacing": "0",
  },
  text12Regular: {
    "font-weight": "400",
    "font-size": "1.2rem",
    "line-height": "1.6rem",
    "letter-spacing": "0",
  },
  text12Semi: {
    "font-weight": "600",
    "font-size": "1.2rem",
    "line-height": "1.6rem",
    "letter-spacing": "0",
  },
  buttonXLarge: {
    height: "4.8rem",
    "border-radius": "0.8rem",
    padding: "1.2rem 1.6rem",
  },
  buttonLarge: {
    height: "4rem",
    "border-radius": "0.8rem",
    padding: "0.8rem 1.6rem",
  },
  buttonMedium: {
    height: "3.2rem",
    "border-radius": "0.6rem",
    padding: "0.4rem 1.2rem",
  },
};

const Theme = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
