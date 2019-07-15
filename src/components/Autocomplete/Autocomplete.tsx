import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import styled from 'styled-components';
import { Wrapper, SearchField, SearchButtonText } from '../Lookup/Lookup';
import { backgroundColor, textColor } from '../SETThemeProvider';

interface AutocompleteProps {
    placeholder: string;
    buttonText: string;
    iconName: string;
    onRequestSearch(value: string): string;
    suggestionsList: Array<Suggestions>;
}
interface Suggestions {
    title: string;
}

const getSuggestions = (value, suggestionsList) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : suggestionsList.filter(suggestion =>
        suggestion.title.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const getSuggestionValue = suggestion => suggestion.title;

function renderInputComponent(inputProps) {
    const {placeholder, buttonText} = inputProps;

    return (
        <AutocompleteWrapper>
            <AutocompleteSearchField placeholder={placeholder} {...inputProps}>
            </AutocompleteSearchField>
            <Button>
                <ButtonText>{buttonText}</ButtonText>
            </Button>
        </AutocompleteWrapper>
    )
}

function renderSuggestion(suggestion) {
    return (
        <div>{suggestion.title}</div>
    )
};

export default function Autocomplete({ placeholder, buttonText, suggestionsList, onRequestSearch }: AutocompleteProps) {

    const [suggestions, updateSuggestions] = useState([]);
    const [value, updateValue] = useState('');

    function handleChange(event, { newValue }) {
        updateValue(newValue)
        if(onRequestSearch) {
            onRequestSearch(newValue)
        }
    }

    function onSuggestionsFetchRequested({ value }) {
        updateSuggestions(getSuggestions(value, suggestionsList))
    };

    function onSuggestionsClearRequested() {
        updateSuggestions([])
    };


    const inputProps = {
        placeholder: placeholder,
        buttonText: buttonText,
        value,
        onChange: handleChange
    };

    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            renderInputComponent={renderInputComponent}
            inputProps={inputProps}
        />
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

const Button = styled.div`
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

