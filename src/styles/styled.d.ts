import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      primary: string;
      secondary: string;
      gray100: string;
      gray300: string;
      gray500: string;
      gray900: string;
    };
    fonts: {
      primary: string;
    };
  }
}