import React from 'react';
import {breakpoint, textColor, fontSize} from '../../helpers/themeHelpers';
import styled from 'styled-components';

const BaseText = styled.p`
    ${textColor('default')}
    padding: 0;
    margin: 0;
`

/** @visibleName Text */
export const Xs = styled(BaseText)`
    ${fontSize('xs')}
    ${breakpoint('tablet')}{
        ${fontSize('xxs')}
    }
`

export const Small = styled(BaseText)`
    ${fontSize('small')}
    ${breakpoint('tablet')}{
        ${fontSize('xs')}
    }
`

export const Default = styled(BaseText)`
    ${fontSize('default')}
    ${breakpoint('tablet')}{
        ${fontSize('small')}
    }
`

export const Large = styled(BaseText)`
    ${fontSize('large')}
    ${breakpoint('tablet')}{
        ${fontSize('default')}
    }
`

export const Xl = styled(BaseText)`
    ${fontSize('xl')}
    ${breakpoint('tablet')}{
        ${fontSize('large')}
    }
`

export const Xxl = styled(BaseText)`
    ${fontSize('xxl')}
    ${breakpoint('tablet')}{
        ${fontSize('xl')}
    }
`

export const Xxxl = styled(BaseText)`
    ${fontSize('xxxl')}
    ${breakpoint('tablet')}{
        ${fontSize('xxl')}
    }
`