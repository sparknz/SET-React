
import React from 'react';
import { Button } from 'reakit';
import styled from 'styled-components';
import { backgroundColor, textColor, borderColor, shadowColor, fontSize } from '../../helpers/themeHelpers';

const states = (states) => {
    if (!Array.isArray(states)) {
        states = [states];
    }
    return (props) => {
        return states.map((state) => props[state] ? '&&' : `&:${state}`).join(',');
    }
}

const BaseButton = styled(Button)`
    border: none;
    padding: 10px 20px;
    height: 40px;
    ${fontSize('small')}
    font-family: 'AvenirNextLTPro-Medium', Helvetica, Arial, sans-serif;
    text-decoration: none;
`

const PrimaryButton = styled(BaseButton)`

  ${backgroundColor('interaction1')};
  ${textColor('interaction2')};

  ${states('hover')} {
    outline: none;
    text-decoration: none;
    box-shadow: none;
    ${backgroundColor('hover1')};
  }

  ${states('active')} {
    ${backgroundColor('active1')};
  }

  ${states('focus')} {
    box-shadow: 0px 0px 4px 2px ${shadowColor('interaction1')};
    outline: none;
  }

  ${states('disabled')} {
    outline: none;
    ${backgroundColor('disabled1')};
  }
`

const PrimaryButtonWhite = styled(PrimaryButton)`
    ${textColor('interaction1')};
    ${backgroundColor('interaction2')};

    ${states('hover')} {
        ${textColor('hover1')};
        ${backgroundColor('hover2')};
    }
    ${states('active')} {
        ${textColor('active1')};
        ${backgroundColor('active2')};
    }
    ${states('disabled')} {
        ${textColor('disabled1')};
        ${backgroundColor('disabled2')};
    }
    ${states('focus')} {
        box-shadow: 0px 0px 4px 2px ${shadowColor('interaction2')};
        outline: none;
    }
`

const SecondaryButton = styled(BaseButton)`
    border-width: 2px;
    border-radius: 2px;
    ${textColor('interaction1')};
    background-color: transparent;
    border: 1px solid;
    ${borderColor('interaction1')};

    ${states('hover')} {
        ${textColor('hover1')};
        ${borderColor('hover1')};
    }
    ${states('active')} {
        ${textColor('active1')};
        ${borderColor('active1')};
    }
    ${states('disabled')} {
        ${textColor('disabled1')};
        ${borderColor('disabled1')};
    }
    ${states('focus')} {
        box-shadow: 0px 0px 4px 2px ${shadowColor('interaction1')};
        outline: none;
    }
`;

const SecondaryButtonWhite = styled(SecondaryButton)`
    ${textColor('interaction2')};
    ${borderColor('interaction2')};

    ${states('hover')} {
        ${textColor('hover2')};
        ${borderColor('hover2')};
    }
    ${states('active')} {
        ${textColor('active2')};
        ${borderColor('active2')};
    }
    ${states('disabled')} {
        ${textColor('disabled2')};
        ${borderColor('disabled2')};
    }
    ${states('focus')} {
        box-shadow: 0px 0px 4px 2px ${shadowColor('interaction2')};
    }
`;

const TertiaryButton = styled(BaseButton)`
    ${textColor('interaction1')};
    background-color: transparent;
    ${states('focus')} {
        outline: none;
    }
`;

const TertiaryButtonWhite = styled(TertiaryButton)`
    ${textColor('interaction2')};
`;

export enum variants {
    primary_blue = "primary_blue",
    primary_white = "primary_white",
    secondary_blue = "secondary_blue",
    secondary_white = "secondary_white",
    tertiary_blue = "tertiary_blue",
    tertiary_white = "tertiary_white"
}

export default ({ variant, ...props }: { variant?: variants }): JSX.Element => {

    if (variant && !Object.values(variants).includes(variant)) {
        throw new Error(`Variant ${variant} doesnt exist for button`);
    }
    switch (variant) {
        case variants.primary_blue:
            return <PrimaryButton {...props} />;
        case variants.primary_white:
            return <PrimaryButtonWhite {...props} />;
        case variants.secondary_blue:
            return <SecondaryButton {...props} />;
        case variants.secondary_white:
                return <SecondaryButtonWhite {...props} />;
        case variants.tertiary_blue:
            return <TertiaryButton {...props} />;
        case variants.tertiary_white:
                return <TertiaryButtonWhite {...props} />;
        default:
            return <PrimaryButton {...props} />;
    }
};
