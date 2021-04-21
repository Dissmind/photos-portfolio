import React from 'react'
import styled from 'styled-components'
import {BtnLanguage} from "../atoms/btn-language";
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";

const BtnLanguageListStl = styled(Container)`
  flex-grow: 1;
  
  div:not(:last-child){
    margin-right: 1.8518vh;
  }
  
  ${media.desktop} {
    div:not(:last-child){
      margin-right: 1.25vw;
    }
  }
`


export const BtnLanguageList = ({}) => {
  return (
    <BtnLanguageListStl flex row>
      <BtnLanguage text={"eng"} />
      <BtnLanguage text={"pol"} />
      <BtnLanguage text={"рус"} />
    </BtnLanguageListStl>
  )
}