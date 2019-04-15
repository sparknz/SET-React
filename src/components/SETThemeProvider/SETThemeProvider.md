# SETThemeProvider 
give you access to all of sparks colors.
SETThemeProvider is used at the top level of your application and also lets you choose the color pair you need through 
the theme param.

the color pairs are:
   - 'purple-orange'
   - 'pink-green'
   - 'green-orange'
   - 'pink-purple'
   - 'purple-green'
   - 'orange-pink'
  
and their inverse

   - 'purple-orange.inverse'
   - 'pink-green.inverse',
   - 'green-orange.inverse'
   - 'pink-purple'.inverse
   - 'purple-green.inverse'
   - 'orange-pink.inverse'


there are helpful getters, these are fully typescripted so you can use autocomplete.

click `VIEW CODE` bellow to see an example.

- backgroundColor
- textColor
- borderColor
- borderColorLeft
- borderColorRight
- borderColorTop
- borderColorBottom

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