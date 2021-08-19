import styled from "styled-components";
// import { HeaderButton } from '../buttons';
import { HeaderLink } from "../links";

import { Link } from "react-router-dom";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  top: 0%;
  width: 100%;
  height: 3rem;
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
  max-width: 10rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Header = (props) => {
  const handleClick = (params) => {
    console.log(`You clicked the ${params} button!`);
  };

  return (
    <>
      <HeaderDiv>
        <ButtonsDiv>
          <HeaderLink to="spells">Spells</HeaderLink>
          <HeaderLink to="items">Items</HeaderLink>
          <HeaderLink to="classes">Classes</HeaderLink>
          <HeaderLink to="races">Races</HeaderLink>
          <HeaderLink to="characters">Characters</HeaderLink>
        </ButtonsDiv>
        <AccountDiv>
          <HeaderLink to="account">Account</HeaderLink>
        </AccountDiv>
      </HeaderDiv>
    </>
  );
};

export default Header;
