import React from "react";
import styled from "styled-components";
import AboutMainPhoto from "../../../attachments/photos/AbotMainPhoto.jpg";

const MainPhotoStl = styled.div`
  position: relative;
  & > div:nth-child(2){
    position: absolute;
    top: 33px;
    left: 38px;
  }
`

const MainPhotoImgStl = styled.img`
  width: 518px;
  height: 660px;
`

const MainPhotoBorderStl = styled.div`
  width: 442px;
  height: 594px;
  border: #FFFFFF 5px solid;
`

export const MainPhoto = () => (
  <MainPhotoStl>
    <MainPhotoImgStl src={AboutMainPhoto} alt={"AboutMainPhoto"} />
    <MainPhotoBorderStl />
  </MainPhotoStl>
)