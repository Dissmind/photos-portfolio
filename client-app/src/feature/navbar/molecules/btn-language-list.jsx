import React from 'react'
import styled from 'styled-components'
import {BtnLanguage} from "../atoms/btn-language";

const BtnLanguageListStl = styled.div`
  display: flex;
  
  div:not(:first-child) {
    margin-left: 1.25rem;
  }

   //Mobile styles
   @media screen and (min-width: 320px) and (max-width: 576px){
     display: none;
   }
`


export const BtnLanguageList = ({}) => {
  return (
    <BtnLanguageListStl>
      <BtnLanguage text={"eng"} />
      <BtnLanguage text={"pol"} />
      <BtnLanguage text={"рус"} />
    </BtnLanguageListStl>
  )
}