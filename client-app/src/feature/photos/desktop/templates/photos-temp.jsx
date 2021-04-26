import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";
import {Navbar} from "../../../navbar/desktop/organisms/navbar";
import {Footer} from "../../../footer/organisms/footer";
import {Title} from "../atoms/title";
import {useSelector} from "react-redux";
import {selectGroupTitle} from "../../photos.slice";
import {BtnReturn, BtnReturnStl} from "../atoms/btn-return";
import {MainContent} from "../molecules/main-content";


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
  background-color: #ccc;
  
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
    
    //TODO: Где-то тут что-то не так
    ${media.desktop} {
      left: 15vw;
    }
  }
`

const MainContentContainerStl = styled(Container)`
  height: auto;
  margin-bottom: auto;
  background-color: #ccc;
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
        <NavbarContainerStl sticky><Navbar type={'menu'} />{navbarChildren}</NavbarContainerStl>

        <TitleContainerStl flex row center>
          <ContainerStl limiter flex row center>
            <BtnReturn />
            <Title />
          </ContainerStl>
          {titleChildren}
        </TitleContainerStl>

        <MainContentContainerStl flex row center><MainContent />{mainContentChildren}</MainContentContainerStl>

        <FooterContainerStl><Footer />{footerChildren}</FooterContainerStl>
      </Container>
    </>
  )
}