import styled from 'styled-components';

const ButtonDiv = styled.button`
    flex-grow: 1;
    background-color: blue;
    padding: 1rem;
    font-size: 2rem;
`;
const HeaderButton = (props) => { 
    return(
        <>
            <ButtonDiv>
                {props.children}
            </ButtonDiv>
        </>
    );
}

export default HeaderButton;