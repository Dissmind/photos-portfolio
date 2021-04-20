import React from "react";
import styled from "styled-components";

const ThemeIconsStl = styled.img`
  width: 3.2407vh;
  height: 3.2407vh;
  user-select: none;
`

export const ThemeIcons = ({path}) => (
  <ThemeIconsStl src={path} alt={"ThemeIcon"} />
)