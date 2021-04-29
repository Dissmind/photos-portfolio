import React from 'react'
import styled from 'styled-components'

const DescriptionStl = styled.div`
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #FFFFFF;
`


export const Description = ({text}) => {
  return (
    <DescriptionStl>
      {text}
    </DescriptionStl>
  )
}