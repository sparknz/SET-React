import theDefault from "@sparknz/set-tokens/dist/js/default.json";
import { prop } from "styled-tools";
import * as i from "./interface";

const template = theDefault;

export const textColor = (function(): i.ITextColor {
    const colorObj = template.color.text;
    const Keys = Object.keys(colorObj);
    const returnObj = Keys.reduce((acc, key) => {
        acc[key] = ({ theme }: { theme: any }): string => {
            const suffix = theme.isForegroundInverted ? "invert" : "default";
            const colorHex = prop(`${key}.${suffix}`)(theme.color.text);
            return `color: ${colorHex};`;
        };
        return acc;
    }, {}) as i.ITextColor;

    return returnObj;
})();

export const backgroundColor = (function(): i.IBackgrounColor {
    const colorObj = template.color.background;
    const Keys = Object.keys(colorObj);
    const returnObj = Keys.reduce((acc, key) => {
        acc[key] = ({ theme }: { theme: any }): string => {
            const suffix = theme.isNightMode ? "invert" : "default";
            const colorHex = prop(`${key}.${suffix}`)(theme.color.background);
            return `background-color: ${colorHex};`;
        };
        return acc;
    }, {}) as i.IBackgrounColor;

    return returnObj;
})();

const genBorderColor = function(side?: string): i.IBorderColor {
    const colorObj = template.color.border;
    const Keys = Object.keys(colorObj);
    const returnObj = Keys.reduce((acc, key) => {
        acc[key] = ({ theme }: { theme: any }): string => {
            const suffix = theme.isForegroundInverted ? "invert" : "default";
            const colorHex = prop(`${key}.${suffix}`)(theme.color.border);
            if (side) {
                return `border-${side}-color: ${colorHex};`;
            }
            return `border-color: ${colorHex};`;
        };
        return acc;
    }, {}) as i.IBorderColor;

    return returnObj;
};

export const borderColor = genBorderColor();
export const borderTopColor = genBorderColor("top");
export const borderRightColor = genBorderColor("right");
export const borderBottomColor = genBorderColor("bottom");
export const borderLeftColor = genBorderColor("left");

export const shadowColor = (function(side?: string): i.IShadowColor {
    const colorObj = template.color.shadow;
    const Keys = Object.keys(colorObj);
    const returnObj = Keys.reduce((acc, key) => {
        acc[key] = ({ theme }: { theme: any }) => {
            const suffix = theme.isForegroundInverted ? "invert" : "default";
            const colorHex = prop(`${key}.${suffix}`)(theme.color.shadow);
            return colorHex;
        };
        return acc;
    }, {}) as i.IShadowColor;

    return returnObj;
})();

export const baseColor = (function() {
    return template.color.base;
})();

export const breakpoint = (function(): i.IBreakpoint {
    const breakpoints = template.layout.breakpoint;
    const keys = Object.keys(breakpoints);
    return keys.reduce((acc, key) => {
        acc[key] = `@media screen and (max-width: ${breakpoints[key]}px)`;
        return acc;
    }, {}) as i.IBreakpoint;
})();

export const zIndex = (function(): i.IZIndex {
    const zIndex = template.layout.zIndex;
    const keys = Object.keys(zIndex);
    return keys.reduce((acc, key) => {
        acc[key] = `z-index: ${zIndex[key]};`;
        return acc;
    }, {}) as i.IZIndex;
})();

export const fontSize = (function(): i.IFontSize {
    const fontSize = template.size.font;
    const keys = Object.keys(fontSize);
    return keys.reduce((acc, key) => {
        acc[key] = `font-size: ${fontSize[key]};`;
        return acc;
    }, {}) as i.IFontSize;
})();

export const spacing = (function(): i.ISpacing {
    const spacing = template.size.spacing;
    const keys = Object.keys(spacing);
    const out = keys.reduce((acc, key) => {
        acc[key] = spacing[key];
        return acc;
    }, {}) as i.ISpacing;
    return out;
})();
