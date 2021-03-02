import React from "react";
import styled from "styled-components";

const BtnLanguageStl = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 4.1875rem;
  height: 2.1875rem;
  background-color: #FFFFFF;
  border-radius: 1.125rem;
  padding-bottom: 0.3125rem;
  color: #164C34;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 1.875rem;
  
  :hover{
    cursor: pointer;
    opacity: 0.9;
    transition: .2s;
  }
`

export const BtnLanguage = ({text}) => {
  return (
    <BtnLanguageStl>{text}</BtnLanguageStl>
  )
}