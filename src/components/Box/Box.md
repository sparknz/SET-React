Use the Box component to create a div with a background color.

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
```js
<div style={{display: 'flex'}}>
    <Box boxType="default" style={{height: "40px", width: "80px"}} />
    <Box boxType="alt1" style={{height: "40px", width: "80px"}}/>
    <Box boxType="alt2" style={{height: "40px", width: "80px"}}/>
    <Box boxType="error" style={{height: "40px", width: "80px"}}/>
    <Box boxType="info" style={{height: "40px", width: "80px"}}/>
    <Box boxType="success" style={{height: "40px", width: "80px"}}/>
    <Box boxType="interaction" style={{height: "40px", width: "80px"}}/>
    <Box boxType="hover" style={{height: "40px", width: "80px"}}/>
    <Box boxType="disabled" style={{height: "40px", width: "80px"}}/>
    <Box boxType="active" style={{height: "40px", width: "80px"}}/>
</div>
```