#### Color helpers

-   backgroundColor
-   textColor
-   borderColor
-   borderTopColor
-   borderRightColor
-   borderBottomColor
-   borderLeftColor
-   shadowColor

> Note: you should never need to use the backgroundColor helper file directly, as any div with a background should be created using the Box component.

```jsx static
const MyComponent1 = styled.p`
    ${textColor.default} //color: #123456;
`;

const MyComponent2 = styled.span`
    ${borderColor.alt1} //border-color: #123456;
`;

const MyComponent3 = styled.div`
    ${backgroundColor.error} //border-bottom: #123456;
`;

const MyComponent4 = styled.div`
    box-shadow: 0px 0px 4px 2px ${shadowColor.interaction1};
`;
```

#### Layout helpers

-   breakpoint
-   zIndex

```jsx static
import styled from "styled-components";
import { textColor, breakpoint, zIndex } from "../helpers/themeHelpers";

export default styled.h1`
    ${textColor.success}
    ${zIndex.bottomlessPit}
    ${breakpoint.tablet}{
        ${textColor.error}
    }
`;
```

#### Sizing helpers

-   fontSize
-   spacing

> Note: Normally you would use the Text components (which uses fontSize helper internally) instead of defining your own text component.

```jsx static
const Title = styled.h1`
    ${fontSize.xs}
    margin-bottom: ${spacing.xl}
`;
```

Here's an example of putting it all together on a sample div:

```
<SETHelpers />
```

```jsx static
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
```

Refer to [Spark Tokens](https://sparknz.github.io/SET-Docs) for all the avaliable colors, layout, and spacing tokens
