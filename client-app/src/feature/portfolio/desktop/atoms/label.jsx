import React from 'react'
import styled from 'styled-components'
import {media} from "../../../../shared/media-queries";
import {Container} from "../../../../shared/layout";

const LabelStl = styled(Container)`
  height: 100%;
  font-family: 'Solena', serif;
  font-weight: 400;
  font-size: 9.2592vh;
  opacity: 60%;
  color: #14402D;
  
  ${media.desktop} {
    font-size: 6.25vw;
  }
`


export const Label = ({}) => {
  return (
    <LabelStl flex center>Темы портфолио</LabelStl>
  )
}