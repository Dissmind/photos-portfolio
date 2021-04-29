import React from 'react'
import Media from "react-media";
import {media} from "../../../shared/media-queries";
import {HomeM} from "../mobile/pages/home";
import {HomeD} from "../desktop/pages/home";

import MenuAboutImg from "../../../attachments/icon/MenuAbout.svg";
import MenuPortfolioImg from "../../../attachments/icon/MenuPortfolio.svg";
import MenuRecordsImg from "../../../attachments/icon/MenuRecords.svg";
import MenuPriceImg from "../../../attachments/icon/MenuPrice.svg";

export const MenuItemsList = [
  {
    title: 'Обо мне',
    url: '/about',
    img: MenuAboutImg
  },
  {
    title: 'Портфолио',
    url: '/portfolio',
    img: MenuPortfolioImg
  },
  {
    title: 'Контакты',
    url: '/records',
    img: MenuRecordsImg
  },
  {
    title: 'Цены',
    url: '/',
    img: MenuPriceImg
  }
]

export const Home = () => {
  return (
    <Media query={media.isMobile}>
      {matches => matches ? <HomeM /> : <HomeD />}
    </Media>
  )
}