import React from "react";
import styled from "styled-components";

const ThemeIconsStl = styled.img`
  width: 2.1875rem;
  height: 2.1875rem;
`

export const ThemeIcons = ({path}) => (
  <ThemeIconsStl src={path} alt={"ThemeIcon"} />
)