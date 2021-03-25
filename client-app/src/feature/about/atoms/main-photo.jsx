import React from "react";
import styled from "styled-components";
import AboutMainPhoto from "../../../attachments/photos/AbotMainPhoto.jpg";

const MainPhotoStl = styled.div`
  position: relative;
  user-select: none;
`

const MainPhotoImgStl = styled.img`
  width: 32.375rem;
  height: 41.25rem;
`

const MainPhotoBorderStl = styled.div`
  width: 27.625rem;
  height: 37.125rem;
  border: #FFFFFF 0.3125rem solid;

  position: absolute;
  top: 2.0625rem;
  left: 2.375rem;
`

export const MainPhoto = () => (
  <MainPhotoStl>
    <MainPhotoImgStl src={AboutMainPhoto} />
    <MainPhotoBorderStl />
  </MainPhotoStl>
)