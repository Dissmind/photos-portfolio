import React from 'react'
import styled from 'styled-components'

import BtnSelectLanguageIco from '../../../../attachments/icon/BtnSelectLanguageIco.svg'

const BtnSelectLanguageStl = styled.img`
  position: relative;
  z-index: 2;
  
  display: block;
  width: 19px;
  height: 19px;
  cursor: pointer;
  user-select: none;
`


export const BtnSelectLanguage = ({onClick}) => (
  <BtnSelectLanguageStl src={BtnSelectLanguageIco} onClick={onClick} />
)