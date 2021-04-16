import React from "react";
import styled from "styled-components";

import Arrow from "../../../../attachments/icon/arrow.svg"

const LabelArrowStl = styled.div`
  display: flex;
`

const ArrowStl = styled.img`
  height: 3.875rem;
  user-select: none;

  //Mobile styles
  @media screen and (max-width: 576px){
    height: 1.5rem;
  }
`

const LabelStl = styled.div`
  font-family: 'Lemon Tuesday', serif;
  font-weight: 400;
  font-size: 1.875rem;
  color: #164C34;
  padding-top: 2.5rem;
  padding-left: 0.3125rem;

  //Mobile styles
  @media screen and (max-width: 576px){
    font-size: 0.9375rem;
    padding-top: 0.875rem;
    padding-left: 0.25rem;
  }
`

export const LabelArrow = ({text}) => {
  return(
    <LabelArrowStl>
      <ArrowStl src={Arrow} alt={"Arrow"} />
      <LabelStl>{text}</LabelStl>
    </LabelArrowStl>
  )
}