import React from 'react'
import {HomeTemp} from "../templates/home-temp";
import {Navbar} from "../../../navbar/mobile/organisms/navbar";
import {LabelArrow} from "../atoms/label-arrow";
import {MainContent} from "../organisms/main-content";
import {Footer} from "../../../footer/mobile/organisms/footer";


export const HomeM = ({}) => {
  return (
    <HomeTemp
      navbarChildren={<Navbar />}
      labelChildren={<LabelArrow />}
      mainContentChildren={<MainContent />}
      footerChildren={<Footer />}
    />
  )
}