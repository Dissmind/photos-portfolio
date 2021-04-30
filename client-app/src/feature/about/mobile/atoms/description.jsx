import React from 'react'
import styled from 'styled-components'

const DescriptionStl = styled.div`
  width: 100%;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  color: #14402D;
`


export const Description = ({text}) => {
  return (
    <DescriptionStl>
      {text}
    </DescriptionStl>
  )
}