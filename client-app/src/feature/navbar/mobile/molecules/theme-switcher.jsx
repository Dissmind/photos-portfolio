import React, {useState} from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {ThemeIcons, ThemeIconsStl} from "../atoms/theme-icons";
import {ToggleSwitch} from "../atoms/toggle-switch";

import BlackThemeMoonIco from "../../../../attachments/icon/BlackThemeMoonIco.svg";
import WhiteThemeSunIco from "../../../../attachments/icon/WhiteThemeSunIco.svg";


const ThemeSwitcherStl = styled(Container)`
  ${ThemeIconsStl} {
    margin-right: 9px;
  }
`


export const ThemeSwitcher = ({}) => {

  const [isMoon, setIsMoon] = useState(true)

  return (
    <ThemeSwitcherStl flex row center>
      <ThemeIcons path={(isMoon) ? BlackThemeMoonIco : WhiteThemeSunIco} />
      <ToggleSwitch onToggle={() => setIsMoon(!isMoon)} />
    </ThemeSwitcherStl>
  )
}