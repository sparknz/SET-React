import React from 'react';
import {Box, BoxProps} from 'reakit';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import PropTypes from 'prop-types';
import mapSizeToPixels from '../../util/mapSizeToPixels';


const Grid = ({ gutter, className, ...props }) => (
    <Wrapper gutterSize={gutter} className={`aem-Grid aem-Grid--12 ${className}`} {...props} />
);

export default Grid;

const Wrapper = styled<BoxProps>`
    display: flex;
    align-items: center;
    box-sizing: border-box;

    > .aem-GridColumn {
        margin-right: ${mapSizeToPixels(prop('gutterSize'))};

        &:last-child {
            margin-right: 0
        }
    }
`;

Grid.propTypes = {
    children: PropTypes.node,
    gutter: PropTypes.string,
    className: PropTypes.string,
};

Grid.defaultProps = {
    children: undefined,
    gutter: '2',
    className: '',
};
