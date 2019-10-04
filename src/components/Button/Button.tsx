
import React from 'react';
import { Button } from 'reakit';
import styled from 'styled-components';
import { backgroundColor, textColor, borderColor } from '../../helpers/themeHelpers';

const states = (states) => {
    if (!Array.isArray(states)) {
        states = [states];
    }
    return (props) => {
        return states.map((state) => props[state] ? '&&' : `&:${state}`).join(',');
    }
}

const BaseButton = styled(Button)`
    border-width: 1px;
    border-radius: 0;
    padding: 10px 20px;
    height: 40px;
    font-size: 14px;
    font-family: 'AvenirNextLTPro-Medium', Helvetica, Arial, sans-serif;
    text-decoration: none;
`

const StyledButton = styled(BaseButton)`

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
    box-shadow: 0px 0px 4px 2px #007CBD;
    outline: none;
  }

  ${states('disabled')} {
    outline: none;
    ${backgroundColor('disabled1')};
  }
`

const StyledButtonWhite = styled(StyledButton)`
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
        box-shadow: 0px 0px 4px 2px #f2f2f2;
        outline: none;
    }
`


const SecondaryButton = styled(BaseButton)`
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
        box-shadow: 0px 0px 4px 2px #f2f2f2;
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
`;

const TertiaryButton = styled(BaseButton)`
    ${textColor('interaction1')};
    background-color: transparent;
    border: none;
`;

const TertiaryButtonWhite = styled(TertiaryButton)`
    ${textColor('interaction2')};
`;

export enum VARIANTS {
    PRIMARY_BLUE = "PRIMARY_BLUE",
    PRIMARY_WHITE = "PRIMARY_WHITE",
    SECONDARY_BLUE = "SECONDARY_BLUE",
    SECONDARY_WHITE = "SECONDARY_WHITE",
    TERTIARY_BLUE = "TERTIARY_BLUE",
    TERTIARY_WHITE = "TERTIARY_WHITE"
}

export default ({ variant, ...props }: { variant?: VARIANTS }): JSX.Element => {

    if (variant && !Object.values(VARIANTS).includes(variant)) {
        throw new Error(`Variant ${variant} doesnt exist for button`);
    }
    switch (variant) {
        case VARIANTS.PRIMARY_BLUE:
            return <StyledButton {...props} />;
        case VARIANTS.PRIMARY_WHITE:
            return <StyledButtonWhite {...props} />;
        case VARIANTS.SECONDARY_BLUE:
            return <SecondaryButton {...props} />;
        case VARIANTS.SECONDARY_WHITE:
                return <SecondaryButtonWhite {...props} />;
        case VARIANTS.TERTIARY_BLUE:
            return <TertiaryButton {...props} />;
        case VARIANTS.TERTIARY_WHITE:
                return <TertiaryButtonWhite {...props} />;
        default:
            return <StyledButton {...props} />;
    }
};
