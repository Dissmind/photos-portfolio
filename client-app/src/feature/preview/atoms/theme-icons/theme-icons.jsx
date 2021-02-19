import React from "react";
import styled from "styled-components";

const ThemeIconsStl = styled.img`
  width: 35px;
  height: 35px;
`

export const ThemeIcons = ({path}) => (
  <ThemeIconsStl src={path} alt={"ThemeIcon"} />
)