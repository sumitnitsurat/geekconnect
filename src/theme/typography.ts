import React from "react";

const DEFAULT_STYLE = {
  lineHeight: "normal",
  letterSpacing: 0,
  textTransform: "none" as React.CSSProperties["textTransform"],
};

export const REGULAR_FONT = 400;
export const BOLD_FONT_MEDIUM = "bold";
export const BOLD_FONT = 700;

export default {
  fontFamily: "Lato, sans-serif",
  fontWeightRegular: REGULAR_FONT,
  fontWeightBold: REGULAR_FONT,
  fontWeightMedium: BOLD_FONT_MEDIUM as React.CSSProperties["fontWeight"],
  h1: {
    ...DEFAULT_STYLE,
    fontWeight: BOLD_FONT,
    fontSize: '1.5rem',
  },
  h2: {
    ...DEFAULT_STYLE,
    fontWeight: BOLD_FONT,
    fontSize: '1.125rem',
  },
  h3: {
    ...DEFAULT_STYLE,
    fontWeight: REGULAR_FONT,
    fontSize: '1.125rem',
  },
  body1: {
    ...DEFAULT_STYLE,
    fontWeight: BOLD_FONT,
    fontSize: '1rem',
  },
  body2: {
    ...DEFAULT_STYLE,
    fontWeight: REGULAR_FONT,
    fontSize: '1rem',
  },
  caption: {
    ...DEFAULT_STYLE,
    fontWeight: REGULAR_FONT,
    fontSize: '0.875rem',
  },
  subtitle1: {
    ...DEFAULT_STYLE,
    fontWeight: BOLD_FONT,
    fontSize: '0.875rem',
  },
  subtitle2: {
    ...DEFAULT_STYLE,
    fontWeight: BOLD_FONT,
    fontSize: '0.75rem',
  },
  overline: {
    ...DEFAULT_STYLE,
    fontWeight: REGULAR_FONT,
    fontSize: '0.75rem',
  },
};