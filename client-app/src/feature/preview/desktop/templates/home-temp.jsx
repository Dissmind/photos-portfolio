import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";
import {ContainerStl} from "../atoms/label-arrow";

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
  background-color: #ccc;
  
  ${media.desktop} {
    height: 5.3125vw;
  }
  
  ${ContainerStl} {
    margin-left: 14.2592vh;

    ${media.desktop} {
      margin-left: 9.625vw;
    }
  }
`

const MainContentContainerStl = styled(Container)`
  height: 67.5926vh;
  margin-bottom: auto;
  
  ${media.desktop} {
    height: 45.625vw;
  }
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

        <LabelContainerStl flex row center>{labelChildren}</LabelContainerStl>

        <MainContentContainerStl flex row center>{mainContentChildren}</MainContentContainerStl>

        <FooterContainerStl>{footerChildren}</FooterContainerStl>
      </Container>
    </>
  )
}