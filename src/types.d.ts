import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colorsPrimary: {
      white: string;
      black: string;
      pr900: string;
      pr800: string;
      pr700: string;
      pr600: string;
      pr500: string;
      pr400: string;
      pr300: string;
      pr200: string;
      pr100: string;
      pr050: string;
    };
    colorsGray: {
      darkGray1: string;
      darkGray2: string;
      darkGray3: string;
      darkGray4: string;
      darkGray5: string;
      midGray1: string;
      midGray2: string;
      midGray3: string;
      midGray4: string;
      midGray5: string;
      lightGray1: string;
      lightGray2: string;
      lightGray3: string;
      lightGray4: string;
      lightGray5: string;
    };
    colorsRed: {
      r800: string;
      r700: string;
      r600: string;
      r500: string;
      r100: string;
    };
    fontSizes: {
      titleLarge: string;
      title: string;
      textLarge: string;
      textMedium: string;
      textSmall: string;
    };
  }
}
