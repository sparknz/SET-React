import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoint } from '../../helpers/themeHelpers';

enum groupVariants {
    row = "row",
    column = "column"
}

interface IGroupProps {
    variant?: groupVariants;
    desktopSpacing?: string;
    tabletSpacing?: string;
    nowrap?: boolean;
}

const Row = styled.div<IGroupProps>`
display: flex;
flex-wrap: ${props => (props.nowrap ? 'nowrap' : 'wrap')};
align-items: center;

> * {
    margin-right: ${props => spacing(props.desktopSpacing || 'default')};

    &:last-child {
        margin-right: 0;
    }

    ${breakpoint('tablet')} {
        margin-right: ${props => spacing(props.tabletSpacing || 'small')};
    }
}
`;

const Column = styled.div<IGroupProps>`
display: flex;
flex-direction: column;
flex-wrap: ${props => (props.nowrap ? 'nowrap' : 'wrap')};
align-items: center;

> * {
    margin-bottom: ${props => spacing(props.desktopSpacing || 'default')};

    &:last-child {
        margin-bottom: 0;
    }

    ${breakpoint('tablet')} {
        margin-bottom: ${props => spacing(props.tabletSpacing || 'small')};
    }
}
`;

/** @component */
export default function ({ variant, ...props }: IGroupProps): JSX.Element {
    if (variant && !Object.values(groupVariants).includes(variant)) {
        throw new Error(`Variant ${variant} doesnt exist for button`);
    }

    if (variant === groupVariants.row) {
        return <Row {...props} />
    }

    return <Column {...props} />
}