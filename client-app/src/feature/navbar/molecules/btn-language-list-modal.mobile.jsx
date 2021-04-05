import React from 'react'
import styled from 'styled-components'
import {BtnLanguage} from "../atoms/btn-language";

const BtnLanguageListModalStl = styled.div`
  display: none;

  //Mobile styles
  @media screen and (max-width: 576px){
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`


export const BtnLanguageListModal = () => (
  <BtnLanguageListModalStl>
    <BtnLanguage text={"English"} />
    <BtnLanguage text={"Polskie"} />
    <BtnLanguage text={"Русский"} />
  </BtnLanguageListModalStl>
)