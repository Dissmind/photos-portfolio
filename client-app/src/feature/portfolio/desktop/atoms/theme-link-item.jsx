import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";

const ThemeLinkItemStl = styled(Container)`
  width: 27.7777vh;
  height: 9.8148vh;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 4.1666vh;
  line-height: 4.1666vh;
  color: #FFFFFF;
  background-color: #133F2C;
  border-radius: 0.9259vh;
  
  :hover{
    color: #ccc;
    cursor: pointer;
    transition: .2s;
  }
  
  ${media.desktop} {
    width: 18.75vw;
    height: 6.625vw;
    font-size: 2.8125vw;
    line-height: 2.8125vw;
    border-radius: 0.625vw;
  }
`


export const ThemeLinkItem = ({text}) => {
  return (
    <ThemeLinkItemStl flex center>
      {text}
    </ThemeLinkItemStl>
  )
}