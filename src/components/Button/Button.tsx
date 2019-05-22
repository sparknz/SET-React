
import React from 'react';
import { Button, styled } from 'reakit';
import  { backgroundColor, textColor, borderColor } from '../SETThemeProvider';
import { Cheveron } from '../Icon';

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
    background-image: ${Cheveron.interation.base};
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

