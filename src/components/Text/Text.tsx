import React from 'react';
import {breakpoint, textColor, fontSize} from '../../helpers/themeHelpers';
import styled from 'styled-components';
import _ from 'lodash';

const BaseText = styled.p`
    ${textColor('default')}
    padding: 0;
    margin: 0;
`

interface ITextComponents{
    Xs?: React.ElementType;
    Small? : React.ElementType;
    Default?: React.ElementType;
    Large?: React.ElementType;
    Xl?: React.ElementType;
    Xxl?: React.ElementType;
    Xxxl?: React.ElementType;
}

const reducer = (acc: ITextComponents, val: string, index: number, srcArray: string[]) => ({
    ...acc,
    [_.capitalize(val)]: styled(BaseText)`
        ${fontSize(val)}
        ${breakpoint('tablet')}{
            ${fontSize(srcArray[index-1])}
        }
    `
})

const generateTexts = () => {
    return ['xs', 'small', 'default', 'large', 'xl', 'xxl', 'xxxl'].reduce(reducer, {});
}

/** @component */
export default generateTexts();