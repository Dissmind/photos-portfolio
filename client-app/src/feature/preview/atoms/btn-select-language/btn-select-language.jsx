import React from "react";
import styled from "styled-components";

const BtnSelectLanguageStl = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 67px;
  height: 35px;
  background-color: #FFFFFF;
  border-radius: 18px;
  padding-bottom: 5px;
  color: #164C34;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 30px;
  
  :hover{
    cursor: pointer;
    opacity: 0.9;
    transition: .2s;
  }
`

export const BtnSelectLanguage = ({text}) => {
  return (
    <BtnSelectLanguageStl>{text}</BtnSelectLanguageStl>
  )
}