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