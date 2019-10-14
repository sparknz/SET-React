import pinkGreen from '@sparknz/set-tokens/dist/js/pinkGreen.json';
import { prop } from 'styled-tools';
import {IRawTheme, IHelperResponse} from './interface';

export const textColor2 = function():IHelperResponse{
    const template : IRawTheme = pinkGreen;
    const colorObj = template.color.text;
    const Keys = Object.keys(colorObj);
    const returnObj = Keys.reduce((acc, key) => {
        acc[key] = (props) => {
            const suffix = props.theme.isForegroundInverted ? 'invert' : 'default';
            const colorHex = prop(`${key}.${suffix}`)(props.theme.color.text);
            return `color: ${colorHex};`;
        }
        return acc;
    }, {})

    return returnObj;
}();