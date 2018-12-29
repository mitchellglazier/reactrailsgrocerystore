import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import List from './components/List'
import NoMatch from './components/NoMatch'
import './App.css';
import NavBar from "./components/NavBar";
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
  <NavBar />
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/list" component={List} />
      <Route component={NoMatch} />
    </Switch>
    </Container>
  </Fragment>
);

export default App;
