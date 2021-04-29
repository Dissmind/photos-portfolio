import React from 'react'
import {PhotosTemp} from "../templates/photos-temp";
import {Navbar} from "../../../navbar/desktop/organisms/navbar";
import {BtnReturn} from "../atoms/btn-return";
import {Title} from "../atoms/title";
import {MainContent} from "../molecules/main-content";
import {Footer} from "../../../footer/desktop/organisms/footer";


export const Photos = () => {
  return (
    <>
      <PhotosTemp
        navbarChildren={<Navbar type={'menu'} />}
        titleChildren={
          <>
            <BtnReturn />
            <Title />
          </>
        }
        mainContentChildren={<MainContent />}
        footerChildren={<Footer />}
      />
    </>
  )
}