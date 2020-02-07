### Usage

```jsx
import * as Text from "./Text";

<>
    <Text.S1>Hello World (S1)</Text.S1>
    <Text.S2>Hello World (S2)</Text.S2>
    <Text.S3>Hello World (S3)</Text.S3>
    <Text.S4>Hello World (S4)</Text.S4>
    <Text.S5>Hello World (S5)</Text.S5>
    <Text.L1>Hello World (L1)</Text.L1>
    <Text.L2>Hello World (L2)</Text.L2>
    <Text.L3>Hello World (L3)</Text.L3>
    <Text.L4>Hello World (L4)</Text.L4>
    <Text.L5>Hello World (L5)</Text.L5>
</>;
```

All Text components are responsive, with 0 margin and 0 padding, and default text color.

```jsx static
const BaseText = styled.p`
    ${textColor("default")}
    padding: 0;
    margin: 0;
`;

export const Xs = styled(BaseText)`
    ${fontSize.xs}
    ${breakpoint.tablet} {
        ${fontSize.xxs}
    }
`;
```

By default Text components uses `p` tags, you might want to use other tags such as `h1` for semantic correctness, in that case, you should use the `as` prop.

```jsx
<Text.L5 as="h1">This is H1</Text.L5>
```
