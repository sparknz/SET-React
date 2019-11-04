import pinkGreen from '@sparknz/set-tokens/dist/js/pinkGreen.json';
import { prop } from 'styled-tools';
import {IRawTheme, IHelperResponse, IBreakpoints, IZIndex, IFontSize, ISpacing} from './interface';

const template : IRawTheme = pinkGreen;

export const textColor = function():IHelperResponse{
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

const genBorderColor = function(side?: string):IHelperResponse{
    const colorObj = template.color.border;
    const Keys = Object.keys(colorObj);
    const returnObj = Keys.reduce((acc, key) => {
        acc[key] = ({theme} : {theme: any}) : string => {
            const suffix = theme.isForegroundInverted ? 'invert' : 'default';
            const colorHex = prop(`${key}.${suffix}`)(theme.color.border);
            if (side){
                return `border-${side}-color: ${colorHex};`;
            }
            return `border-color: ${colorHex};`;
        }
        return acc;
    }, {})

    return returnObj;
};

export const borderColor = genBorderColor();
export const borderTopColor = genBorderColor('top');
export const borderRightColor = genBorderColor('right');
export const borderBottomColor = genBorderColor('bottom');
export const borderLeftColor = genBorderColor('left');

export const shadowColor = function(side?: string):IHelperResponse{
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

export const baseColor = function(){
    return template.color.base;
}()

export const breakpoint = function(): IBreakpoints{
    const breakpoints = template.layout.breakpoint;
    const keys = Object.keys(breakpoints);
    return keys.reduce((acc, key) => {
        acc[key] = `@media screen and (max-width: ${breakpoints[key]}px)`
        return acc;
    }, {});
}()

export const zIndex = function(): IZIndex{
    const zIndex = template.layout.zIndex;
    const keys = Object.keys(zIndex);
    return keys.reduce((acc, key) => {
        acc[key] = `z-index: ${zIndex[key]};`
        return acc;
    }, {}) 
}()

export const fontSize = function(): IFontSize{
    const fontSize = template.size.font;
    const keys = Object.keys(fontSize);
    return keys.reduce((acc, key) => {
        acc[key] = `font-size: ${fontSize[key]};`
        return acc;
    }, {}) 
}()

export const spacing = function(): ISpacing{
    const spacing = template.size.spacing;
    const keys = Object.keys(fontSize);
    return keys.reduce((acc, key) => {
        acc[key] = spacing[key];
        return acc;
    }, {}) 
}()