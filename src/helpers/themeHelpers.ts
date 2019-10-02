import { prop } from 'styled-tools';

export const backgroundColor = (path: string) => (props) => {
    const invert = props.theme.isNightMode;
    const colorHex = prop(`${path}.${invert ? 'invert' : 'default'}`)(props.theme.color.background);
    return `background-color: ${colorHex};`;
}

export const textColor = (path: string) => (props) => {
    const invert = props.theme.isForegroundInverted;
    const colorHex = prop(`${path}.${invert ? 'invert' : 'default'}`)(props.theme.color.text);
    return `color: ${colorHex};`;
}

export const borderColor = (path: string, side?: string) => (props) => {
    const invert = props.theme.isForegroundInverted;
    const colorHex = prop(`${path}.${invert ? 'invert' : 'default'}`)(props.theme.color.border);
    return `border-color${side ? `-${side}` : ""}: ${colorHex};`;
}

export const borderTopColor = (path: string) => {
    borderColor(path, 'top');
}

export const borderRightColor = (path: string) => {
    borderColor(path, 'right');
}

export const borderBottomColor = (path: string) => {
    borderColor(path, 'bottom');
}

export const borderLeftColor = (path: string) => {
    borderColor(path, 'left');
}

export const breakpoint = (path: string) => (props) => {
    const breakpoint = prop(`${path}`)(props.theme.layout.breakpoint);
    return `@media screen and (max-width: ${breakpoint}px)`
}

export const zIndex = (path: string) => (props) => {
    const zIndex = prop(`${path}`)(props.theme.layout.zIndex);
    return `z-index: ${zIndex};`
}

