import React from "react";
import styled from "styled-components";

const ThemeIconsStl = styled.img`
  width: 2.1875rem;
  height: 2.1875rem;
  user-select: none;

   //Mobile styles
  @media screen and (min-width: 320px) and (max-width: 576px){
     width: 0.9375rem;
     height: 0.9375rem;
   }
`

export const ThemeIcons = ({path}) => (
  <ThemeIconsStl src={path} alt={"ThemeIcon"} />
)