import styled from 'styled-components';
import { HeaderButton } from '../buttons';

const HeaderDiv = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 0%;
    width: 100%;
    height: 5rem;
    background-color: #414141;
    font-size: 2rem;
`;
const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 8;
    font-size: 2rem;
`;
const AccountDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #595959;
    flex-grow: 1;
    font-size: 2rem;
`;


const Header = (props) => {

    const handleClick = (params) => {
        console.log(`You clicked the ${params} button!`);
    } 

    return (
        <>
            <HeaderDiv>
                <ButtonsDiv>
                    <HeaderButton handleClick={handleClick}>
                        Thing1
                    </HeaderButton>
                    <HeaderButton handleClick={handleClick}>
                        Thing2
                    </HeaderButton>
                    <HeaderButton handleClick={handleClick}>
                        Thing3
                    </HeaderButton>
                    <HeaderButton handleClick={handleClick}>
                        Thing4
                    </HeaderButton>
                </ButtonsDiv>
                <AccountDiv>
                    <HeaderButton handleClick={handleClick}>
                        Account
                    </HeaderButton>
                </AccountDiv>
            </HeaderDiv>
        </>
    );
}

export default Header;