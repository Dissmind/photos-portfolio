import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";

const SocialLinkStl = styled(Container)`
  width: 22px;
  height: 22px;

  &:hover{
    cursor: pointer;
  }
`

const SocialLogoStl = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`

const LinkStl = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`


export const SocialLink = ({url, logo}) => {
  return (
    <SocialLinkStl flex center>
      <LinkStl href={url} target={'_blank'}>
        <SocialLogoStl src={logo} />
      </LinkStl>
    </SocialLinkStl>
  )
}