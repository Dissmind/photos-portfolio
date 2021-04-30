import React from 'react'
import Media from "react-media";
import {media} from "../../../shared/media-queries";
import {PortfolioD} from "../desktop/pages/portfolio";
import {PortfolioM} from "../mobile/pages/portfolio";

export const ThemeListItems = [
  {theme: "Backstage blog"},
  {theme: "Family"},
  {theme: "Kids"},
  {theme: "Love story"},
  {theme: "New Year"},
  {theme: "Pregnancy"},
  {theme: "Travel"},
  {theme: "Wedding"},
  {theme: "Women"},
]

export const Portfolio = ({}) => {
  return (
    <Media query={media.isMobile}>
      {matches => matches ? <PortfolioM /> : <PortfolioD />}
    </Media>
  )
}