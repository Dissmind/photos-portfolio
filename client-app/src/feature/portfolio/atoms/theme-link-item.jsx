import React from 'react'
import styled from 'styled-components'

const ThemeLinkItemStl = styled.div`
  width: 18.8125rem;
  height: 6.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 2.8125rem;
  line-height: 2.8125rem;
  color: #FFFFFF;
  background-color: #133F2C;
  border-radius: 0.625rem;
  
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