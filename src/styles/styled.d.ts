import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      primary: string;
      secondary: string;
      gray: {
        100: string;
        300: string;
        500: string;
        900: string;
      };
      green: {
        100: string;
        700: string;
      };
      blue: {
        100: string;
        700: string;
      };
      red: {
        100: string;
        700: string;
      };
      yellow: {
        100: string;
        700: string;
      };
    };
    fonts: {
      primary: string;
    };
  }
}