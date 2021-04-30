import React from 'react'
import {PortfolioTemp} from "../templates/portfolio-temp";
import {Navbar} from "../../../navbar/mobile/organisms/navbar";
import {BtnReturnPortfolio} from "../atoms/btn-return";
import {TitlePortfolio} from "../atoms/title";
import {MainContent} from "../organisms/main-content";
import {Footer} from "../../../footer/mobile/organisms/footer";


export const PortfolioM = ({}) => {
  return (
    <PortfolioTemp
      navbarChildren={<Navbar />}
      btnReturnChildren={<BtnReturnPortfolio />}
      titleChildren={<TitlePortfolio />}
      mainContentChildren={<MainContent />}
      footerChildren={<Footer />}
    />
  )
}