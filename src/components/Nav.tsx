import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

function Nav() {
  return (<NavWrapper>
    <ul>
      <li>
        <Link to="/money">记账页</Link>
      </li>
      <li>
        <Link to="/tag">标签页</Link>
      </li>
      <li>
        <Link to="/Statistics">统计页</Link>
      </li>
    </ul>
  </NavWrapper>)
}
const NavWrapper=styled.nav`
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    >ul{
      display:flex;
      >li{
         min-width: 33.333%;
         text-align:center;
         padding:16px;
      }    
   }
`;
export  default  Nav;