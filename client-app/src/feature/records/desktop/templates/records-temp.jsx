import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";

const NavbarContainerStl = styled(Container)`
  height: 6.481vh;
  margin-bottom: auto;

  ${media.desktop} {
    height: 4.375vw;
  }
`

const MainContentContainerStl = styled(Container)`
  height: 59.2592vh;
  margin-bottom: auto;

  ${media.desktop} {
    height: 40vw;
  }
`

const FooterContainerStl = styled(Container)`
  height: 6.48vh;

  ${media.desktop} {
    height: 4.375vw;
  }
`


export const RecordsTemp = ({navbarChildren, mainContentChildren, footerChildren}) => {
  return (
    <>
      <Container flex column h100>
        <NavbarContainerStl>{navbarChildren}</NavbarContainerStl>

        <MainContentContainerStl flex row center>{mainContentChildren}</MainContentContainerStl>

        <FooterContainerStl>{footerChildren}</FooterContainerStl>
      </Container>
    </>
  )
}