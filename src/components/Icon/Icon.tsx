
/* eslint-disable no-param-reassign */

import React from 'react';
import tokens from '@sparknz/set-tokens/build/web/tokensWithVariations';
import {
    ThemeProvider, css, FlattenInterpolation, ThemeProps,
} from 'styled-components';
import merge from 'deepmerge';
import { prop } from 'styled-tools';
import { Colors } from '../SETThemeProvider/interfaces';
import { get } from 'lodash';
import styled from 'styled-components';
import { Button, Box, BoxProps } from 'reakit';


interface Props extends BoxProps {
    icon: CSS,
}

type CSS = FlattenInterpolation<ThemeProps<any>>;

function addDynamic(obj, name) {
    obj[name] = ({ theme }) => get(obj, theme[name]);
}

function createColorGetter(iconFunction: (string) => string): Colors {
    const res = {};
    const rec = (thing, otherThing, path): void => {
        Object.keys(thing).forEach((key): void => {
            if (thing[key].value) {
                otherThing[key] = (props): CSS => {
                    if (thing[key].warning) {
                        console.warn(thing[key].warning);
                    }
                    return css`${iconFunction(get(props, `theme.color${path}.${key}.value`).replace('#', ''))}`;
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
    ['main', 'interationPrimary', 'interationSecondary'].forEach(label => addDynamic(res, label));
    return res as Colors;
}


export const Cheveron = createColorGetter((color) => `url("data:image/svg+xml,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' d='M9.429 32l-2.922-2.922L19.584 16 6.507 2.922 9.429 0l16 16z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cuse fill='%23000' fill-rule='nonzero' xlink:href='%23a'/%3E%3Cg mask='url(%23b)' fill='%23${color}'%3E%3Cpath d='M0 0h32v32H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`)
export const Lock = createColorGetter((color) => `url("data:image/svg+xml,%3Csvg width='15' height='18' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath d='M8.766 8.833c0-1.983 1.523-3.501 3.517-3.501 1.99 0 3.513 1.518 3.513 3.5V11h-7.03V8.833zM19.312 11h-1.17V8.833c0-3.266-2.579-5.833-5.86-5.833C9 3 6.423 5.567 6.423 8.833V11H5.25v10h14.063V11z' id='a'/%3E%3C/defs%3E%3Cg transform='translate(-5 -3)' fill='none' fill-rule='evenodd'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cuse fill='%239F9E9F' xlink:href='%23a'/%3E%3Cg mask='url(%23b)' fill='%23${color}'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`)

const Icon = styled(Box)<Props>`
    width: ${prop('size')}px;
    height: ${prop('size')}px;
    background-image: ${prop('icon')};
    display: inline-block;
    background-size: cover;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;


export default ({ icon, size=16, ...props }) => {
    let iconColored: CSS; 
    
    if(typeof icon === 'object' && icon.base.white) {
        iconColored = icon.base.white;
    } else {
        iconColored = icon;
    }
    //debugger;

    return <Icon as="span" size={size} icon={iconColored} {...props} />
}