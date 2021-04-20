import React from "react";
import styled from "styled-components";

const BtnLanguageStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 6.2037vh;
  height: 3.241vh;
  background-color: #FFFFFF;
  border-radius: 1.6666vh;
  padding-bottom: 0.4629vh;
  color: #164C34;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 2.7777vh;
  user-select: none;
  
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