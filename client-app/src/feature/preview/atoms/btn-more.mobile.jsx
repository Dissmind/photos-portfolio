import React from 'react'
import styled from 'styled-components'

const BtnMoreStl = styled.div`
  display: none;
  
  //Mobile styles
  @media screen and (max-width: 576px){
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.625rem;

    width: 7.125rem;
    height: 1.75rem;
    border: #FFFFFF 0.0625rem solid;
    border-radius: 0.9375rem;
    font-family: 'PentaLight', serif;
    font-size: 0.9375rem;
    line-height: 0.9375rem;
    color: #FFFFFF;
    user-select: none;

    :hover{
      cursor: pointer;
      color: #ccc;
      transition: .2s;
    }
  }
`


export const BtnMore = () => (
  <BtnMoreStl>Подробнее</BtnMoreStl>
)
