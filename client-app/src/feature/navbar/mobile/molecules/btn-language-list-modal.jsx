import React from 'react'
import styled from 'styled-components'
import {BtnLanguage} from "../atoms/btn-language";
import {Container} from "../../../../shared/layout";

const BtnLanguageListModalStl = styled(Container)`
  width: 100%;
  height: 100%;
  
  justify-content: space-between;
  align-items: center;
`


export const BtnLanguageListModal = () => (
  <BtnLanguageListModalStl flex column>
    <BtnLanguage text={"English"} />
    <BtnLanguage text={"Polskie"} />
    <BtnLanguage text={"Русский"} />
  </BtnLanguageListModalStl>
)