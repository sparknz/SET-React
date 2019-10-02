import styled from 'styled-components';
import { borderColor } from '../helpers/themeHelpers';

export default styled.div`
    height: 80px;
    width: 80px;
    border: 5px solid;
    ${borderColor('default')};
`;