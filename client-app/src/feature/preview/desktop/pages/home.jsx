import React from 'react';
import {HomeTemp} from "../templates/home-temp";
import {Navbar} from "../../../navbar/desktop/organisms/navbar";
import {LabelArrow} from "../atoms/label-arrow";
import {MainContent} from "../organisms/main-content";
import {Footer} from "../../../footer/organisms/footer";


export const Home = () => (
  <>
    <HomeTemp
      navbarChildren={<Navbar type={'lang'} />}
      labelChildren={<LabelArrow text={"Выберите свой язык!"} />}
      mainContentChildren={<MainContent />}
      footerChildren={<Footer />}
    />
  </>
)