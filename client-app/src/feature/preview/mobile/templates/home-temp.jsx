import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {Navbar} from "../../../navbar/mobile/organisms/navbar";
import {LabelArrow, LabelArrowStl} from "../atoms/label-arrow";
import {MainContent} from "../organisms/main-content";

const NavbarContainerStl = styled(Container)`
  height: 40px;
  margin-bottom: 8px;
`

const LabelContainerStl = styled(Container)`
  height: 39px;
  margin-bottom: 30px;
  
  ${LabelArrowStl} {
    margin-left: 26px;
  }
`

const MainContentContainerStl = styled(Container)`
  height: 627.5px;
  margin-bottom: 50.5px;
  background-color: #ccc;
`

const FooterContainerStl = styled(Container)`
  height: 45px;
  background-color: #ccc;
`

export const HomeTemp = ({}) => {
  return (
    <Container flex column h100>
      <NavbarContainerStl flex center><Navbar /></NavbarContainerStl>
      <LabelContainerStl><LabelArrow /></LabelContainerStl>

      <MainContentContainerStl flex><MainContent /></MainContentContainerStl>

      <FooterContainerStl flex center>footer</FooterContainerStl>
    </Container>
  )
}