import styled from "styled-components";
import React, { useEffect, useState } from "react";
import SpellCard from "../../components/spell-card";

const Container = styled.div`
  position: relative;
  padding: 1rem;
  background-color: #6d6d6d;
`;

const SpellCardContainer = styled.div`
  border-radius: 0.5rem;
  background-color: #d0d0d02a;
  padding-top: 1px;
  padding-bottom: 1px;
  box-shadow: 0px 0px 10px 10px #d0d0d02a;
`;
const Spells = (props) => {
  // obviously uses local host right now. Will want to update this with an .env variable when we deploy
  const [resp, setResp] = useState(null);
  const [spells, setSpells] = useState([]);
  const [spellCards, setSpellCards] = useState([]);
  // empty useEffect is called when component mounts.
  useEffect(() => {
    fetch("http://localhost:5000/spells")
      .then((res) => res.json())
      .then((result) => setSpells(result));
  }, []);

  return (
    <Container>
      <SpellCardContainer>
        {spells.map((spell, index) => {
          return <SpellCard key={index} spell={spell} />;
        })}
      </SpellCardContainer>
    </Container>
  );
};

export default Spells;
