import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import x from 'icons/money.svg'
import styled from 'styled-components';
import './index.scss'
import Nav from './components/Nav';
import Layout from './components/Layout';
import Money from './views/Money';
import Tag from './views/Tag';
import Statistics from './views/Statistics';
import Nomatch from './views/Nomatch';

console.log(x);
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/tag">
            <Tag/>
          </Route>
          <Route path="/Statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <Nomatch/>
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
