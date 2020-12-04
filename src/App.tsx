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
const Wrapper=styled.div`
    min-height: 100vh;
    display: flex; 
    flex-direction: column;
`;
const Main=styled.div`
   flex-grow: 1;
   overflow: auto;
`;
console.log(x);
function App() {
  return (
    <Router>
      <Wrapper>
      <Main>

        <Switch>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/tag">
            <Tag />
          </Route>
          <Route path="/Statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <Nomatch/>
          </Route>
        </Switch>

      </Main>
        <Nav/>
    </Wrapper>
    </Router>
  );
}
function Nomatch() {
  return(
    <div>页面不存在</div>
  )
}
function Statistics() {
  return <h2>统计页</h2>;
}

function Money() {
  return <h2>记账页</h2>;
}

function Tag() {
  return <h2>标签页</h2>;
}
export default App;
