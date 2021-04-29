import React from 'react'
import {Navbar} from "../../../navbar/desktop/organisms/navbar";
import {MainContent} from "../organisms/main-content";
import {Footer} from "../../../footer/desktop/organisms/footer";
import {RecordsTemp} from "../templates/records-temp";


export const Records = () => {
  return (
    <>
      <RecordsTemp
        navbarChildren={<Navbar type={'menu'} />}
        mainContentChildren={<MainContent />}
        footerChildren={<Footer />}
      />
    </>
  )
}