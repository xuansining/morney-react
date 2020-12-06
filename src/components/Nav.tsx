import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

function Nav() {
  return (<NavWrapper>
    <ul>
      <li>
         <Icon name="money"/>
        <Link to="/money">记账页</Link>
      </li>
      <li>
        <Icon name="tag"/>
        <Link to="/tag">标签页</Link>
      </li>
      <li>
        <Icon name="chart"/>
        <Link to="/Statistics">统计页</Link>
      </li>
    </ul>
  </NavWrapper>)
}
const NavWrapper=styled.nav`
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    >ul{
      display:flex;
      >li{
         min-width: 33.333%;
         text-align:center;
         padding:4px 0;
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;
      }    
   }
`;
export  default  Nav;