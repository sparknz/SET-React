import React from 'react'
import styled from 'styled-components';
import { textColor } from '../../helpers/themeHelpers';

const Wrapper = styled.p`
    color: ${textColor('default')}
`;

/** @component */
export default function Text(){
    return <Wrapper>Hello World</Wrapper>
}