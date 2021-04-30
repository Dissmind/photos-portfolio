import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";

import AboutPhotoMobile from '../../../../attachments/photos/AboutPhotoMob.jpg'

export const MainPhotoStl = styled(Container)`
  position: relative;
  width: 100%;
`

const PhotoStl = styled.img`
  width: 100%;
  user-select: none;
`

const PhotoBorderStl = styled.div`
  position: absolute;
  top: 11px;
  bottom: 11px;
  left: 9px;
  right: 9px;
  border: 2px #FFFFFF solid;
`


export const MainPhoto = ({}) => {

  return (
    <MainPhotoStl flex center>
      <PhotoStl src={AboutPhotoMobile} />
      <PhotoBorderStl />
    </MainPhotoStl>
  )
}