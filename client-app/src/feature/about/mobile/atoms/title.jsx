import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";

const TitleStl = styled(Container)`
  height: 100%;
  font-family: 'Solena', serif;
  font-weight: 400;
  font-size: 45px;
  line-height: 54px;
  color: #14402D;
  opacity: 60%;
`


export const Title = ({text}) => {
  return (
    <TitleStl flex center>
      {text}
    </TitleStl>
  )
}