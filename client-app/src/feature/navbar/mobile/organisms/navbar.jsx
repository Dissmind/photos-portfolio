import React, {useState} from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {BtnSelectLanguage} from "../atoms/btn-select-language";
import {LinkItem} from "../atoms/link-item";
import {ThemeSwitcher} from "../molecules/theme-switcher";
import {LanguageModal} from "./language-modal";

const NavbarStl = styled(Container)`
  width: 100%;
  height: 100%;
  background-color: #133F2C;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`


export const Navbar = ({}) => {

  const [popupToggle, setPopupToggle] = useState(false)

  return (
    <NavbarStl flex row>
      <BtnSelectLanguage
        onClick={() => {popupToggle ? setPopupToggle(false) : setPopupToggle(true)}}
      />

      {
        popupToggle
          ? <LanguageModal close={() => setPopupToggle(false)} />
          : null
      }

      <LinkItem text={'Записаться за фотосессию'} to={'/records'} />
      <ThemeSwitcher />
    </NavbarStl>
  )
}