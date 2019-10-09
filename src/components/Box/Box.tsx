import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import {backgroundColor} from '../../helpers/themeHelpers';
import Color from 'color';

interface IWrapper extends React.HTMLProps<HTMLDivElement> {
  variant: string
}

const Wrapper = styled.div<IWrapper>`
  ${props => backgroundColor(props.variant)};
  color: blue;
`

export default function Box({ variant, children, ...props }: {variant: string, children:React.ReactChildren}) {

  const newtheme = (theme) => {
    const colorHexWithSemi = backgroundColor(variant)({theme}).replace("background-color: ","");
    const colorHex = colorHexWithSemi.replace(";","");

    const invertForground = Color(colorHex).isDark();
    return ({
      ...theme,
      isForegroundInverted: invertForground,
    })
  }

  return (
    <Wrapper variant={variant} {...props}>
        <ThemeProvider theme={newtheme}>
          <>
            {children}
          </>
        </ThemeProvider>
      </Wrapper>
  )
}