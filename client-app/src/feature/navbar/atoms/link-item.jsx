import React from 'react'
import styled from 'styled-components'

const LinkItemStl = styled.div`
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 30px;
  color: #FFFFFF;

  :hover{
    cursor: pointer;
    color: #ccc;
    transition: .2s;
  }
`


export const LinkItem = ({text}) => {
  return (
    <LinkItemStl>
      {text}
    </LinkItemStl>
  )
}