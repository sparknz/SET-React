import React from "react";
import renderer from "react-test-renderer";
import styled from "styled-components";
import "jest-styled-components";

import SETThemeProvider, {
    backgroundColor,
    textColor,
    borderColor,
    borderColorLeft,
    borderColorRight,
    borderColorTop,
    borderColorBottom
} from "./index";

console.warn = jest.fn();

test("It renders without crashing", () => {
    const component = renderer.create(<SETThemeProvider />);
    let tree = component.toJSON();
    expect(tree).toMatchInlineSnapshot(`null`);
});

const TestStyle = styled.div`
    ${backgroundColor.base.white};
    ${textColor.base.primary.base};
    ${borderColor.base.primary.light};
    ${borderColorLeft.base.secondary.light};
    ${borderColorRight.base.secondary.base};
    ${borderColorTop.base.neutral["000"]};
    ${borderColorBottom.base.tertiary};
`;

test("it returns all the correct color for all types", () => {
    const component = renderer.create(
        <SETThemeProvider>
            <TestStyle />
        </SETThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchInlineSnapshot(`
        .c0 {
          background-color: #ffffff;
          color: #5f259f;
          border-color: #75529d;
          border-left-color: #f9b104;
          border-right-color: #ff9b00;
          border-top-color: #f8f9f9;
          border-bottom-color: #03a9f4;
        }
        
        <div
          className="c0"
        />
    `);
});

test("it returns all the correct color for all types with theme change", () => {
    const component = renderer.create(
        <SETThemeProvider theme="orange-pink">
            <TestStyle />
        </SETThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchInlineSnapshot(`
        .c0 {
          background-color: #ffffff;
          color: #ff9b00;
          border-color: #f9b104;
          border-left-color: #f07db4;
          border-right-color: #ec008c;
          border-top-color: #f8f9f9;
          border-bottom-color: #03a9f4;
        }
        
        <div
          className="c0"
        />
    `);
});

test("it returns all the correct color for all types with orange-green the index theme", () => {
    const component = renderer.create(
        <SETThemeProvider theme="orange-green">
            <TestStyle />
        </SETThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchInlineSnapshot(`
                .c0 {
                  background-color: #ffffff;
                  color: #00af55;
                  border-color: #82c86e;
                  border-left-color: #f9b104;
                  border-right-color: #ff9b00;
                  border-top-color: #f8f9f9;
                  border-bottom-color: #03a9f4;
                }
                
                <div
                  className="c0"
                />
        `);
});

const TestBrandColor = styled.div`
    ${backgroundColor.brand.green.base};
`;

test("Background.brand.green.base returns the correct color and calls a warning", () => {
    expect(console.warn).not.toBeCalled();
    const component = renderer.create(
        <SETThemeProvider>
            <TestBrandColor />
        </SETThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toHaveStyleRule("background-color", "#00af55");
    expect(console.warn).toBeCalled();
});
