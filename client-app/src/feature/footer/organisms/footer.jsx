import React from 'react'
import styled from 'styled-components'
import {Description} from "../atoms/description";

const FooterStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4.375rem;
  background-color: #133F2C;
  margin-top: auto;
`

const WrapperStl = styled.div`
  width: 100%;
  max-width: 1600px;
  padding-left: 2.5rem;
`


export const Footer = ({}) => {

  return (
    <FooterStl>
      <WrapperStl>
        <Description text={`© 2021 "Название студии"`} />
      </WrapperStl>
    </FooterStl>
  )
}
  