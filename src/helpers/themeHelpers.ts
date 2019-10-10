import { prop } from 'styled-tools';

// export const baseColor = (path: string) => (props) => {
//     return prop(`${path}`)(props.theme.color.base);
// }

export const baseColor = (props) => {
    const colorObj = props.theme.color.base;
    const Keys = Object.keys(colorObj);
    return Keys.reduce((acc, key) => acc[key] = colorObj[key].value, {})
}

export const backgroundColor2 = (props) => {
    const invert = props.theme.isNightMode;
    const colorObj = props.theme.color.background;
    const Keys = Object.keys(colorObj);
    return Keys.reduce((acc, key) => acc[key] = colorObj[key][invert ? 'invert' : 'defualt'], {});
}

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

export const textColorColor2 = (props) => {
    const invert = props.theme.isForegroundInverted;
    const colorObj = props.theme.color.text;
    const Keys = Object.keys(colorObj);
    return Keys.reduce((acc, key) => acc[key] = colorObj[key][invert ? 'invert' : 'defualt'], {});
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

export const shadowColor = (path: string) => (props) => {
    const invert = props.theme.isForegroundInverted;
    const colorHex = prop(`${path}.${invert ? 'invert' : 'default'}`)(props.theme.color.shadow);
    return colorHex;
}

export const breakpoint = (path: string) => (props) => {
    const breakpoint = prop(`${path}`)(props.theme.layout.breakpoint);
    return `@media screen and (max-width: ${breakpoint}px)`
}

export const zIndex = (path: string) => (props) => {
    const zIndex = prop(`${path}`)(props.theme.layout.zIndex);
    return `z-index: ${zIndex};`
}

export const fontSize = (path: string) => (props) => {
    const fontSize = prop(`${path}`)(props.theme.size.font);
    return `font-size: ${fontSize}`;
}

export const spacing = (path: string) => (props) => {
    const spacing = prop(`${path}`)(props.theme.size.spacing);
    return spacing;
}

