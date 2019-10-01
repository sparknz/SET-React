import { prop } from 'styled-tools';

export const mainColor = (path, defaultValue?: any) => (props) => {
    const invert = props.theme.isNightMode;
    return prop(`${path}.${invert ? 'invert' : 'default'}`, defaultValue)(props.theme.color.main);
}

export const backgroundColor = (path, defaultValue?: any) => (props) => {
    const invert = props.theme.isNightMode;
    return prop(`${path}.${invert ? 'invert' : 'default'}`, defaultValue)(props.theme.color.background);
}

export const textColor = (path, defaultValue?: any) => (props) => {
    const invert = props.theme.isForgroundInverted;
    return prop(`${path}.${invert ? 'invert' : 'default'}`, defaultValue)(props.theme.color.text);
}

export const borderColor = (path, defaultValue?: any) => (props) => {
    const invert = props.theme.isForgroundInverted;
    return prop(`${path}.${invert ? 'invert' : 'default'}`, defaultValue)(props.theme.color.border);
}