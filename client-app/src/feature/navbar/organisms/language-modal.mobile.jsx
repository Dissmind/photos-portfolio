import React from 'react'
import styled from 'styled-components'
import {BtnLanguageListModal} from "../molecules/btn-language-list-modal.mobile";

const LanguageModalStl = styled.div`
  position: relative;
`


const BgWrapper = styled.div`
  position: relative;
  left: 0.21875rem;
`

const BgPointerShadowStl = styled.div`
  position: absolute;
  z-index: 1;
  
  width: 1.0625rem;
  height: 1.0625rem;
  background-color: #FFFFFF;
  border-radius: 0.1875rem 0 0 0;
  transform: rotate(45deg);
  box-shadow: 0 0.1875rem 0.375rem 0 rgba(0,0,0, 16%);
`

const BgPointerStl = styled.div`
  position: absolute;
  z-index: 3;
  
  width: 1.0625rem;
  height: 1.0625rem;
  background-color: #FFFFFF;
  border-radius: 0.1875rem 0 0 0;
  transform: rotate(45deg);
`

const ContainerStl = styled.div`
  position: absolute;
  z-index: 2;
  top: 0.5rem;
  
  width: 12.875rem;
  height: 8.125rem;
  background-color: #FFFFFF;
  box-shadow: 0 0.1875rem 0.375rem 0 rgba(0,0,0, 16%);
  padding: 0.9375rem 0;
`


export const LanguageModal = ({}) => {

  return (
    <LanguageModalStl>

      <BgWrapper>
        <BgPointerShadowStl />
        <BgPointerStl />
      </BgWrapper>

      <ContainerStl>
        <BtnLanguageListModal />
      </ContainerStl>

    </LanguageModalStl>
  )
}