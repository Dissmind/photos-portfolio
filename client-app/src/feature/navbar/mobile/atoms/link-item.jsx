import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";
import {Container} from "../../../../shared/layout";

const LinkItemStl = styled(Container)`
  height: 100%;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #FFFFFF;
  white-space: pre;
  user-select: none;
`

const LinkStl = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  
  &:link, :hover{
    text-decoration: none;
    color: #FFFFFF;
  }
`

export const LinkItem = ({text, to}) => {
  return (
    <LinkItemStl flex center>
      <LinkStl to={to}>
        {text}
      </LinkStl>
    </LinkItemStl>
  )
}
