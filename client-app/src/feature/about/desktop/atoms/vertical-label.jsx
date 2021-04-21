import React from "react";
import styled from "styled-components";
import {media} from "../../../../shared/media-queries";

export const VerticalLabelStl = styled.div`
  font-family: 'Solena', serif;
  font-weight: 400;
  font-size: 9.2592vh;
  line-height: 11.1111vh;
  text-align: right;
  color: #14402D;
  opacity: 60%;
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  user-select: none;
  
  ${media.desktop} {
    font-size: 6.25vw;
    line-height: 7.5vw;
  }
`

export const VerticalLabel = ({text}) => {
  return (
    <VerticalLabelStl>{text}</VerticalLabelStl>
  )
}