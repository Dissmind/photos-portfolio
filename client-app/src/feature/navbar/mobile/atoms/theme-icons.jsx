import React from 'react'
import styled from 'styled-components'

export const ThemeIconsStl = styled.img`
  width: 17px;
  height: 17px;
  object-fit: cover;
  user-select: none;
`


export const ThemeIcons = ({path}) => {
  return (
    <ThemeIconsStl src={path} />
  )
}