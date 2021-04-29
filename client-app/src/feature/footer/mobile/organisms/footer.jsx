import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {Description} from "../atoms/description";
import {SocialLink} from "../atoms/social-link";

import InstagramLogo from "../../../../attachments/icon/InstagramLogo.svg"

const FooterStl = styled(Container)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #133F2C;
  padding: 0 20px;
`


export const Footer = ({}) => {
  return (
    <FooterStl flex>
      <Description text={`© 2021 "Название студии"`} />
      <SocialLink logo={InstagramLogo} url={'https://www.google.com'} />
    </FooterStl>
  )
}