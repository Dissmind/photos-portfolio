import React, {useState} from 'react'
import styled from 'styled-components'
import {ThemeIcons, ThemeIconsStl} from "../atoms/theme-icons";
import {ToggleSwitch} from "../atoms/toggle-switch";

import BlackThemeMoonIco from "../../../../attachments/icon/BlackThemeMoonIco.svg";
import WhiteThemeSunIco from "../../../../attachments/icon/WhiteThemeSunIco.svg";

const ThemeSwitcherStl = styled.div`
  display: flex;
  //TODO: this
  ${ThemeIconsStl} {
    //margin-right: 1.25rem;
    margin-right: 19.06%;
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