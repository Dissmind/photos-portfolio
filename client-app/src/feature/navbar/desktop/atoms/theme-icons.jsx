import React from "react";
import styled from "styled-components";

const ThemeIconsStl = styled.img`
  width: 3.2407vh;
  height: 3.2407vh;
  user-select: none;

   //Mobile styles
  //@media screen and (max-width: 576px){
  //   width: 1.125rem;
  //   height: 1.125rem;
  // }
`

export const ThemeIcons = ({path}) => (
  <ThemeIconsStl src={path} alt={"ThemeIcon"} />
)