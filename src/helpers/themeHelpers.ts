import pinkGreen from '@sparknz/set-tokens/dist/js/pinkGreen.json';
import { prop } from 'styled-tools';
import {IRawTheme, IHelperResponse} from './interface';

export const textColor = function():IHelperResponse{
    const template : IRawTheme = pinkGreen;
    const colorObj = template.color.text;
    const Keys = Object.keys(colorObj);
    const returnObj = Keys.reduce((acc, key) => {
        acc[key] = ({theme} : {theme: any}) : string => {
            const suffix = theme.isForegroundInverted ? 'invert' : 'default';
            const colorHex = prop(`${key}.${suffix}`)(theme.color.text);
            return `color: ${colorHex};`;
        }
        return acc;
    }, {})

    return returnObj;
}();

export const backgroundColor = function():IHelperResponse{
    const template : IRawTheme = pinkGreen;
    const colorObj = template.color.background;
    const Keys = Object.keys(colorObj);
    const returnObj = Keys.reduce((acc, key) => {
        acc[key] = ({theme} : {theme: any}) : string => {
            const suffix = theme.isNightMode ? 'invert' : 'default';
            const colorHex = prop(`${key}.${suffix}`)(theme.color.background);
            return `background-color: ${colorHex};`;
        }
        return acc;
    }, {})

    return returnObj;
}();

export const borderColor = function(side?: string):IHelperResponse{
    const template : IRawTheme = pinkGreen;
    const colorObj = template.color.border;
    const Keys = Object.keys(colorObj);
    const returnObj = Keys.reduce((acc, key) => {
        acc[key] = ({theme} : {theme: any}) : string => {
            const suffix = theme.isForegroundInverted ? 'invert' : 'default';
            const colorHex = prop(`${key}.${suffix}`)(theme.color.border);
            return `border-color${side ? `-${side}` : ""}: ${colorHex};`;
        }
        return acc;
    }, {})

    return returnObj;
}();

export const shadowColor = function(side?: string):IHelperResponse{
    const template : IRawTheme = pinkGreen;
    const colorObj = template.color.shadow;
    const Keys = Object.keys(colorObj);
    const returnObj = Keys.reduce((acc, key) => {
        acc[key] = ({theme} : {theme: any}) => {
            const suffix = theme.isForegroundInverted ? 'invert' : 'default';
            const colorHex = prop(`${key}.${suffix}`)(theme.color.shadow);
            return colorHex;
        }
        return acc;
    }, {})

    return returnObj;
}();

export const baseColor = (path: string) => (props) => {
    return prop(`${path}`)(props.theme.color.base);
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