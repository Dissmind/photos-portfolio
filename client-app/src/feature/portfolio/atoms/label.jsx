import React from 'react'
import styled from 'styled-components'

const LabelStl = styled.div`
  font-family: 'Solena', serif;
  font-weight: 400;
  font-size: 6.25rem;
  line-height: 7.5rem;
  opacity: 60%;
  color: #14402D;
`


export const Label = ({}) => {
  return (
    <LabelStl>Темы портфолио</LabelStl>
  )
}