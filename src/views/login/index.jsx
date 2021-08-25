import { useState } from 'react';
import styled from "styled-components";
import { Button, TextField } from '@material-ui/core';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #6d6d6d;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
      background-color: white;
      display: flex;
      flex-direction: column;
      padding: 1%;

      .registration-input {
          margin: 2%;
      }
  }
`;

const Login = () => {
  return <Container>Login!</Container>;
};

export default Login;
