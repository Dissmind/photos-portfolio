import React from 'react'
import styled from 'styled-components'

import BtnSelectLanguageIco from '../../../attachments/icon/BtnSelectLanguageIco.svg'

const BtnSelectLanguageStl = styled.img`
  //display: none;

  //Mobile styles
  //@media screen and (max-width: 576px){
  //  position: relative;
  //  z-index: 2;
  //  
  //  display: block;
  //  width: 1.1875rem;
  //  height: 1.1875rem;
  //  cursor: pointer;
  //  user-select: none;
  //}
`


export const BtnSelectLanguage = ({onClick}) => (
  <BtnSelectLanguageStl src={BtnSelectLanguageIco} onClick={onClick} />
)