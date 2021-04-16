import React from 'react'
import styled from 'styled-components'
import {Column, Container} from "../../../../shared/layout";

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
      <Column h100>
        <NavbarContainerStl>{navbarChildren}</NavbarContainerStl>
        <LabelContainerStl>{labelChildren}</LabelContainerStl>
        <MainContentContainerStl>{mainContentChildren}</MainContentContainerStl>
        <FooterContainerStl>{footerChildren}</FooterContainerStl>
      </Column>
    </>
  )
}