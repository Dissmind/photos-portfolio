import React from 'react'
import styled from 'styled-components'
import {Form} from "../molecules/form";

import BgImg1 from "../../../attachments/photos/RecordsBg1.svg"
import BgImg2 from "../../../attachments/photos/RecordsBg2.svg"

const MainContentStl = styled.div`
  width: 66.5rem;
  height: 37.0625rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > img:nth-child(1){
    width: 13.5625rem;
    height: 13.4375rem;
    top: 0;
    right: 0;
  }
  & > img:nth-child(2){
    width: 16.875rem;
    height: 20rem;
    bottom: 0;
    left: 0;
  }
`

const BgImgStl = styled.img`
  position: absolute;
  user-select: none;
`


export const MainContent = ({}) => {
  return (
    <MainContentStl>
      <BgImgStl src={BgImg1} />
      <BgImgStl src={BgImg2} />
      <Form />
    </MainContentStl>
  )
}