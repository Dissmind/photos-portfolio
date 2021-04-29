import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";

const BtnMoreStl = styled(Container)`
  width: 114px;
  height: 28px;
  border: #FFFFFF 1px solid;
  border-radius: 15px;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #FFFFFF;
  user-select: none;
  
  :hover{
    cursor: pointer;
  }
`


export const BtnMore = ({}) => {
  return (
    <BtnMoreStl flex center>
      Подробнее
    </BtnMoreStl>
  )
}