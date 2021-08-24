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
      background-color: gray;
      display: flex;
      flex-direction: column;
      padding: 1%;
  }
`;

const Registration = () => {
    const { register, handleSubmit, errors } = useForm();
    const [errorStatus, setErrorStatus] = useState(null);

    return (
        <Container>
            <form>
                <TextField
                    required
                    label="Username"
                    variant="outlined"
                >
                    Username
                </TextField>
                <TextField
                    required
                    label="Password"
                    type="password"
                    variant="outlined"
                >
                    Password
                </TextField>
                <Button
                    variant="contained"
                >
                    Submit
                </Button>
            </form>
        </Container>
    )
}

export default Registration