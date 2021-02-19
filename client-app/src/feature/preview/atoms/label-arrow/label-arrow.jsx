import React from "react";
import styled from "styled-components";

import Arrow from "../../../../attachments/icon/arrow.svg"

const LabelStl = styled.div`
  display: flex;
  font-family: 'Lemon Tuesday', serif;
  font-weight: 400;
  font-size: 30px;
  color: #164C34;
  
  div:nth-child(2){
    padding-top: 50px;
    padding-left: 10px;
  }
`

const ArrowStl = styled.img``

export const LabelArrow = ({text}) => {
  return(
    <LabelStl>
      <ArrowStl src={Arrow} alt={"Arrow"} />
      <div>{text}</div>
    </LabelStl>
  )
}