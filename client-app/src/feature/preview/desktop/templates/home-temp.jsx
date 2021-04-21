import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";

const NavbarContainerStl = styled(Container)`
  height: 6.481vh;
  margin-bottom: 1vh;

  ${media.desktop} {
    height: 4.375vw;
    margin-bottom: 0.675vw;
  }
`

const LabelContainerStl = styled(Container)`
  height: 7.8704vh;
  margin-bottom: auto;
  
  ${media.desktop} {
    height: 5.3125vw;
  }
`

const MainContentContainerStl = styled(Container)`
  height: 67.5926vh;
  margin-bottom: auto;
`

const FooterContainerStl = styled(Container)`
  height: 6.48vh;

  ${media.desktop} {
    height: 4.375vw;
  }
`


export const HomeTemp = ({navbarChildren, labelChildren, mainContentChildren, footerChildren}) => {
  return (
    <>
      <Container flex column h100>
        <NavbarContainerStl>{navbarChildren}</NavbarContainerStl>

        <LabelContainerStl>{labelChildren}</LabelContainerStl>

        <MainContentContainerStl flex row center>{mainContentChildren}</MainContentContainerStl>

        <FooterContainerStl>{footerChildren}</FooterContainerStl>
      </Container>
    </>
  )
}