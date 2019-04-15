import React from 'react';
import renderer from 'react-test-renderer';
import styled from 'styled-components';
import 'jest-styled-components';

import SETThemeProvider, {
    backgroundColor,
    textColor,
    borderColor, 
    borderColorLeft,
    borderColorRight, 
    borderColorTop,
    borderColorBottom 
} from './index';

console.warn = jest.fn();

test('It renders without crashing', () => {
    const component = renderer.create(<SETThemeProvider />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})


const TestStyle = styled.div`
    ${backgroundColor.base.white};
    ${textColor.base.primary.base};
    ${borderColor.base.primary.light};
    ${borderColorLeft.base.secondary.light};
    ${borderColorRight.base.secondary.base};
    ${borderColorTop.base.neutral['000']};
    ${borderColorBottom.base.tertiary};

`;

test('Background.base.white returns the correct color', () => {
    const component = renderer.create(<SETThemeProvider>
        <TestStyle />
    </SETThemeProvider>);
    let tree = component.toJSON();
    expect(tree).toHaveStyleRule('color', '#5f259f');
    expect(tree).toHaveStyleRule('background-color', '#ffffff');
    expect(tree).toHaveStyleRule('border-color', '#75529d');
    expect(tree).toHaveStyleRule('border-left-color', '#f9b104');
    expect(tree).toHaveStyleRule('border-right-color', '#ff9b00');
    expect(tree).toHaveStyleRule('border-bottom-color', '#03a9f4');
    expect(tree).toHaveStyleRule('border-top-color', '#f8f9f9');
})


const TestBrandColor = styled.div`
    ${backgroundColor.brand.green.base};
`;


test('Background.brand.green.base returns the correct color and calls a warning', () => {
    expect(console.warn).not.toBeCalled();
    const component = renderer.create(<SETThemeProvider>
        <TestBrandColor />
    </SETThemeProvider>);
    let tree = component.toJSON();
    expect(tree).toHaveStyleRule('background-color', '#00af55');
    expect(console.warn).toBeCalled();
})
