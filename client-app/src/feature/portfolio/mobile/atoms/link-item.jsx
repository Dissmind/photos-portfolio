import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";

const LinkItemStl = styled(Container)`
  width: 220px;
  height: 70px;
  background-color: #133F2C;
  border-radius: 10px;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 25px;
  line-height: 25px;
  color: #FFFFFF;
`


export const LinkItem = ({theme}) => {

  return (
    <LinkItemStl flex center>
      {theme}
    </LinkItemStl>
  )
}