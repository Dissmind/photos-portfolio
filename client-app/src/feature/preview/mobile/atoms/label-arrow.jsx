import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";

import Arrow from "../../../../attachments/icon/arrow.svg"


export const LabelArrowStl = styled(Container)`
  height: 100%;
`

const ArrowStl = styled.img`
  display: block;
  height: 24px;
  user-select: none;
`

const LabelStl = styled.div`
  font-family: 'Lemon Tuesday', serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  color: #164C34;
  margin-top: 12px;
  margin-left: 4px;
`


export const LabelArrow = ({text}) => {

  return (
    <LabelArrowStl flex>
      <ArrowStl src={Arrow} />
      <LabelStl>Выберите свой язык!{text}</LabelStl>
    </LabelArrowStl>
  )
}