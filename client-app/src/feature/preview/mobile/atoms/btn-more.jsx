import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {NavLink} from "react-router-dom";

const BtnMoreStl = styled(Container)`
  width: 114px;
  height: 28px;
  border: #FFFFFF 1px solid;
  border-radius: 15px;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  user-select: none;
  
  :hover{
    cursor: pointer;
  }
`

const LinkStl = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  
  &:link, &:hover{
    text-decoration: none;
    color: #FFFFFF;
  }
`


export const BtnMore = ({url}) => {
  return (
    <BtnMoreStl flex center>
      <LinkStl to={url}>
        Подробнее
      </LinkStl>
    </BtnMoreStl>
  )
}