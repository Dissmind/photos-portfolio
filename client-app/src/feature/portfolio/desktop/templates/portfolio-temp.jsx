import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";
import {ContainerStl} from "../../../preview/desktop/atoms/label-arrow";

const NavbarContainerStl = styled(Container)`
  height: 6.481vh;
  margin-bottom: 6.4814vh;

  ${media.desktop} {
    height: 4.375vw;
    margin-bottom: 4.375vw;
  }
`

const TitleContainerStl = styled(Container)`
  height: 11.1111vh;
  margin-bottom: 9.2592vh;
  
  ${media.desktop} {
    height: 7.5vw;
    margin-bottom: 6.25vw;
  }
`

const MainContentContainerStl = styled(Container)`
  height: auto;
  margin-bottom: 3.7037vh;

  ${media.desktop} {
    margin-bottom: 2.5vw;
  }
`

const LabelContainerStl = styled(Container)`
  height: 7.8704vh;
  margin-bottom: auto;

  ${media.desktop} {
    height: 5.3125vw;
  }

  ${ContainerStl} {
    margin-left: 50%;
  }
`

const FooterContainerStl = styled(Container)`
  height: 6.48vh;
  margin-top: 3.7037vh;

  ${media.desktop} {
    height: 4.375vw;
    margin-top: 2.5vw;
  }
`


export const PortfolioTemp = ({navbarChildren, titleChildren, mainContentChildren, labelChildren, footerChildren}) => {
  return (
    <Container flex column h100>
      <NavbarContainerStl sticky>{navbarChildren}</NavbarContainerStl>

      <TitleContainerStl flex row center>{titleChildren}</TitleContainerStl>

      <MainContentContainerStl flex row center>{mainContentChildren}</MainContentContainerStl>

      <LabelContainerStl flex row center>{labelChildren}</LabelContainerStl>

      <FooterContainerStl>{footerChildren}</FooterContainerStl>
    </Container>
  )
}