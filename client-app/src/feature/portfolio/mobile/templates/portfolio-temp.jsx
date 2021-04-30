import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {BtnReturnStl} from "../../../about/mobile/atoms/btn-return";
import {Navbar} from "../../../navbar/mobile/organisms/navbar";
import {BtnReturnPortfolio} from "../atoms/btn-return";
import {TitlePortfolio} from "../atoms/title";
import {Footer} from "../../../footer/mobile/organisms/footer";

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
  background-color: #ccc;
`

const FooterContainerStl = styled(Container)`
  height: 45px;
`


export const PortfolioTemp = ({}) => {
  return (
    <Container flex column h100>
      <NavbarContainerStl><Navbar /></NavbarContainerStl>
      <ReturnContainerStl><BtnReturnPortfolio /></ReturnContainerStl>
      <TitleContainerStl><TitlePortfolio /></TitleContainerStl>
      <MainContentContainerStl flex center></MainContentContainerStl>
      <FooterContainerStl><Footer /></FooterContainerStl>
    </Container>
  )
}