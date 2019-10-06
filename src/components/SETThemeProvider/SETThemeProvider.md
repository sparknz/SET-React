### Usage

The `SETThemeProvider` provide styled-components in your application with the color/layout/sizing tokens for the specific chosen theme.

You usually only need to use the `SETThemeProvider` once, and that is at the root element of your project:

```jsx static
class App extends Page {
    render() {
        return (
            <SparkTheme>
                {/*Your app goes here*/}
            </SparkTheme>
        );
    }
}
```

### Helper functions

#### Color helpers
- backgroundColor
- textColor
- borderColor
- borderTopColor
- borderRightColor
- borderBottomColor
- borderLeftColor
- shadowColor

> Note: you should never need to use the backgroundColor helper file directly, as any div with a background should be created using the Box component.

``` jsx static
const MyComponent1 = styled.p`
    ${textColor('default')} //color: #123456;
`;

const MyComponent2 = styled.span`
    ${borderColor('alt1')} //border-color: #123456;
`;

const MyComponent3 = styled.div`
    ${backgroundColor('error')} //border-bottom: #123456;
`;

const MyComponent4 = styled.div`
    box-shadow: 0px 0px 4px 2px ${shadowColor('interaction1')};
`
```

#### Layout helpers
- breakpoint
- zIndex
```jsx static
import styled from 'styled-components';
import { textColor, breakpoint, zIndex } from '../helpers/themeHelpers';

export default styled.h1`
    ${textColor('success')}
    ${zIndex('bottomlessPit')}
    ${breakpoint('tablet')}{
        ${textColor('error')}
    }
`;
```

#### Sizing helpers
- fontSize
- spacing

> Note: Normally you would use the Text components (which uses fontSize helper internally) instead of defining your own text component.

```jsx static
const Title = styled.h1`
    ${fontSize('xs')}
    margin-bottom: ${spacing('xl')}
`
```

Refer to [Spark Tokens](https://sparknz.github.io/SET-Docs) for all the avaliable colors, layout, and spacing tokens 