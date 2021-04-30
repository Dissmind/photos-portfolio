import React from 'react'
import {AboutTemp} from "../templates/about-temp";
import {Navbar} from "../../../navbar/mobile/organisms/navbar";
import {BtnReturn} from "../atoms/btn-return";
import {Title} from "../atoms/title";
import {MainContent} from "../organisms/main-content";
import {Footer} from "../../../footer/mobile/organisms/footer";

export const AboutM = ({}) => {
  return (
    <AboutTemp
      navbarChildren={<Navbar />}
      btnReturnChildren={<BtnReturn onHome />}
      titleChildren={<Title text={'Обо мне'} />}
      mainContentChildren={<MainContent />}
      footerChildren={<Footer />}
    />
  )
}