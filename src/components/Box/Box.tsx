import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import {backgroundColor} from '../../helpers/themeHelpers';
import Color from 'color';

interface IWrapper extends React.HTMLProps<HTMLDivElement> {
  boxType: string
}

const Wrapper = styled.div<IWrapper>`
  ${props => backgroundColor[props.boxType]};
  color: blue;
`

export default function Box({ boxType, children, ...props }: {boxType: string, children:React.ReactChildren}) {

  const newtheme = (theme) => {
    const colorHexWithSemi = backgroundColor[boxType]({theme}).replace("background-color: ","");
    const colorHex = colorHexWithSemi.replace(";","");

    const invertForground = Color(colorHex).isDark();
    return ({
      ...theme,
      isForegroundInverted: invertForground,
    })
  }

  return (
    <Wrapper boxType={boxType} {...props}>
        <ThemeProvider theme={newtheme}>
          <>
            {children}
          </>
        </ThemeProvider>
      </Wrapper>
  )
}