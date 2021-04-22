import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";
import {Navbar} from "../../../navbar/desktop/organisms/navbar";
import {Footer} from "../../../footer/organisms/footer";
import {Label} from "../atoms/label";
import {ThemeLinkList} from "../molecules/theme-link-list";

const NavbarContainerStl = styled(Container)`
  height: 6.481vh;
  margin-bottom: 6.4814vh;
  background-color: #ccc;

  ${media.desktop} {
    height: 4.375vw;
    margin-bottom: 4.375vw;
  }
`

const TitleContainerStl = styled(Container)`
  height: 11.1111vh;
  margin-bottom: 9.2592vh;
  background-color: #ccc;
  
  ${media.desktop} {
    height: 7.5vw;
    margin-bottom: 6.25vw;
  }
`

const MainContentContainerStl = styled(Container)`
  height: auto;
  margin-bottom: 3.7037vh;
  background-color: #ccc;

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
`

const FooterContainerStl = styled(Container)`
  height: 6.48vh;
  background-color: #ccc;

  ${media.desktop} {
    height: 4.375vw;
  }
`


export const PortfolioTemp = ({navbarChildren, titleChildren, mainContentChildren, labelChildren, footerChildren}) => {
  return (
    <>
      <Container flex column h100>
        <NavbarContainerStl><Navbar type={'menu'} />{navbarChildren}</NavbarContainerStl>

        <TitleContainerStl flex row center><Label />{titleChildren}</TitleContainerStl>

        <MainContentContainerStl flex row center><ThemeLinkList />{mainContentChildren}</MainContentContainerStl>

        <LabelContainerStl>{labelChildren}</LabelContainerStl>

        <FooterContainerStl><Footer />{footerChildren}</FooterContainerStl>
      </Container>
    </>
  )
}