
<<<<<<< Updated upstream
 import React from 'react';
// import { Button } from 'reakit';
// import styled from 'styled-components';
// import  { backgroundColor, textColor, borderColor } from '../../helpers/themeHelpers';


// const states = (states) => {
//   if (!Array.isArray(states)) {
//     states = [states];
//   }
//   return (props) => {
//       return states.map((state) => props[state] ? '&&' : `&:${state}`).join(',');
//   }
// }


// const StyledButton = styled(Button)`
//   border-width: 1px;
//   border-radius: 0;
//   padding: 10px 20px;
//   height: 40px;
//   font-size: 14px;
//   font-family: 'AvenirNextLTPro-Medium', Helvetica, Arial, sans-serif;
//   text-decoration: none;
//   ${backgroundColor.interation};
//   ${textColor.default};
//   ${states(['hover', 'active'])} {
//     outline: none;
//     text-decoration: none;
//     box-shadow: none;
//     ${backgroundColor.interation};
//   }

//   ${states('focus')} {
//     box-shadow: 0px 0px 4px 2px #007CBD;
//     outline: none;
//   }

//   &[disabled]:after {
//     background: none;
//   // 
// `


// const SecondaryButton = styled(StyledButton)`
//   ${textColor.interation};
//   ${backgroundColor.base};
//   border: 1px solid;
//   ${borderColor.interation};

//   ${states(['hover', 'active'])} {
//     textColor: ${textColor('interation')};
//     backgroundColor: ${backgroundColor.base};
//     borderColor: ${borderColor.interation};
//   }
// `;


// const blue = '0096e6';

// const TertiaryButton = styled(StyledButton)`
//   ${textColor.interation.base};
//   ${backgroundColor.base.white};



//   ${states(['hover', 'active'])} {
//     ${textColor.interation.dark};
//     ${backgroundColor.base.white};
//     ${borderColor.interation.dark};

//     &::after {
//       transform: translateX(2px);
//     }
//   }


//   border: none;


//   &::after {
//     vertical-align: middle;
//     margin-left: 2px;
//     transition: transform 1s;
//     transform: translateX(0px);
//     content: '';
//     background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' d='M9.429 32l-2.922-2.922L19.584 16 6.507 2.922 9.429 0l16 16z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cuse fill='%23000' fill-rule='nonzero' xlink:href='%23a'/%3E%3Cg mask='url(%23b)' fill='%23${blue}'%3E%3Cpath d='M0 0h32v32H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
//     height: 14px;
//     width: 14px;
//     background-size: contain;
//     background-repeat: no-repeat;
//     background-position: left;
//     z-index: 33;
//     display: inline-block;
//   }

// `;



// export default ({ variant, ...props }): JSX.Element => {
//     if(variant === 'secondary') {
//       return <SecondaryButton {...props} />;
//     }

//   if (variant === 'tertiary') {
//       return <TertiaryButton {...props} />;
//     }

//     if(variant && variant !== 'primary') {
//       throw new Error('Variant doesnt exist for button');
//     }
//     return <StyledButton {...props} />;
// };

export default ():JSX.Element => (<button/>)
=======
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
>>>>>>> Stashed changes
