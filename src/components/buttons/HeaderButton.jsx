import styled from 'styled-components';
import React from 'react'

const ButtonDiv = styled.button`
    flex-grow: 1;
    color: white;
    background-color: transparent;
    padding: 1rem;
    font-size: 2rem;
    border-radius: .25rem;
    border: none;
    margin: auto;
    transition: 0.3s;
    max-width: 10rem;
    &:hover {
        color: #000000;
        border: solid;
    }
`;

const HeaderButton = (props) => { 

    const {children, handleClick} = props

    return(
        <>
            <ButtonDiv onClick={() => handleClick(children)}>
                {children}
            </ButtonDiv>
        </>
    );
}

export default HeaderButton;