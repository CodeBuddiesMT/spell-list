import styled from 'styled-components';

const ButtonDiv = styled.div`
    width: 10%;
    height: 100%;
    background-color: blue;
    padding: 1rem;
    font-size: 2rem;
`;
const HeaderButton = (props) => { 
    return(
        <>
            <ButtonDiv>
                TEST
            </ButtonDiv>
        </>
    );
}

export default HeaderButton;