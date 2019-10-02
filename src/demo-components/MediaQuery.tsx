import styled from 'styled-components';
import { textColor, breakpoint } from '../helpers/themeHelpers';

export default styled.h1`
    ${textColor('success')}
    ${breakpoint('tablet')}{
        ${textColor('error')}
    }
`;