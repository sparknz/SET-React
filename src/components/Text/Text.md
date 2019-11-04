### Usage
```jsx
import * as Text from './Text';

<>
    <Text.Xs>Hello World (Xs)</Text.Xs>
    <Text.Small>Hello World (Small)</Text.Small>
    <Text.Default>Hello World (Default)</Text.Default>
    <Text.Large>Hello World (Large)</Text.Large>
    <Text.Xl>Hello World (Xl)</Text.Xl>
    <Text.Xxl>Hello World (Xxl)</Text.Xxl>
    <Text.Xxxl>Hello World (Xxxl)</Text.Xxxl>
</>
```

All Text components are responsive, with 0 margin and 0 padding, and default text color.

```jsx static
const BaseText = styled.p`
    ${textColor('default')}
    padding: 0;
    margin: 0;
`

export const Xs = styled(BaseText)`
    ${fontSize.xs}
    ${breakpoint.tablet}{
        ${fontSize.xxs}
    }
`
```

By default Text components uses `p` tags, you might want to use other tags such as `h1` for semantic correctness, in that case, you should use the `as` prop.

```jsx
<Text.Xl as="h1">This is H1</Text.Xl>
```