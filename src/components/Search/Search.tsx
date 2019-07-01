import React, { useState, MouseEvent, Component } from 'react';
import styled from 'styled-components';
// import Icon from './FontIcons.tsx';
import { backgroundColor, textColor, borderColor } from '../SETThemeProvider';

const states = (states) => {
    if (!Array.isArray(states)) {
        states = [states];
    }
    return (props) => {
        return states.map((state) => props[state] ? '&&' : `&:${state}`).join(',');
    }
}

interface Search {
    placeholder: string,
    buttonText: string;
    iconName: string;
    onRequestSearch(input: string): string;
}

export default function Search(search: Search) {

    const [input, updateInput] = useState('')

    function handleRequestSearch(input: string, search: Search) {
        if (search.onRequestSearch) {
            search.onRequestSearch(input)
        }
    }

    return (
        <Wrapper {...search}>
            <SearchField placeholder={search.placeholder} onChange={(e) => updateInput(e.target.value)}></SearchField>
            <SearchButton onClick={() => handleRequestSearch(input, search)}>
                <SearchButtonText>{search.buttonText}</SearchButtonText>
                {/* <Icon name={search.iconName} size={'19px'}></Icon> */}
            </SearchButton>
        </Wrapper>
    )
}
const SearchButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0096e6;
    height: 50px;
    border-top-right-radius: 23px;
    border-bottom-right-radius: 23px;
    width: 154px;
    @media only screen and (max-width: 639px) {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px; 
        width: 62px;
        height: 51px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    height: 50px;
    min-width: 320px;
    max-width: 756px;
    border-radius: 25px;
    border: solid 1px #979797;
    ${backgroundColor.base.white};
    @media only screen and (max-width: 639px) {
        max-width: 328px;
        height: 51px;
    }
    ${states(['active', 'hover'])} {
        ${SearchButton} {
            ${backgroundColor.interation.dark};
        }
        box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.25);
      }
      ${states('focus')} {
        box-shadow: 0px 0px 4px 2px #007CBD;
        outline: none;
  }
`;


const SearchField = styled.input`
    font-size: 22px;
    height: 28px;
    width: 100%;
    margin: 0 20px;
    border: none;
    color: #666666;
    font-family: 'AvenirNextLTPro-Medium', Helvetica, Arial, sans-serif;
    ${states(['focus'])} {
        outline: none;
        }
    @media only screen and (max-width: 939px) {
        font-size: 18px;
        margin: 0 16px;
    }
`;

const SearchButtonText = styled.div`
    text-align: center;
    font-size: 18px;
    padding-right: 8px;
    font-family: 'AvenirNext-Medium', Helvetica, Arial, sans-serif;
    color: white;
    @media only screen and (max-width: 639px) {
        display: none;
      }
`;