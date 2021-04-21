import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {Navbar} from "../../../navbar/desktop/organisms/navbar";
import {Footer} from "../../../footer/organisms/footer";
import {media} from "../../../../shared/media-queries";
import {LabelArrow} from "../atoms/label-arrow";
import {MainContent} from "../organisms/main-content";

const NavbarContainerStl = styled(Container)`
  height: 6.481vh;
  background-color: #ccc;
  margin-bottom: 1vh;

  ${media.desktop} {
    height: 4.375vw;
    margin-bottom: 0.675vw;
  }
`

const LabelContainerStl = styled(Container)`
  height: 7.8704vh;
  background-color: #ccc;
  margin-bottom: auto;
  
  ${media.desktop} {
    height: 5.3125vw;
  }
`

const MainContentContainerStl = styled(Container)`
  height: 67.5926vh;
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


export const HomeTemp = ({navbarChildren, labelChildren, mainContentChildren, footerChildren}) => {
  return (
    <>
      <Container flex column h100>
        <NavbarContainerStl><Navbar type={'lang'} />{navbarChildren}</NavbarContainerStl>

        <LabelContainerStl><LabelArrow text={"Выберите свой язык!"} />{labelChildren}</LabelContainerStl>

        <MainContentContainerStl flex row center><MainContent />{mainContentChildren}</MainContentContainerStl>

        <FooterContainerStl><Footer />{footerChildren}</FooterContainerStl>
      </Container>
    </>
  )
}