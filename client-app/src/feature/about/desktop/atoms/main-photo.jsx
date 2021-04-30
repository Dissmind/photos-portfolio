import React from "react";
import styled from "styled-components";
import AboutMainPhoto from "../../../../attachments/photos/AboutPhoto.jpg";
import {media} from "../../../../shared/media-queries";

export const MainPhotoStl = styled.div`
  height: 100%;
  position: relative;
  user-select: none;
`

const MainPhotoImgStl = styled.img`
  width: 47.9629vh;
  height: 100%;
  object-fit: cover;
  
  ${media.desktop} {
    width: 32.375vw;
  }
`

const MainPhotoBorderStl = styled.div`
  position: absolute;
  top: 3.0555vh;
  left: 3.5185vh;
  
  width: 40.9259vh;
  height: 55vh;
  border: #FFFFFF 0.4629vh solid;
  
  ${media.desktop} {
    top: 2.0625vw;
    left: 2.375vw;

    width: 27.625vw;
    height: 37.125vw;
    border: #FFFFFF 0.3125vw solid;
  }
`

export const MainPhoto = () => (
  <MainPhotoStl>
    <MainPhotoImgStl src={AboutMainPhoto} />
    <MainPhotoBorderStl />
  </MainPhotoStl>
)