import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      backgroundLight: string;

      primary: string;
      primaryLight: string;

      secondary: string;
      secondaryTitle: string;
      secondaryIcon: string;

      text: string;
      textLight: string;
      textHighlight: string;
      textCard: string;

      border: string;

      inputBackground: string;

      error: string;
      success: string;
      warning: string;
      yellow: string;

      gradient: string;
    };
  }

  export interface CustomTheme {
    title: string;

    colors: {
      background: string;
      backgroundLight: string;

      primary: string;
      primaryLight: string;

      secondary: string;
      secondaryTitle: string;
      secondaryIcon: string;

      text: string;
      textLight: string;
      textHighlight: string;
      textCard: string;

      border: string;

      inputBackground: string;

      error: string;
      success: string;
      warning: string;
      yellow: string;

      gradient: string;
    };
  }
}

/* 
title: string;
        colors: {
            background: string;
            backgroundLight: string;
            primary: string;
            secondary: string;
            text: string;
            textLight: string;
            textHighlight: string;
            border: string;
            inputBackground: string;
            error: string;
            success: string;
            warning: string;
            gradient: string;
        };

*/