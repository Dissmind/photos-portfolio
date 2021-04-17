import React from 'react'
import styled from 'styled-components'
import {BtnLanguage} from "../atoms/btn-language";

export const BtnLanguageListStl = styled.div`
  display: flex;
  column-gap: 1.966%;
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