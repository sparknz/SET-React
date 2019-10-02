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
The easiest way to use these tokens is via the theme helper functions

#### Color helpers
There are 7 different color helper functions:
- backgroundColor
- textColor
- borderColor
- borderTopColor
- borderRightColor
- borderBottomColor
- borderLeftColor

> Note: you should never need to use the backgroundColor helper file directly, as any div with a background should be created using the Box component.

The color helpers can be used like so:
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
```

#### Layout helpers
There are 2 different layout helper functions:
- breakpoint
- zIndex


You could use the breakpoint helper like so:
```jsx static
import styled from 'styled-components';
import { textColor, breakpoint, zIndex } from '../helpers/themeHelpers';

export default styled.h1`
    ${textColor('success')}
    ${breakpoint('tablet')}{
        ${textColor('error')}
    }
`;
```

And here is the result:

```jsx noeditor
import MediaQuery from '../../demo-components/MediaQuery';

<MediaQuery>This is a responsive text, change the window size to see me change color</MediaQuery>
```

This is how you use the zIndex helper:
```jsx static
import React from 'react';
import styled from 'styled-components';
import { textColor, breakpoint, zIndex } from '../helpers/themeHelpers';

const Lower = styled.h1`
    position: absolute;
    ${zIndex('bottomlessPit')}
`;

const Higher = styled.h4`
    position: absolute;
    ${zIndex('overTheMoon')}
`

const Wrapper = styled.div`
    position: relative;
`

export default function(){
    return <Wrapper>
        <Lower>Text in bottomless pit</Lower>
        <Higher>Text that's over the moon</Higher>
    </Wrapper>
}
```

#### Sizing helpers


### Raw Theme Object


Refer to [Spark Tokens](https://sparknz.github.io/SET-Docs) for all the avaliable colors, layout, and spacing values 