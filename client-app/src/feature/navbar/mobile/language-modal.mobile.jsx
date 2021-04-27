import React from 'react'
import styled from 'styled-components'
import {BtnLanguageListModal} from "./btn-language-list-modal.mobile";

const LanguageModalStl = styled.div`
  position: absolute;
  top: 2.875rem;
  
`

const BackgroundStl = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  
  background-color: #000000;
  opacity: 30%;
  width: 100vw;
  height: 100vh;
`

const PointersWrapper = styled.div`
  position: relative;
  left: 0.21875rem;
`

const PointerShadowStl = styled.div`
  position: absolute;
  z-index: 1;
  
  width: 1.0625rem;
  height: 1.0625rem;
  background-color: #FFFFFF;
  border-radius: 0.1875rem 0 0 0;
  transform: rotate(45deg);
  box-shadow: 0 0.1875rem 0.375rem 0 rgba(0,0,0, 16%);
`

const PointerStl = styled.div`
  position: absolute;
  z-index: 3;
  
  width: 1.0625rem;
  height: 1.0625rem;
  background-color: #FFFFFF;
  border-radius: 0.1875rem 0 0 0;
  transform: rotate(45deg);
`

const ContainerStl = styled.div`
  position: relative;
  z-index: 2;
  top: 0.5rem;
  
  width: 12.875rem;
  height: 8.125rem;
  background-color: #FFFFFF;
  border-radius: 0.125rem 0.625rem 0.625rem 0.625rem;
  box-shadow: 0 0.1875rem 0.375rem 0 rgba(0,0,0, 16%);
  padding: 0.9375rem 0;
`


export const LanguageModal = ({close}) => {
  return (
    <>
      <BackgroundStl onClick={close}/>

      <LanguageModalStl>
        <PointersWrapper>
          <PointerShadowStl />
          <PointerStl />
        </PointersWrapper>

        <ContainerStl>
          <BtnLanguageListModal />
        </ContainerStl>
      </LanguageModalStl>
    </>
  )
}