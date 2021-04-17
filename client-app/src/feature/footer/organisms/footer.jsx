import React from 'react'
import styled from 'styled-components'
import {Description} from "../atoms/description";
import {Wrapper, Row} from "../../../shared/layout";

const FooterStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 100%;
  background-color: #133F2C;
`

const RowStl = styled(Row)`
  padding: 0 2.5%;
`


export const Footer = ({}) => {

  return (
    <FooterStl>
      <Wrapper w1600>
        <RowStl>
          <Description text={`© 2021 "Название студии"`} />
        </RowStl>
      </Wrapper>
    </FooterStl>
  )
}
  