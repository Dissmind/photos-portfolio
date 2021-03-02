import React from 'react'
import styled from 'styled-components'
import {BtnLanguageList} from "../molecules/btn-language-list";
import {LinkList} from "../molecules/link-list";
import {LinkItem} from "../atoms/link-item";
import {ThemeSwitcher} from "../molecules/theme-switcher";

const NavbarStl = styled.div`
  padding: 0 40px;
  height: 70px;
  background-color: #133F2C;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:nth-child(1) {
    flex-grow: 1;
  }
  & > div:nth-child(2) {
    margin-right: 70px;
  }
`


export const Navbar = ({type}) => {

  let list = null

  switch (type) {
    case 'lang':
      list = <BtnLanguageList />
      break

    case 'menu':
      list = <LinkList />
      break
  }

  return (
    <NavbarStl>
      {list}
      <LinkItem text={"Записаться на фотосессию"} />
      <ThemeSwitcher />
    </NavbarStl>
  )
}