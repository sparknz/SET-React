# Font Icons

## Fonts
```js
import styled from 'styled-components';

const MarginBorder = styled.div`
    border: 1px solid red;
    width: min-content;
    height: min-content;
`;
<>
<h2>Default</h2>
<FontIcons name="broadband"></FontIcons>

<h2>Re-sizing</h2>
<FontIcons name="devices" size="8px"></FontIcons>
<FontIcons name="devices" size="16px"></FontIcons>
<FontIcons name="devices" size="24px"></FontIcons>

<h2>margins</h2>
<MarginBorder>
<FontIcons name="renew"
marginTop="8px"
marginRight="16px"
marginBottom="32px"
marginLeft="48px"></FontIcons>
</MarginBorder>

<h2>Color</h2>
<FontIcons size="32px" color="theme.color.icon.error.value" name="transactions"></FontIcons>

<h2>Hover Color</h2>
<FontIcons name="4g-o"
size="32px" hoverColor="theme.color.icon.info.value"></FontIcons>

<h2>Cursor</h2>
<FontIcons name="connectivity-o" size="32px" cursor="copy"></FontIcons>

</>
```