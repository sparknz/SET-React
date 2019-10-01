import { prop } from 'styled-tools';

export const mainColor = (path) => (props) => {
    const invert = props.theme.isNightMode;
    return prop(`${path}.${invert ? 'invert' : 'default'}`, 'default')(props.theme.color.main);
}

export const backgroundColor = (path) => (props) => {
    const invert = props.theme.isNightMode;
    return prop(`${path}.${invert ? 'invert' : 'default'}`, 'default')(props.theme.color.background);
}

export const textColor = (path) => (props) => {
    const invert = props.theme.isForegroundInverted;
    return prop(`${path}.${invert ? 'invert' : 'default'}`, 'default')(props.theme.color.text);
}

export const borderColor = (path) => (props) => {
    const invert = props.theme.isForegroundInverted;
    return prop(`${path}.${invert ? 'invert' : 'default'}`, 'default')(props.theme.color.border);
}