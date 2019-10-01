import React from "react";
import { ThemeProvider } from "styled-components";
import pinkGreen from '@sparknz/set-tokens/dist/js/pinkGreen.json';
import purpleOrange from '@sparknz/set-tokens/dist/js/purpleOrange.json';
import halloween from '@sparknz/set-tokens/dist/js/halloween.json';

const globalAny:any = global;

const themes = {
    "pink-green": pinkGreen,
    "purple-orange": purpleOrange,
    "halloween": halloween
}

export default function SparkThemeProvider({ children, theme }) {
  const preferredTheme = globalAny.window.theme ? themes[globalAny.window.theme] : pinkGreen;
  const finalTheme = {
    ...preferredTheme,
    isForegroundInverted: false,
    isNightMode: false,
  }

  return (
    <ThemeProvider theme={finalTheme} >
        <div>{children}</div>
    </ThemeProvider>
  );
}