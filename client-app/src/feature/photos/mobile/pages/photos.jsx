import React from 'react'
import {PhotosTemp} from "../templates/photos-temp";
import {Navbar} from "../../../navbar/mobile/organisms/navbar";
import {BtnReturnPhotos} from "../atoms/btn-return";
import {TitlePhotos} from "../atoms/title";
import {Footer} from "../../../footer/mobile/organisms/footer";
import {MainContent} from "../organisms/main-content";


export const PhotosM = ({}) => {
  return (
    <PhotosTemp
      navbarChildren={<Navbar />}
      btnReturnChildren={<BtnReturnPhotos />}
      titleChildren={<TitlePhotos />}
      mainContentChildren={<MainContent />}
      footerChildren={<Footer />}
    />
  )
}