import React, {useState} from 'react'
import styled from 'styled-components'
import {ThemeIcons, ThemeIconsStl} from "../atoms/theme-icons";
import {ToggleSwitch} from "../atoms/toggle-switch";

import BlackThemeMoonIco from "../../../../attachments/icon/BlackThemeMoonIco.svg";
import WhiteThemeSunIco from "../../../../attachments/icon/WhiteThemeSunIco.svg";

const ThemeSwitcherStl = styled.div`
  display: flex;
  
  
  //justify-content: space-between;
  //width: 8.23%;
  //flex-grow: 1;
  //column-gap: 50%; 
  //justify-content: flex-end;
  
  //TODO: this
  ${ThemeIconsStl} {
    //margin-right: 1.25rem;
    //margin-right: 200px;
    //margin-right: 10%;
  }
`


export const ThemeSwitcher = () => {

  const [isMoon, setIsMoon] = useState(true)

  return (
    <ThemeSwitcherStl>
      <ThemeIcons path={(isMoon) ? BlackThemeMoonIco : WhiteThemeSunIco} />
      <ToggleSwitch onToggle={() => setIsMoon(!isMoon)} />
    </ThemeSwitcherStl>
  )
}