import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components';
const Wrapper=styled.div`
    min-height: 100vh;
    display: flex; 
    flex-direction: column;
`;
const Main=styled.div`
   flex-grow: 1;
   overflow: auto;
`;

const Layout=(props :any)=>{
   return (
      <Wrapper>
         <Main>
           {props.children}
         </Main>
         <Nav/>
   </Wrapper>)
};
export default  Layout;