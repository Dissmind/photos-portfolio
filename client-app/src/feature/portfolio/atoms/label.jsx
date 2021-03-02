import React from 'react'
import styled from 'styled-components'

const LabelStl = styled.div`
  font-family: 'Solena', serif;
  font-weight: 400;
  font-size: 100px;
  line-height: 120px;
  opacity: 40%;
  color: #14402D;
`


export const Label = ({}) => {
  return (
    <LabelStl>Темы портфолио</LabelStl>
  )
}