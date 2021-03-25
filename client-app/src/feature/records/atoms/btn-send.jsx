import React from 'react'
import styled from 'styled-components'

const BtnSendStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 15.5rem;
  height: 3rem;
  border-radius: 1.4375rem;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  line-height: 2.25rem;
  font-size: 2.8125rem;
  color: #14402D;
  background-color: #FFFFFF;
  user-select: none;

  :hover {
    cursor: pointer;
    background-color: #ccc;
    transition: .2s;
    opacity: 0.9;
  }
`


export const BtnSend = () => {
  return (
    <BtnSendStl>
      Отправить
    </BtnSendStl>
  )
}