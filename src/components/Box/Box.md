### Background color 
Use the Box component to create a div with a background color.

```js
<div style={{display: 'flex'}}>
    <Box boxType="default" style={{height: "40px", width: "80px"}} />
    <Box boxType="alt1" style={{height: "40px", width: "80px"}}/>
    <Box boxType="alt2" style={{height: "40px", width: "80px"}}/>
    <Box boxType="error" style={{height: "40px", width: "80px"}}/>
    <Box boxType="info" style={{height: "40px", width: "80px"}}/>
    <Box boxType="success" style={{height: "40px", width: "80px"}}/>
    <Box boxType="interaction1" style={{height: "40px", width: "80px"}}/>
    <Box boxType="hover1" style={{height: "40px", width: "80px"}}/>
    <Box boxType="disabled1" style={{height: "40px", width: "80px"}}/>
    <Box boxType="active1" style={{height: "40px", width: "80px"}}/>
    <Box boxType="interaction2" style={{height: "40px", width: "80px"}}/>
    <Box boxType="hover2" style={{height: "40px", width: "80px"}}/>
    <Box boxType="disabled2" style={{height: "40px", width: "80px"}}/>
    <Box boxType="active2" style={{height: "40px", width: "80px"}}/>
</div>
```

The 10 types of Boxes are:
- default
- alt1
- alt2
- error
- info
- success
- interaction
- hover
- disabled
- active

The color for each type will change depending on the theme defined through `SETThemeProvider`

### Dynamic foreground color
The forground element's color within Box will automatically change between the default color and inverted color depending on the background color of the box.

For example, if you decalred a a text with the `default` color like so:
```jsx static
import React from 'react'
import styled from 'styled-components';
import { textColor } from '../../helpers/themeHelpers';

/** @component */
export default styled.p`
    ${textColor.default}
`;
```

You could use it in all the different boxes and the text color will alter between `color.text.default.default` and `color.text.default.invert`

```jsx
import Text from '../../demo-components/ColorChangingText';

<>
    <Box boxType="default" >
        <Text>Hello World</Text>
    </Box>

    <Box boxType="alt1" >
        <Text>Hello World</Text>
    </Box>

    <Box boxType="alt2" >
        <Text>Hello World</Text>
    </Box>

    <Box boxType="info" >
        <Text>Hello World</Text>
    </Box>

    <Box boxType="error" >
        <Text>Hello World</Text>
    </Box>
</>

```

This works with text color, as well as border colors.

```jsx static
import styled from 'styled-components';
import { borderColor } from '../helpers/themeHelpers';

export default styled.div`
    height: 80px;
    width: 80px;
    border: 5px solid;
    ${borderColor('default')};
`;
```

```jsx
import Border from '../../demo-components/ColorChangingBorder';

<>
    <Box boxType="default" style={{padding: "10px"}}>
        <Border/>
    </Box>

    <Box boxType="alt1" style={{padding: "10px"}}>
        <Border/>
    </Box>

    <Box boxType="alt2" style={{padding: "10px"}}>
        <Border/>
    </Box>

    <Box boxType="info" style={{padding: "10px"}}>
        <Border/>
    </Box>

    <Box boxType="error" style={{padding: "10px"}}>
        <Border/>
    </Box>
</>

```

Refer to [Spark Tokens](https://sparknz.github.io/SET-Docs) for all the avaliable text, border, and background colors 