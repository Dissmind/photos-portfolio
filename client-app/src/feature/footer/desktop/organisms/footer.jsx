import React from 'react'
import styled from 'styled-components'
import {Description} from "../atoms/description";
import {Container} from "../../../../shared/layout";
import {SocialLink} from "../atoms/social-link";

import InstagramLogo from "../../../../attachments/icon/InstagramLogo.svg"

const FooterStl = styled(Container)`
  height: 100%;
  background-color: #133F2C;
`

const ContainerStl = styled(Container)`
  padding: 0 2.5%;
  justify-content: space-between;
  align-items: center;
`


export const Footer = () => {
  return (
    <FooterStl flex row center>
      <Container limiter>
        <ContainerStl flex row>
          <Description text={`© 2021 "Название студии"`} />
          <SocialLink url={'https://www.google.com'} logo={InstagramLogo} />
        </ContainerStl>
      </Container>
    </FooterStl>
  )
}
  