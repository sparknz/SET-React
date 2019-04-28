
import React from 'react';
import { Button, styled } from 'reakit';
import  { backgroundColor, textColor, borderColor } from '../SETThemeProvider';


const states = (states) => {
  if (!Array.isArray(states)) {
    states = [states];
  }
  return (props) => {
      return states.map((state) => props[state] ? '&&' : `&:${state}`).join(',');
  }
}


const StyledButton = styled(Button)`
  border-width: 1px;
  border-radius: 0;
  padding: 10px 20px;
  height: 40px;
  font-size: 14px;
  font-family: 'AvenirNextLTPro-Medium', Helvetica, Arial, sans-serif;
  text-decoration: none;
  ${backgroundColor.interation.base};
  ${textColor.base.white};
  ${states(['hover', 'active'])} {
    outline: none;
    text-decoration: none;
    box-shadow: none;
    ${backgroundColor.interation.dark};
  }

  ${states('focus')} {
    box-shadow: 0px 0px 4px 2px #007CBD;
    outline: none;
  }

  &[disabled]:after {
    background: none;
  }
`


const SecondaryButton = styled(StyledButton)`
  ${textColor.interation.base};
  ${backgroundColor.base.white};
  border: 1px solid;
  ${borderColor.interation.base};

  ${states(['hover', 'active'])} {
    ${textColor.interation.dark};
    ${backgroundColor.base.white};
    ${borderColor.interation.dark};
  }
`;


const blue = '0096e6';

const TertiaryButton = styled(StyledButton)`
  ${textColor.interation.base};
  ${backgroundColor.base.white};


    
  ${states(['hover', 'active'])} {
    ${textColor.interation.dark};
    ${backgroundColor.base.white};
    ${borderColor.interation.dark};

    &::after {
      transform: translateX(2px);
    }
  }

  
  border: none;


  &::after {
    vertical-align: middle;
    margin-left: 2px;
    transition: transform 1s;
    transform: translateX(0px);
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' d='M9.429 32l-2.922-2.922L19.584 16 6.507 2.922 9.429 0l16 16z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cuse fill='%23000' fill-rule='nonzero' xlink:href='%23a'/%3E%3Cg mask='url(%23b)' fill='%23${blue}'%3E%3Cpath d='M0 0h32v32H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");  
    height: 14px;
    width: 14px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    z-index: 33;
    display: inline-block;
  }

`;



export default ({ variant, ...props }): JSX.Element => {
    if(variant === 'secondary') {
      return <SecondaryButton {...props} />;
    }

  if (variant === 'tertiary') {
      return <TertiaryButton {...props} />;
    }

    if(variant && variant !== 'primary') {
      throw new Error('Variant doesnt exist for button');
    }
    return <StyledButton {...props} />;
};

