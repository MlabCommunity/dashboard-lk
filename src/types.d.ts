import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      green: string;
      dark: string;
      textGrey: string;
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
