import React from 'react'
import styled from 'styled-components'

const LinkItemStl = styled.div`
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 1.875rem;
  color: #FFFFFF;
  user-select: none;

  :hover{
    cursor: pointer;
    color: #ccc;
    transition: .2s;
  }
  
  //Mobile styles
  @media screen and (max-width: 576px){
    font-size: 0.9375rem;
  }
`


export const LinkItem = ({text}) => {
  return (
    <LinkItemStl>
      {text}
    </LinkItemStl>
  )
}