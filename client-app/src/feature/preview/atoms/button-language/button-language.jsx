import React from "react";
import styled from "styled-components";

const ButtonLanguageStl = styled.div`
  width: 67px;
  height: 35px;
  border-radius: 18px;
  background-color: #FFFFFF;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  color: #164C34;
  font-size: 30px;
  padding-bottom: 5px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonLanguage = ({text}) => (
  <ButtonLanguageStl>{text}</ButtonLanguageStl>
)