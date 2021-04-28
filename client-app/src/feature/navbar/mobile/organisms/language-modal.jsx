import React from 'react'
import styled from 'styled-components'
import {BtnLanguageListModal} from "../molecules/btn-language-list-modal";

const LanguageModalStl = styled.div`
  position: absolute;
  top: 2.875rem;
  left: 18px;
`

const BackgroundStl = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  
  background-color: #000000;
  opacity: 30%;
  width: 100vh;
  height: 100vh;
`

const PointersWrapper = styled.div`
  position: relative;
  left: 0.21875rem;
`

const PointerShadowStl = styled.div`
  position: absolute;
  z-index: 1;
  
  width: 17px;
  height: 17px;
  background-color: #FFFFFF;
  border-radius: 3px 0 0 0;
  transform: rotate(45deg);
  box-shadow: 0 3px 6px 0 rgba(0,0,0, 16%);
`

const PointerStl = styled.div`
  position: absolute;
  z-index: 3;
  
  width: 17px;
  height: 17px;
  background-color: #FFFFFF;
  border-radius: 3px 0 0 0;
  transform: rotate(45deg);
`

const ContainerStl = styled.div`
  position: relative;
  z-index: 2;
  top: 8px;
  
  width: 206px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 1.2px 10px 10px 10px;
  box-shadow: 0 3px 6px 0 rgba(0,0,0, 16%);
  padding: 15px 0;
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