import React, {useState} from 'react'
import styled from 'styled-components'
import {ThemeIcons} from "../atoms/theme-icons";
import {ToggleSwitch} from "../atoms/toggle-switch";
import {Container, Wrapper} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";

import BlackThemeMoonIco from "../../../../attachments/icon/BlackThemeMoonIco.svg";
import WhiteThemeSunIco from "../../../../attachments/icon/WhiteThemeSunIco.svg";


const ThemeSwitcherStl = styled(Container)``

const WrapperStl = styled(Wrapper)`
  display: flex;
  margin-right: ${props => props.margin ? '1.8518vh' : '0'};
  
  ${media.desktop} {
    margin-right: ${props => props.margin ? '1.25vw' : '0'};
  }
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