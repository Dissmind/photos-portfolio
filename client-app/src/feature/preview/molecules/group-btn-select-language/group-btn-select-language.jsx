import React from "react";
import styled from "styled-components";
import {BtnSelectLanguage} from "../../atoms/btn-select-language/btn-select-language";

const GroupBtnSelectLanguageStl = styled.div`
  display: flex;
  div:not(:first-child) {
    margin-left: 20px;
  } 
`

export const GroupBtnSelectLanguage = () => (
  <GroupBtnSelectLanguageStl>
    <BtnSelectLanguage text={"eng"} />
    <BtnSelectLanguage text={"pol"} />
    <BtnSelectLanguage text={"рус"} />
  </GroupBtnSelectLanguageStl>
)