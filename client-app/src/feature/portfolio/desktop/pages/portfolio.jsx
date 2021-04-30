import React from 'react'
import {Navbar} from "../../../navbar/desktop/organisms/navbar";
import {Label} from "../atoms/label";
import {ThemeLinkList} from "../molecules/theme-link-list";
import {PortfolioLabelArrow} from "../atoms/portfolio-label-arrow";
import {Footer} from "../../../footer/desktop/organisms/footer";
import {PortfolioTemp} from "../templates/portfolio-temp";


export const PortfolioD = () => {
  return (
    <PortfolioTemp
      navbarChildren={<Navbar type={'menu'} />}
      titleChildren={<Label />}
      mainContentChildren={<ThemeLinkList />}
      labelChildren={<PortfolioLabelArrow />}
      footerChildren={<Footer />}
    />
  )
}