import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";
import {Navbar} from "../../../navbar/desktop/organisms/navbar";
import {Footer} from "../../../footer/organisms/footer";
import {MainContent} from "../organisms/main-content";

const NavbarContainerStl = styled(Container)`
  height: 6.481vh;
  background-color: #ccc;
  margin-bottom: auto;

  ${media.desktop} {
    height: 4.375vw;
  }
`

const MainContentContainerStl = styled(Container)`
  height: 61.1111vh;
  background-color: #ccc;
  margin-bottom: auto;
`

const FooterContainerStl = styled(Container)`
  height: 6.48vh;
  background-color: #ccc;

  ${media.desktop} {
    height: 4.375vw;
  }
`


export const AboutTemp = ({navbarChildren, mainContentChildren, footerChildren}) => {
  return (
    <>
      <Container flex column h100>
        <NavbarContainerStl><Navbar type={'menu'} />{navbarChildren}</NavbarContainerStl>

        <MainContentContainerStl><MainContent />{mainContentChildren}</MainContentContainerStl>

        <FooterContainerStl><Footer />{footerChildren}</FooterContainerStl>
      </Container>
    </>
  )
}