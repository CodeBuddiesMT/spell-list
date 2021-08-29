import React from "react";
import { Route, useHistory } from "react-router-dom";
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

const PrivateRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          // return <Redirect to="/login" />;
          return (
            <>
              <Component />
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
                    <Button
                      type="back"
                      variant="outlined"
                      onClick={() => history.go(-2)}
                    >
                      Back
                    </Button>
                  </form>
                </Container>
              </Modal>
            </>
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
