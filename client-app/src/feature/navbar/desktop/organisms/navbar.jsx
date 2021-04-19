import React, {useState} from 'react'
import styled from 'styled-components'
import {BtnLanguageList, BtnLanguageListStl} from "../molecules/btn-language-list";
import {LinkList} from "../molecules/link-list";
import {LinkItem} from "../atoms/link-item";
import {ThemeSwitcher} from "../molecules/theme-switcher";
import {NavLink} from "react-router-dom";
import {BtnSelectLanguage} from "../atoms/btn-select-language.mobile";
import {LanguageModal} from "./language-modal.mobile";
import {Container, Wrapper} from "../../../../shared/layout";
import {ThemeIconsStl} from "../atoms/theme-icons";


const NavbarStl = styled.div`
  position: relative;
  height: 100%;
`

const ContainerStl = styled(Container)`
  position: fixed;
  width: 100%;
  height: 6.481vh;
  background-color: #133F2C;
`

const LinkStl = styled(NavLink)`
  &:link{
    text-decoration: none;
  }
`

const WrapperStl = styled(Wrapper)`
  display: flex;
  align-items: center;
  //justify-content: space-between;
  padding: 0 2.5%;
  
  ${BtnLanguageListStl} {
    div:not(:last-child){
      //margin-right: 10%;
    }
  }
  
  ${LinkStl} {
    //margin-right: 3.95%;
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
      <ContainerStl flexRowCenter>
        <Wrapper w1600>
          <WrapperStl>
            {list}

            <BtnSelectLanguage
              onClick={() => {popupToggle ? setPopupToggle(false) : setPopupToggle(true)}}
            />
            {
              popupToggle ? <LanguageModal close={() => {setPopupToggle(false)}} /> : null
            }

            <LinkStl to={"/records"}>
              <LinkItem text={"Записаться на фотосессию"} />
            </LinkStl>

            <ThemeSwitcher />
          </WrapperStl>
        </Wrapper>
      </ContainerStl>
    </NavbarStl>
  )
}