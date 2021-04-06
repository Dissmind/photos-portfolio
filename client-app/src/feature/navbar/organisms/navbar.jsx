import React, {useState} from 'react'
import styled from 'styled-components'
import {BtnLanguageList} from "../molecules/btn-language-list";
import {LinkList} from "../molecules/link-list";
import {LinkItem} from "../atoms/link-item";
import {ThemeSwitcher} from "../molecules/theme-switcher";
import {NavLink} from "react-router-dom";
import {BtnSelectLanguage} from "../atoms/btn-select-language.mobile";
import {LanguageModal} from "./language-modal.mobile";


const NavbarStl = styled.div`
  position: relative;
  height: 4.375rem;

  //Mobile styles
  @media screen and (max-width: 576px){
    height: 2.5rem;
  }
  //TODO: будет ли двигаться навбар?
`

const ContainerStl = styled.div`
  position: fixed;
  width: 100%;
  
  height: 4.375rem;
  background-color: #133F2C;

  display: flex;
  align-items: center;
  justify-content: center;

  //Mobile styles
  @media screen and (max-width: 576px){
    height: 2.5rem;
  }
`

const WrapperStl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2.5rem;
  max-width: 1600px;
  width: 100%;

  //BtnLanguageList || LinkList
  & > div:nth-child(1) {
    flex-grow: 1;
  }

  //LinkStl
  & > a:nth-child(3) {
    margin-right: 4.375rem;
  }

  //Mobile styles
  @media screen and (max-width: 576px){
    padding: 0 1.625rem;

    //LinkStl
    & > a:nth-child(3) {
      margin-right: 0;
    }
  }
`

const LinkStl = styled(NavLink)`
  &:link{
    text-decoration: none;
  }
`

export const Navbar = ({type}) => {

  const [popupToggle, setPopupToggle] = useState(false)




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
      <ContainerStl>
        <WrapperStl>
          {list}

          <BtnSelectLanguage onClick={() => {setPopupToggle(true)}} />
          {
            popupToggle ? <LanguageModal /> : null
          }

          <LinkStl to={"/records"}>
            <LinkItem text={"Записаться на фотосессию"} />
          </LinkStl>

          <ThemeSwitcher />
        </WrapperStl>
      </ContainerStl>
    </NavbarStl>
  )
}