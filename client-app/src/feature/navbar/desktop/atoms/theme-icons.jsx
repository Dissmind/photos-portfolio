import React from "react";
import styled from "styled-components";
import {media} from "../../../../shared/media-queries";

const ThemeIconsStl = styled.img`
  width: 3.2407vh;
  height: 3.2407vh;
  user-select: none;
  
  ${media.desktop} {
    width: 2.1875vw;
    height: 2.1875vw;
  }
`

export const ThemeIcons = ({path}) => (
  <ThemeIconsStl src={path} alt={"ThemeIcon"} />
)