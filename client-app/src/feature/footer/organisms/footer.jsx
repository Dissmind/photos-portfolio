import React from 'react'
import styled from 'styled-components'
import {Description} from "../atoms/description";
import {Container, Wrapper} from "../../../shared/layout";

const FooterStl = styled(Container)`
  height: 100%;
  background-color: #133F2C;
`

const ContainerStl = styled(Container)`
  padding: 0 2.5%;
`


export const Footer = () => {
  return (
    <FooterStl flex row center>
      <Container limiter>
        <ContainerStl>
          <Wrapper>
            <Description text={`© 2021 "Название студии"`} />
          </Wrapper>
        </ContainerStl>
      </Container>
    </FooterStl>
  )
}
  