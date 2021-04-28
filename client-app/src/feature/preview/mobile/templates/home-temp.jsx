import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";

const NavbarContainerStl = styled(Container)`
  height: 40px;
  margin-bottom: 8px;
  background-color: #ccc;
`

const LabelContainerStl = styled(Container)`
  height: 39px;
  margin-bottom: 30px;
  background-color: #ccc;
`

const MainContentContainerStl = styled(Container)`
  height: 601.5px;
  margin-bottom: 50.5px;
  background-color: #ccc;
  
  justify-content: space-between;
`
const Item = styled(Container)`
  height: 138px;
  background-color: #a5a5a5;
`

const FooterContainerStl = styled(Container)`
  height: 45px;
  background-color: #ccc;
`

export const HomeTemp = ({}) => {
  return (
    <Container flex column h100>
      <NavbarContainerStl flex center>navbar</NavbarContainerStl>
      <LabelContainerStl flex center>label</LabelContainerStl>

      <MainContentContainerStl flex column>
        <Item flex center>menu item</Item>
        <Item flex center>menu item</Item>
        <Item flex center>menu item</Item>
        <Item flex center>menu item</Item>
      </MainContentContainerStl>

      <FooterContainerStl flex center>footer</FooterContainerStl>
    </Container>
  )
}