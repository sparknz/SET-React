import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import {backgroundColor} from '../../helpers/themeHelpers';
import Color from 'color';

const Wrapper = styled.div`
  background-color: ${backgroundColor('alt2')};
  color: blue;
`

function Box({ boxType, children, ...props }: {boxType: string, children:React.ReactChildren}) {

  const newtheme = (theme) => {
    const invertForground = Color(backgroundColor('alt2')({theme})).isDark();
    return ({
      ...theme,
      isForegroundInverted: invertForground,
    })
  }

  return (
      <Wrapper {...props}>
        <ThemeProvider theme={newtheme}>
          <>
            {children}
          </>
        </ThemeProvider>
      </Wrapper>
  )
}

/** @component */
export default Box


// const BoxWithTheme = withTheme(function Box({
//   theme,
//   variant,
//   children,
//   className
// }) {
//   const isForegroundInverted = theme.isForegroundInverted[variant];
//   const foregroundTheme = isForegroundInverted
//     ? theme.foreground.invert
//     : theme.foreground.normal;

//   return (
//     <SETThemeProvider theme={{ ...theme, smart: { ...foregroundTheme } }}>

//     </ThemeProvider>
//   );
// });

// export function BgMain1(props) {
//   return <BoxWithTheme variant="main1" {...props} />;
// }

// export function BgMain2(props) {
//   return <BoxWithTheme variant="main2" {...props} />;
// }

// export function Bg(props) {
//   return <BoxWithTheme variant="bg" {...props} />;
// }

// export function BgAlt(props) {
//   return <BoxWithTheme variant="bgAlt" {...props} />;
// }

// export function BgAlt2(props) {
//   return <BoxWithTheme variant="bgAlt2" {...props} />;
// }
