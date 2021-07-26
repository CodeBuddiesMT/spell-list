import styled from 'styled-components';
import React from 'react'

const ButtonDiv = styled.button`
    flex-grow: 1;
    background-color: blue;
    padding: 1rem;
    font-size: 2rem;
    border-radius: 1rem;
    border: none;
    margin: .5rem;
    &:hover {
        background-color: #7d7dfd;
    }
`;


const HeaderButton = (props) => { 

    console.log(props);

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