import { NavLink} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

function Nav() {
  return (<NavWrapper>
    <ul>
      <li>
        <NavLink to="/money" activeClassName="selected">
          <Icon name="money"/>
          记账页
        </NavLink>

      </li>
      <li>
        <NavLink to="/tag" activeClassName="selected">
          <Icon name="tag"/>
          标签页
        </NavLink>
      </li>
      <li>
        <NavLink to="/Statistics" activeClassName="selected">
          <Icon name="chart"/>
          统计页
        </NavLink>
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
         >a{
         text-align:center;
         padding:4px 0;
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column; 
           .icon{
             width:24px;
             height:24px;
            } 
            &.selected{
              color:red;
              .icon{
                 fill: red;
              }
            }
            }
         }
          
   }
`;
export  default  Nav;