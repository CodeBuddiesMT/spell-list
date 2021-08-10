// file: /components/LinkButton.jsx
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import styled from "styled-components";

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
  left: 50%;
  transform: translate(-50%, -50%);
  color: inherit;
  background-color: transparent;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 0.25rem;
  border: none;
  max-width: 10rem;
`;

const HeaderLink = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props;
  return (
    <ButtonContainer
      onClick={(event) => {
        onClick && onClick(event);
        history.push(to);
      }}
    >
      <ButtonDiv
        {...rest} // `children` is just another prop!
      />
    </ButtonContainer>
  );
};

HeaderLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(HeaderLink);
