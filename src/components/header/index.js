import styled from 'styled-components';
// import Buttons from '../buttons';

const HeaderDiv = styled.div`
    position: absolute;
    top: 0%;
    width: 100%;
    height: 5rem;
    background-color: red;
    font-size: 2rem;
`;
const Header = (props) => { 
    return(
        <>
            <HeaderDiv>
                {/* <Buttons.HeaderButton>

                </Buttons.HeaderButton> */}
            </HeaderDiv>
        </>
    );
}

export default Header;