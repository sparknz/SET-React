import React from "react";
import { breakpoint, textColor, fontSize } from "../../helpers/themeHelpers";
import styled from "styled-components";
import _ from "lodash";

const BaseText = styled.p`
    ${textColor.default}
    padding: 0;
    margin: 0;
`;

interface ITextComponents {
    S1?: React.ElementType;
    S2?: React.ElementType;
    S3?: React.ElementType;
    S4?: React.ElementType;
    S5?: React.ElementType;
    L1?: React.ElementType;
    L2?: React.ElementType;
    L3?: React.ElementType;
    L4?: React.ElementType;
    L5?: React.ElementType;
}

const reducer = (
    acc: ITextComponents,
    val: string,
    index: number,
    srcArray: string[]
) => ({
    ...acc,
    [_.capitalize(val)]: styled(BaseText)`
        ${fontSize[val]}
        ${breakpoint.tablet} {
            ${fontSize[srcArray[index - 1]]}
        }
    `
});

const generateTexts = () => {
    return ["s1", "s2", "s3", "s4", "s5", "l1", "l2", "l3", "l4", "l5"].reduce(
        reducer,
        {}
    );
};

/** @component */
export default generateTexts();
