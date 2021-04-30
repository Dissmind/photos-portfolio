import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {BtnReturnStl} from "../atoms/btn-return";

const NavbarContainerStl = styled(Container)`
  height: 40px;
  margin-bottom: 15px;
`

const ReturnContainerStl = styled(Container)`
  height: 24px;
  margin-bottom: 5px;
  
  ${BtnReturnStl} {
    margin-left: 20px;
  }
`

const TitleContainerStl = styled(Container)`
  height: 54px;
  margin-bottom: 13px;
`

const MainContentContainerStl = styled(Container)`
  margin-bottom: 50px;
`

const FooterContainerStl = styled(Container)`
  height: 45px;
  margin-top: auto;
`


export const AboutTemp = ({navbarChildren, btnReturnChildren, titleChildren, mainContentChildren, footerChildren}) => {
  
  return (
    <Container flex column h100>
      <NavbarContainerStl>{navbarChildren}</NavbarContainerStl>
      <ReturnContainerStl>{btnReturnChildren}</ReturnContainerStl>
      <TitleContainerStl>{titleChildren}</TitleContainerStl>
      <MainContentContainerStl flex center>{mainContentChildren}</MainContentContainerStl>
      <FooterContainerStl>{footerChildren}</FooterContainerStl>
    </Container>
  )
}