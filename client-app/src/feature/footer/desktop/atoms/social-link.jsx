import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";

const SocialLinkStl = styled(Container)`
  width: 3.7037vh;
  height: 3.7037vh;
  
  &:hover{
    cursor: pointer;
  }
  
  ${media.desktop} {
    width: 2.5vw;
    height: 2.5vw;
  }
`

const SocialLogoStl = styled.img`
  display: block;
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