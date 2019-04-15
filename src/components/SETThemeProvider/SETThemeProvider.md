Hello


```js

import styled from 'styled-components';
import SETThemeProvider, {
    backgroundColor,
    textColor,
    borderColor,
    borderColorLeft,
    borderColorRight,
    borderColorTop,
    borderColorBottom
} from "./index";

const TestStyle = styled.div`
    ${backgroundColor.base.white};
    ${textColor.base.primary.base};
    ${borderColor.base.primary.light};
    ${borderColorLeft.base.secondary.light};
    ${borderColorRight.base.secondary.base};
    ${borderColorTop.base.neutral["000"]};
    ${borderColorBottom.base.tertiary};
    border-width: 40px;
    border-style: solid;
`;

 <SETThemeProvider theme="orange-pink">
        <TestStyle>Hello World.</TestStyle>
</SETThemeProvider>
```