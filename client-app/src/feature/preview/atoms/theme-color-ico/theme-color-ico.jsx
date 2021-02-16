import React from "react";
import styled from "styled-components";
import DarkThemeIco from "../../../../attachments/icons/DarkThemeIco.svg"
// import WhiteThemeIco from "../../../../attachments/icons/BlackThemeIco.svg"


const ThemeColorIcoStl = styled.div``

export const ThemeColorIco = () => (
  <ThemeColorIcoStl>
    <img src={DarkThemeIco} alt={"White Theme"}/>
  </ThemeColorIcoStl>
)