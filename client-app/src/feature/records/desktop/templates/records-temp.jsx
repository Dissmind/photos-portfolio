import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";
import {Navbar} from "../../../navbar/desktop/organisms/navbar";
import {Footer} from "../../../footer/organisms/footer";
import {MainContent} from "../organisms/main-content";

const NavbarContainerStl = styled(Container)`
  height: 6.481vh;
  margin-bottom: auto;
  background-color: #ccc;

  ${media.desktop} {
    height: 4.375vw;
  }
`

const MainContentContainerStl = styled(Container)`
  height: 59.2592vh;
  margin-bottom: auto;
  background-color: #ccc;

  ${media.desktop} {
    height: 40vw;
  }
`

const FooterContainerStl = styled(Container)`
  height: 6.48vh;
  background-color: #ccc;

  ${media.desktop} {
    height: 4.375vw;
  }
`


export const RecordsTemp = ({navbarChildren, mainContentChildren, footerChildren}) => {
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