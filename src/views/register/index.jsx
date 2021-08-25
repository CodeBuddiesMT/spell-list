import { useState } from 'react';
import styled from "styled-components";
import { useForm } from 'react-hook-form';
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

const Registration = () => {
    const { register, handleSubmit, errors } = useForm();
    const [errorStatus, setErrorStatus] = useState(false);
    const [usernameErrorStatus, setUsernameErrorStatus] = useState(false)
    const [passErrorStatus, setPassErrorStatus] = useState(false)

    return (
        <Container>
            <form>
                <TextField
                    required
                    error={usernameErrorStatus}
                    className="registration-input"
                    label="Username"
                    variant="outlined"
                >
                    Username
                </TextField>
                <TextField
                    required
                    error={passErrorStatus}
                    className="registration-input"
                    label="Password"
                    type="password"
                    variant="outlined"
                >
                    Password
                </TextField>
                <Button
                    variant="contained"
                >
                    Register
                </Button>
            </form>
        </Container>
    )
}

export default Registration