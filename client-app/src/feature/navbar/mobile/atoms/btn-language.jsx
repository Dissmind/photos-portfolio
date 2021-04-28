import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";

const BtnLanguageStl = styled(Container)`
  width: 171px;
  height: 28px;
  border: 1px #133F2C solid;
  border-radius: 15px;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #133F2C;
`


export const BtnLanguage = ({text}) => {
  return (
    <BtnLanguageStl flex center>
      {text}
    </BtnLanguageStl>
  )
}