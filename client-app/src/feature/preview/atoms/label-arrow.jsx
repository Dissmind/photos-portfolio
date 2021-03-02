import React from "react";
import styled from "styled-components";

import Arrow from "../../../attachments/icon/arrow.svg"

const LabelArrowStl = styled.div`
  display: flex;
`

const ArrowStl = styled.img`
  height: 62px;
`

const LabelStl = styled.div`
  font-family: 'Lemon Tuesday', serif;
  font-weight: 400;
  font-size: 30px;
  color: #164C34;
  padding-top: 40px;
  padding-left: 5px;
`

export const LabelArrow = () => {
  return(
    <LabelArrowStl>
      <ArrowStl src={Arrow} alt={"Arrow"} />
      <LabelStl>Выберите свой язык!</LabelStl>
    </LabelArrowStl>
  )
}