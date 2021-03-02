import React from "react";
import styled from "styled-components";
import AboutMainPhoto from "../../../../attachments/photos/AbotMainPhoto.jpg"

const MainPhotoImgStl = styled.img`
  width: 518px;
  height: 660px;
`

export const MainPhotoImg = () => {
  return (
    <MainPhotoImgStl src={AboutMainPhoto} alt={"AboutMainPhoto"} />
  )
}