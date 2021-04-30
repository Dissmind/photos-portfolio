import React from 'react'
import Media from "react-media";
import {media} from "../../../shared/media-queries";
import {AboutD} from "../desktop/pages/about";
import {AboutM} from "../mobile/pages/about";

export const About = ({}) => {
  return (
    <Media query={media.isMobile}>
      {matches => matches ? <AboutM /> : <AboutD />}
    </Media>
  )
}