import styled from "styled-components";
import React from "react";

const ButtonContainer = styled.div`
  flex-grow: 1;
  border: solid 1px;
  border-color: transparent;
  width: 100%;
  max-width: 10rem;
  border-color: #616161;
  color: white;
  transition: 0.3s;
  &:hover {
    border-color: #00000022;
    color: black;
  }
`;
const ButtonDiv = styled.button`
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  color: inherit;
  background-color: transparent;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 0.25rem;
  border: none;
  max-width: 10rem;
`;

const HeaderButton = (props) => {
  const { children, handleClick } = props;

  return (
    <ButtonContainer>
      <ButtonDiv onClick={() => handleClick(children)}>{children}</ButtonDiv>
    </ButtonContainer>
  );
};

export default HeaderButton;
