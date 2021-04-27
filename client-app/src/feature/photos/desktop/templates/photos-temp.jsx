import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";
import {BtnReturnStl} from "../atoms/btn-return";


const NavbarContainerStl = styled(Container)`
  height: 6.481vh;
  margin-bottom: 6.4814vh;

  ${media.desktop} {
    height: 4.375vw;
    margin-bottom: 4.375vw;
  }
`

const TitleContainerStl = styled(Container)`
  height: 12.6852vh;
  margin-bottom: 5.5555vh;
  
  ${media.desktop} {
    height: 8.5625vw;
    margin-bottom: 3.75vw;
  }
`

const ContainerStl = styled(Container)`
  position: relative;
  height: 100%;
  
  ${BtnReturnStl} {
    position: absolute;
    left: 22.2222vh;
    top: 50%;
    transform: translateY(-50%);

    ${media.desktop} {
      left: 15vw;
    }
  }
`

const MainContentContainerStl = styled(Container)`
  height: auto;
  margin-bottom: auto;
`

const FooterContainerStl = styled(Container)`
  height: 6.48vh;
  margin-top: 3.7037vh;

  ${media.desktop} {
    height: 4.375vw;
    margin-top: 2.5vw;
  }
`

export const PhotosTemp = ({navbarChildren, titleChildren, mainContentChildren, footerChildren}) => {
  return (
    <>
      <Container flex column h100>
        <NavbarContainerStl sticky>{navbarChildren}</NavbarContainerStl>

        <TitleContainerStl flex row center>
          <ContainerStl limiter flex row center>
            {titleChildren}
          </ContainerStl>
        </TitleContainerStl>

        <MainContentContainerStl flex row center>{mainContentChildren}</MainContentContainerStl>

        <FooterContainerStl>{footerChildren}</FooterContainerStl>
      </Container>
    </>
  )
}