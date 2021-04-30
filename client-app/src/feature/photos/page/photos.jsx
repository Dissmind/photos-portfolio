import React from 'react'
import Media from "react-media";
import {media} from "../../../shared/media-queries";
import {PhotosM} from "../mobile/pages/photos";
import {PhotosD} from "../desktop/pages/photos";


export const Photos = ({}) => {
  return (
    <Media query={media.isMobile}>
      {matches => matches ? <PhotosM /> : <PhotosD />}
    </Media>
  )
}