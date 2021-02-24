import React from "react";
import styled from "styled-components";

const BtnSignUpStl = styled.div`
  font-family: 'PentaLight', serif;
  font-size: 30px;
  color: #FFFFFF;
  :hover{
    cursor: pointer;
    color: #ccc;
    transition: .2s;
  }
`

export const BtnSignUp = () => (
  <BtnSignUpStl>Записаться на фотосессию</BtnSignUpStl>
)