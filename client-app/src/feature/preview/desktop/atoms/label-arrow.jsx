import React from "react";
import styled from "styled-components";
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";

import Arrow from "../../../../attachments/icon/arrow.svg"

const LabelArrowStl = styled(Container)`
  height: 100%;
`

export const ContainerStl = styled(Container)``

const ArrowStl = styled.img`
  height: 5.7407vh;
  user-select: none;
  
  ${media.desktop} {
    height: 3.875vw;
  }
`

const LabelStl = styled.div`
  font-family: 'Lemon Tuesday', serif;
  font-weight: 400;
  font-size: 2.7777vh;
  color: #164C34;
  padding-top: 3.7037vh;
  padding-left: 0.4629vh;
  
  ${media.desktop} {
    font-size: 1.875vw;
    padding-top: 2.5vw;
    padding-left: 0.3125vw;
  }
`

export const LabelArrow = ({text}) => {
  return(
    <LabelArrowStl limiter>
      <ContainerStl flex row>
        <ArrowStl src={Arrow} alt={"Arrow"} />
        <LabelStl>{text}</LabelStl>
      </ContainerStl>
    </LabelArrowStl>
  )
}