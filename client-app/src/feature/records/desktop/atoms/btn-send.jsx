import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";

export const BtnSendStl = styled(Container)`
  width: 27.037vh;
  height: 4.7222vh;
  border-radius: 2.1296vh;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  line-height: 3.3333vh;
  font-size: 4.1666vh;
  color: #14402D;
  background-color: #FFFFFF;
  user-select: none;

  :hover {
    cursor: pointer;
    background-color: #ccc;
    transition: .2s;
    opacity: 0.9;
  }
  
  ${media.desktop} {
    width: 18.25vw;
    height: 3.1875vw;
    border-radius: 1.4375vw;
    line-height: 2.25vw;
    font-size: 2.8125vw;
  }
`


export const BtnSend = () => {
  return (
    <BtnSendStl flex row center>
      Отправить
    </BtnSendStl>
  )
}