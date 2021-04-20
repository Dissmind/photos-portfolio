import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {Navbar} from "../../../navbar/desktop/organisms/navbar";
import {Footer} from "../../../footer/organisms/footer";

const NavbarContainerStl = styled(Container)`
  height: 6.481vh;
  background-color: #ccc;
  
  margin-bottom: 1vh;
`

const LabelContainerStl = styled(Container)`
  height: 12.05vh;
  background-color: #ccc;
  
  margin-bottom: 4.25vh;
`

const MainContentContainerStl = styled(Container)`
  height: 67.5vh;
  background-color: #ccc;

  margin-bottom: auto;
`

const FooterContainerStl = styled(Container)`
  height: 6.48vh;
  background-color: #ccc;
`


export const HomeTemp = ({navbarChildren, labelChildren, mainContentChildren, footerChildren}) => {
  return (
    <>
      <Container flex column h100>
        <NavbarContainerStl><Navbar type={'lang'} />{navbarChildren}</NavbarContainerStl>
        <LabelContainerStl>{labelChildren}</LabelContainerStl>
        <MainContentContainerStl>{mainContentChildren}</MainContentContainerStl>
        <FooterContainerStl><Footer />{footerChildren}</FooterContainerStl>
      </Container>
    </>
  )
}