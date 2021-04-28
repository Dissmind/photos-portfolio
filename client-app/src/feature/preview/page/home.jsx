import React from 'react'
import Media from "react-media";
import {media} from "../../../shared/media-queries";
import {HomeM} from "../mobile/pages/home";
import {HomeD} from "../desktop/pages/home";



export const Home = ({}) => {

  return (
    <Media query={media.isMobile}>
      {
        matches => matches ? <HomeM /> : <HomeD />
      }
    </Media>
  )
}