import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";

const SocialLinkStl = styled(Container)`
  height: 22px;
  
  &:hover{
    cursor: pointer;
  }
`

const SocialLogoStl = styled.img`
  height: 100%;
`

const LinkStl = styled.a`
  height: 100%;
`


export const SocialLink = ({logo, url}) => {
  return (
    <SocialLinkStl>
      <LinkStl href={url}>
        <SocialLogoStl src={logo} />
      </LinkStl>
    </SocialLinkStl>
  )
}