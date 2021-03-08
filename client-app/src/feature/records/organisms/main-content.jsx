import React from 'react'
import styled from 'styled-components'
import {Form} from "../molecules/form";

import BgImg1 from "../../../attachments/photos/RecordsBg1.svg"
import BgImg2 from "../../../attachments/photos/RecordsBg2.svg"

const MainContentStl = styled.div`
  width: 1064px;
  height: 593px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > img:nth-child(1){
    width: 217px;
    height: 215px;
    top: 0;
    right: 0;
  }
  & > img:nth-child(2){
    width: 270px;
    height: 320px;
    bottom: 0;
    left: 0;
  }
`

const BgImg = styled.img`
  position: absolute;
`


export const MainContent = ({}) => {
  return (
    <MainContentStl>
      <BgImg src={BgImg1} alt={"BgImg1"} />
      <BgImg src={BgImg2} alt={"BgImg1"} />
      <Form />
    </MainContentStl>
  )
}