import React from 'react'
import styled from 'styled-components'
import {media} from "../../../shared/media-queries";

const DescriptionStl = styled.div`
  font-family: 'PentaLight', serif;
  font-size: 2.77vh;
  color: #FFFFFF;
  
  ${media.desktop} {
    font-size: 1.875vw;
  }
`


export const Description = ({text}) => (
  <DescriptionStl>
    {text}
  </DescriptionStl>
)