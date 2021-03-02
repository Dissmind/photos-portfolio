import React from "react";
import styled from "styled-components";
import {MainPhotoImg} from "../../atoms/main-photo-img/main-photo-img";
import {MainPhotoBorder} from "../../atoms/main-photo-border/main-photo-border";

const MainPhotoStl = styled.div`
  position: relative;
  & > div:nth-child(2){
    position: absolute;
    top: 33px;
    left: 38px;
  }
`

export const MainPhoto = () => (
  <MainPhotoStl>
    <MainPhotoImg />
    <MainPhotoBorder />
  </MainPhotoStl>
)