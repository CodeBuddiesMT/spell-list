import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  height: 10rem;
  padding: 1rem;
  transition: 0.5s;
  &:hover {
    padding: 0.7rem;
  }
`;

const Card = styled.div`
  height: 100%;
  border-radius: 1rem;
  background-color: #ffe3af;
  box-shadow: 0px 0px 5px 5px #0000003e;
  transition: 0.5s;
  &:hover {
    /* background-color: red; */
    box-shadow: 0px 0px 8px 8px #4b004760;
  }
`;
const HeaderWrapper = styled.div`
  height: 2rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: #ffd991;
  box-shadow: 0 10px 8px -8px #ffd991;
  text-align: center;
  font-size: 1.5rem;
  border-color: #00000057;
`;

const HeaderName = styled.div``;

const HeaderLevel = styled.div``;

const SpellCard = (props) => {
  const { spell } = props;
  const { name, description, spell_level } = spell;
  console.log(spell);

  console.log(name, description, spell_level);
  return (
    <Wrapper>
      <Card>
        <HeaderWrapper>
          <HeaderName>{name}</HeaderName>
          <HeaderLevel>{spell_level}</HeaderLevel>
        </HeaderWrapper>
        {description},
      </Card>
    </Wrapper>
  );
};

export default SpellCard;
