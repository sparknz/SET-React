import React from 'react';
import Button from '../Button';
import styled from 'styled-components';
import {borderRadius, spacing} from '../../helpers/themeHelpers';

const Pill = styled(Button)`
    height: 28px;
    padding: 0 ${spacing('xs')}
    ${borderRadius('circle')}
`

export enum variants {
    primary_blue = "primary_blue",
    primary_white = "primary_white",
    secondary_blue = "secondary_blue",
    secondary_white = "secondary_white",
}

export default ({ variant, ...props }: { variant?: variants }): JSX.Element => {

    if (variant && !Object.values(variants).includes(variant)) {
        throw new Error(`Variant ${variant} doesnt exist for button`);
    }

    return <Pill variant={variant} {...props}/>
};
