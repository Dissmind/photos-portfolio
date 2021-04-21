import React from 'react'
import styled from 'styled-components'
import {VerticalLabel, VerticalLabelStl} from "../atoms/vertical-label";
import {MainPhoto, MainPhotoStl} from "../atoms/main-photo";
import {MainLabel} from "../atoms/main-label";
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";

const MainContentStl = styled(Container)`
  height: 100%;
  
  ${VerticalLabelStl} {
    align-self: flex-start;
  }
  
  ${MainPhotoStl} {
    margin-left: 1.3888vh;
    margin-right: 6.4814vh;
    
    ${media.desktop} {
      margin-left: 0.9375vw;
      margin-right: 4.375vw;
    }
  }
`


export const MainContent = ({}) => {
  return (
    <MainContentStl flex row center>
      <VerticalLabel text={"Обо мне"} />
      <MainPhoto />
      <MainLabel />
    </MainContentStl>
  )
}