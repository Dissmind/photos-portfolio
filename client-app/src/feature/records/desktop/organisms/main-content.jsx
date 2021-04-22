import React from 'react'
import styled from 'styled-components'
import {Form} from "../molecules/form";
import {media} from "../../../../shared/media-queries";
import {Container} from "../../../../shared/layout";


import BgImg1 from "../../../../attachments/photos/RecordsBg1.svg"
import BgImg2 from "../../../../attachments/photos/RecordsBg2.svg"
import {RecordsVerticalLabel} from "../atoms/records-vertical-label";
import {VerticalLabelStl} from "../../../about/desktop/atoms/vertical-label";

const MainContentStl = styled(Container)`
  position: relative;
  height: 100%;

  ${VerticalLabelStl} {
    height: 100%;
    position: absolute;
    left: 3.7037vh;
    
    ${media.desktop} {
      left: 2.5vw;
    }
  }
`

const FormContainerStl = styled(Container)`
  position: relative;
  width: 98.5185vh;
  height: 54.9074vh;
  
  ${media.desktop} {
    width: 66.5vw;
    height: 37.0625vw;
  }
  
  
  img:nth-child(1){
    width: 20.0925vh;
    height: 19.9074vh;
    top: 0;
    right: 0;
    
    ${media.desktop} {
      width: 13.5625vw;
      height: 13.4375vw;
    }
  }
  
  img:nth-child(2){
    width: 25vh;
    height: 29.6296vh;
    bottom: 0;
    left: 0;
    
    ${media.desktop} {
      width: 16.875vw;
      height: 20vw;
    }
  }
`

const BgImgStl = styled.img`
  position: absolute;
  user-select: none;
`


export const MainContent = ({}) => {
  return (
    <MainContentStl limiter flex row center>
      <RecordsVerticalLabel text={"Запись на фотосессию"} />

      <FormContainerStl flex center>
        <BgImgStl src={BgImg1} />
        <BgImgStl src={BgImg2} />
        <Form />
      </FormContainerStl>
    </MainContentStl>
)
}
