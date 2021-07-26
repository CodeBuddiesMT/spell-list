import styled from 'styled-components';
import { HeaderButton, ExampleButton } from '../buttons';

const HeaderDiv = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 0%;
    width: 100%;
    height: 5rem;
    background-color: red;
    font-size: 2rem;
`;
const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 8;
    background-color: red;
    font-size: 2rem;
`;
const AccountDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 2;
    background-color: red;
    font-size: 2rem;
`;
const Header = (props) => {

    return (
        <>
            <HeaderDiv>
                <ButtonsDiv>
                    <HeaderButton>
                        Thing1
                    </HeaderButton>
                    <HeaderButton>
                        Thing2
                    </HeaderButton>
                    <HeaderButton>
                        Thing3
                    </HeaderButton>
                    <HeaderButton>
                        Thing4
                    </HeaderButton>
                </ButtonsDiv>
                <AccountDiv>
                    <HeaderButton>
                        Account
                    </HeaderButton>
                </AccountDiv>
            </HeaderDiv>
        </>
    );
}

export default Header;