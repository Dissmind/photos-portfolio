import React from 'react'
import styled from 'styled-components'

const DescriptionStl = styled.div`
  font-family: 'PentaLight', serif;
  font-size: 1.875rem;
  color: #FFFFFF;
`


export const Description = ({text}) => (
  <DescriptionStl>
    {text}
  </DescriptionStl>
)