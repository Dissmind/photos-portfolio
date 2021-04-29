import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {LabelArrowStl} from "../atoms/label-arrow";

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
`

const FooterContainerStl = styled(Container)`
  height: 45px;
`

export const HomeTemp = ({navbarChildren, labelChildren, mainContentChildren, footerChildren}) => {
  return (
    <Container flex column h100>
      <NavbarContainerStl>{navbarChildren}</NavbarContainerStl>
      <LabelContainerStl>{labelChildren}</LabelContainerStl>
      <MainContentContainerStl flex>{mainContentChildren}</MainContentContainerStl>
      <FooterContainerStl>{footerChildren}</FooterContainerStl>
    </Container>
  )
}