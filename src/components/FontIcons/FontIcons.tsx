import styled, { css } from 'styled-components';
import React from 'react';
import { prop } from 'styled-tools';

interface IconProps extends JSX.Element {
    name?: string,
    className?: string,
}

interface BaseIconProps extends JSX.Element {
    inline?: boolean,
    size?: string,
    color?: string,
    cursor?: string,
    marginTop?: string,
    marginRight?: string,
    marginBottom?: string,
    marginLeft?: string,
    margin?: string,
    hoverColor?: string,
    className?: string
}

const BaseFontIcon = styled.span<BaseIconProps>`
    font-family: 'spark-icon-family';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    display: ${({inline}) => (inline ? 'inline' : 'block')};
    background-color: transparent;
    text-decoration: none;
    padding: 0;
    width: ${({ size }) => size || '16px'};
    height: ${({ size }) => size || '16px'};
    font-size: ${({ size }) => size || '16px'};
    color: ${({ color }) => prop(color, '')};
    cursor: ${({ cursor }) => cursor || 'pointer'};
    margin-top: ${({ marginTop }) => marginTop || '0'};
    margin-right: ${({ marginRight }) => marginRight || '0'};
    margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
    margin-left: ${({ marginLeft }) => marginLeft || '0'};
    margin: ${({ margin }) => margin || ''};
    line-height: 1;
    ${({ hoverColor }) => hoverColor
        && css`
            &:hover {
                color: ${prop(hoverColor, '')};
            }
        `};
`;

const FontIcons : React.FunctionComponent<IconProps> = ({ name, className, ...props }) => {
    const lowerCaseName = name.toLowerCase();
    const iconClassName = `icon icon-${lowerCaseName}`;
    const classNameExtracted = `${className || ''} ${iconClassName}`;
    const finalClassName = classNameExtracted.trim();

    if (lowerCaseName !== name && process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn(
            `<Icon>'s 'name' prop should not contain uppercase. It is currently set as '${name}'.`,
        );
    }

    return <BaseFontIcon className={finalClassName} {...props} />;
};

/** @component */
export default FontIcons;
