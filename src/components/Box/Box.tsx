import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import {backgroundColor} from '../../helpers/themeHelpers';
import Color from 'color';

interface IWrapper extends React.HTMLProps<HTMLDivElement> {
  boxType: string
}

const Wrapper = styled.div<IWrapper>`
  background-color: ${props => backgroundColor(props.boxType)};
  color: blue;
`

export default function Box({ boxType, children, ...props }: {boxType: string, children:React.ReactChildren}) {

  const newtheme = (theme) => {
    const invertForground = Color(backgroundColor(boxType)({theme})).isDark();
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