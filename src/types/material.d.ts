import React from "react";
import { Theme, ThemeOptions } from "@mui/material/styles/createTheme";

type Color = {
  primary: React.CSSProperties["color"];
  secondary: React.CSSProperties["color"];
  white: React.CSSProperties["color"];
  lightWhite: React.CSSProperties["color"];
  darkYellow: React.CSSProperties["color"];
  primaryText: React.CSSProperties["color"];
  darkGray: React.CSSProperties["color"];
  lightGray: React.CSSProperties["color"];
  inputBorder: React.CSSProperties["color"];
  userInput: React.CSSProperties["color"];
  focusedInputBg: React.CSSProperties["color"];
  error: React.CSSProperties["color"];
  crimson: React.CSSProperties["color"];
  mediumDark: React.CSSProperties["color"];
  secondaryText: React.CSSProperties["color"];
  skyblue: React.CSSProperties["color"];
  green: React.CSSProperties["color"];
  inputBorder: React.CSSProperties["color"];
  darkBlue: React.CSSProperties["color"];
  orange: React.CSSProperties["color"]; 
};

declare module "@mui/material/styles/createTheme" {
  interface Theme {
    colors: Color;
  }

  interface ThemeOptions {
    colors: Color;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    textWhite: true;
  }
}