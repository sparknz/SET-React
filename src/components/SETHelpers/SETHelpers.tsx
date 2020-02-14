import React from "react";
import styled from "styled-components";
import * as h from "../../helpers/themeHelpers";

/** @component */
const MyDiv = styled.div`
    ${h.breakpoint.mobile} {
        ${h.backgroundColor.error}
    }
    ${h.backgroundColor.alt1};
    ${h.textColor.default};
    ${h.fontSize.s1};
    ${h.zIndex.dropdown};
    border: 1px solid;
    ${h.borderColor.error};
    padding: ${h.spacing.sp1};
    height: 100px;
    width: 100px;
`;

/** @component */
export default function Example() {
    return (
        <>
            <MyDiv>Hello World</MyDiv>
        </>
    );
}
