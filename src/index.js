import React from "react";
import ReactDOM from "react-dom";
import "./styling/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";

import styled from "styled-components";

import Spells from "./views/spells";
import Items from "./views/items";
import Races from "./views/races";
import Classes from "./views/classes";
const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: #1c1c1c;
`;
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <Header />
        <Switch>
          <Route path="/spells" component={Spells} />
          <Route path="/items" component={Items} />
          <Route path="/races" component={Races} />
          <Route path="/classes" component={Classes} />
        </Switch>
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
