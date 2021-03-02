import React from 'react'
import styled from 'styled-components'

const ThemeLinkItemStl = styled.div`
  width: 301px;
  height: 106px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 45px;
  line-height: 45px;
  color: #FFFFFF;
  background-color: #133F2C;
  border-radius: 10px;
  
  :hover{
    color: #ccc;
    cursor: pointer;
    transition: .2s;
  }
`


export const ThemeLinkItem = ({text}) => {
  return (
    <ThemeLinkItemStl>{text}</ThemeLinkItemStl>
  )
}