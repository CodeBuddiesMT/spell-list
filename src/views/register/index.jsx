import { useState } from 'react';
import styled from "styled-components";
import { useForm, Controller } from 'react-hook-form';
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
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const [errorStatus, setErrorStatus] = useState(false);
    const [usernameErrorStatus, setUsernameErrorStatus] = useState(false)
    const [passErrorStatus, setPassErrorStatus] = useState(false)

    const onSubmit = data => console.log(data)

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <Controller
                    name="username"
                    control={control}
                    rules={{ required: true, minLength: 3, maxLength: 15 }}
                    render={({ field}) => <TextField {...field} />}
                />
                {errors.username && <p>Username required</p>} */}
                <TextField
                    error={!!errors.username}
                    className="registration-input"
                    name="username"
                    label="username"
                    variant="outlined"
                    {...register("username", {
                        required: "Username is required.",
                        minLength: {
                            value: 3,
                            message: "Username must be between 3 and 15 characters long."
                        },
                        maxLength: {
                            value: 15,
                            message: "Username must be between 3 and 15 characters long."
                        }
                    })}
                />
                {errors.username && (
                    <span>{errors.username.message}</span>
                )}
                <TextField
                    error={!!errors.password}
                    className="registration-input"
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    {...register("password", {
                        required: "Password is required.",
                        minLength: {
                            value: 5,
                            message: "Password must be between 5 and 15 characters long."
                        },
                        maxLength: {
                            value: 15,
                            message: "Password muse be between 5 and 15 characters long."
                        }
                    })}
                />
                {errors.password && <span>{errors.password.message}</span>}
                <Button
                    variant="contained"
                    type="submit"
                >
                    Register
                </Button>
            </form>
        </Container>
    )
}

export default Registration