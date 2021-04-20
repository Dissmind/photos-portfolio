import React, {useState} from 'react'
import styled from 'styled-components'
import {ThemeIcons} from "../atoms/theme-icons";
import {ToggleSwitch} from "../atoms/toggle-switch";

import BlackThemeMoonIco from "../../../../attachments/icon/BlackThemeMoonIco.svg";
import WhiteThemeSunIco from "../../../../attachments/icon/WhiteThemeSunIco.svg";
import {Container, Wrapper} from "../../../../shared/layout";

const ThemeSwitcherStl = styled(Container)``

const WrapperStl = styled(Wrapper)`
  display: flex;
  margin-right: ${props => props.margin ? '1.8518vmin' : '0'}
`


export const ThemeSwitcher = () => {

  const [isMoon, setIsMoon] = useState(true)

  return (
    <ThemeSwitcherStl flex row>
      <WrapperStl margin>
        <ThemeIcons path={(isMoon) ? BlackThemeMoonIco : WhiteThemeSunIco} />
      </WrapperStl>
      <WrapperStl>
        <ToggleSwitch onToggle={() => setIsMoon(!isMoon)} />
      </WrapperStl>
    </ThemeSwitcherStl>
  )
}