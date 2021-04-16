import React from 'react'
import styled from 'styled-components'
import {Description} from "../atoms/description";
import {Wrapper} from "../../../shared/layout";

const FooterStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 100%;
  background-color: #133F2C;
`

const WrapperStl = styled(Wrapper)`
  padding-left: 2.5vw;
`


export const Footer = ({}) => {

  return (
    <FooterStl>
      <WrapperStl w1600>
        <Description text={`© 2021 "Название студии"`} />
      </WrapperStl>
    </FooterStl>
  )
}
  