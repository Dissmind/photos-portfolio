import React from "react";
import styled from "styled-components";

const BtnLanguageStl = styled.div`
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
  user-select: none;
  
  :hover{
    cursor: pointer;
    opacity: 0.9;
    transition: .2s;
  }

  //Mobile styles
  //@media screen and (max-width: 576px){
  //  width: 10.6875rem;
  //  height: 1.75rem;
  //  border: #133F2C 0.0625rem solid;
  //  border-radius: 0.9375rem;
  //  font-size: 0.9375rem;
  //  padding: 0;
  //  
  //}
`

export const BtnLanguage = ({text}) => {
  return (
    <BtnLanguageStl>{text}</BtnLanguageStl>
  )
}