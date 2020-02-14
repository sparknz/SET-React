import React from "react";
import { ThemeProvider } from "styled-components";
import theDefault from "@sparknz/set-tokens/dist/js/default.json";
import halloween from "@sparknz/set-tokens/dist/js/halloween.json";

const globalAny: any = global;

const themes = {
    default: theDefault,
    halloween: halloween
};

export default function SparkThemeProvider({ children }) {
    const preferredTheme = globalAny.window.theme
        ? themes[globalAny.window.theme]
        : theDefault;
    const finalTheme = {
        ...preferredTheme,
        isForegroundInverted: false,
        isNightMode: false
    };

    return (
        <ThemeProvider theme={finalTheme}>
            <div>{children}</div>
        </ThemeProvider>
    );
}
