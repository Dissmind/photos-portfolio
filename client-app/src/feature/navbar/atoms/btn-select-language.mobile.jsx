import React from 'react'
import styled from 'styled-components'

import BtnSelectLanguageIco from '../../../attachments/icon/BtnSelectLanguageIco.svg'

const BtnSelectLanguageStl = styled.img`
  width: 1.1875rem;
  height: 1.1875rem;
  cursor: pointer;
  user-select: none;
`


export const BtnSelectLanguage = () => (
  <BtnSelectLanguageStl src={BtnSelectLanguageIco} />
)