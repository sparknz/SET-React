Note: You are not expected to use this Text component. This is just for reference of how you would declare text in your application


If you want a text with the `default` color, you might declare it as such:
```code
const Text = styled.p`
    color: ${textColor('default')}
`;
```

The text will automatically change from the invert color depending on the background.

```js
import Box from '../Box';

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

refer to [Spark Tokens](https://sparknz.github.io/SET-Docs) for all the avaliable Text color 