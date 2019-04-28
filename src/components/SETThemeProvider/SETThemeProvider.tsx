/* eslint-disable no-param-reassign */

import React from 'react';
import tokens from '@sparknz/set-tokens/build/web/tokensWithVariations';
import {
    ThemeProvider, css, FlattenInterpolation, ThemeProps,
} from 'styled-components';
import merge from 'deepmerge';
import { prop } from 'styled-tools';
import { Colors } from './interfaces';

type CSS = FlattenInterpolation<ThemeProps<any>>;

function createColorGetter(property: string): Colors {
    const res = {};
    const rec = (thing, otherThing, path): void => {
        Object.keys(thing).forEach((key): void => {
            if (thing[key].value) {
                otherThing[key] = (props): CSS => {
                    if (thing[key].warning) {
                        console.warn(thing[key].warning);
                    }
                    return css`${property}${prop(`theme.color${path}.${key}.value`)(props)}`;
                };
            } else {
                if (!otherThing[key]) {
                    otherThing[key] = {};
                }
                rec(thing[key], otherThing[key], `${path}.${key}`);
            }
        });
    };
    rec(tokens.base.color, res, '');
    return res as Colors;
}

export const backgroundColor: Colors = createColorGetter('background-color: ');
export const textColor: Colors = createColorGetter('color: ');
export const borderColor: Colors = createColorGetter('border-color: ');
export const borderColorLeft: Colors = createColorGetter('border-left-color: ');
export const borderColorRight: Colors = createColorGetter('border-right-color: ');
export const borderColorTop: Colors = createColorGetter('border-top-color: ');
export const borderColorBottom: Colors = createColorGetter('border-bottom-color: '); 

declare global {
    interface Window {
        theme?: string;
    }
}


export default ({ theme = window.theme || 'purple-orange', ...props }): JSX.Element => {
    const constructedTheme = merge(tokens.base, tokens.themes[theme] || {});
    return <ThemeProvider {...props} theme={constructedTheme} />;
};

