import { useState } from "react";
import styled from "styled-components";
import Modal from "../../components/modal";
import { Button, TextField } from "@material-ui/core";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 1%;

    .login-input {
      margin: 2%;
    }
  }
`;

const Login = () => {
  return (
    <Modal>
      <Container>
        <form>
          <TextField
            className="login-input"
            name="username"
            label="username"
            variant="outlined"
          />
          <TextField
            className="login-input"
            name="password"
            label="password"
            type="password"
            variant="outlined"
          />
          <Button type="submit" variant="contained">
            Log In
          </Button>
          <Button type="submit" variant="contained">
            Back
          </Button>
        </form>
      </Container>
    </Modal>
  );
};

export default Login;
