import React from 'react';
import styled from 'styled-components';
import {Wrapper, SearchField, SearchButtonText} from '../Lookup/Lookup';
import { backgroundColor, textColor } from '../SETThemeProvider';

interface AutocompleteProps {
    placeholder: string;
    buttonText: string;
    iconName: string;
}


export default function Autocomplete({placeholder, buttonText, iconName, ...props}: AutocompleteProps) {
    return(
        <AutocompleteWrapper {...props}>
                {/* <Icon name={iconName} size={'19px'} marginLeft={'22px'} color={${textColor.base.grey[4]};}></Icon> */}
                <AutocompleteSearchField placeholder={placeholder}></AutocompleteSearchField>
            <AutocompleteButton>
                {/* <Icon name={iconName} size={'19px'}></Icon> */}
                <ButtonText>{buttonText}</ButtonText>
            </AutocompleteButton>
        </AutocompleteWrapper>
    );
}

const AutocompleteWrapper = styled(Wrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width:  100%;
    height: 50px;
    min-width: 320px;
    max-width: 756px;
    border-radius: 25px;
    border: 1px solid;
    @media only screen and (max-width: 639px) {
        max-width: 328px;
        height: 51px;
    }
`;

const AutocompleteSearchField = styled(SearchField)`
    margin: 0 8px;
    width: 100%;
    @media only screen and (max-width: 939px) {
        margin: 0 8px;
    }
`;

const AutocompleteButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${backgroundColor.base.white};
    height: 50px;
    border-top-right-radius: 23px;
    border-bottom-right-radius: 23px;
    width: 40%;
    @media only screen and (max-width: 639px) {
        width: 30%;
        height: auto;
    }
`;

const ButtonText = styled(SearchButtonText)`
    ${textColor.interation.base};
    font-size: 16px;
`;

