import React from "react";
import styled from "styled-components";

import Arrow from "../../../attachments/icon/arrow.svg"

const LabelArrowStl = styled.div`
  display: flex;
`

const ArrowStl = styled.img`
  height: 3.875rem;
`

const LabelStl = styled.div`
  font-family: 'Lemon Tuesday', serif;
  font-weight: 400;
  font-size: 1.875rem;
  color: #164C34;
  padding-top: 2.5rem;
  padding-left: 0.3125rem;
`

export const LabelArrow = ({text}) => {
  return(
    <LabelArrowStl>
      <ArrowStl src={Arrow} alt={"Arrow"} />
      <LabelStl>{text}</LabelStl>
    </LabelArrowStl>
  )
}