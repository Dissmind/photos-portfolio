import React from 'react'
import styled from 'styled-components'

const TitleStl = styled.div`
  font-family: 'Solena', serif;
  font-weight: 400;
  font-size: 7.125rem;
  line-height: 8.5625rem;
  opacity: 0.6;
  color: #14402D;
`


export const Title = ({title}) => {
  return (
    <TitleStl>
      {title}
    </TitleStl>
  )
}