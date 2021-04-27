import React, {useState} from 'react'
import styled from 'styled-components'
import {BtnLanguageList} from "../molecules/btn-language-list";
import {LinkList} from "../molecules/link-list";
import {LinkItem} from "../atoms/link-item";
import {ThemeSwitcher} from "../molecules/theme-switcher";
import {NavLink} from "react-router-dom";
import {BtnSelectLanguage} from "../../mobile/btn-select-language.mobile";
import {LanguageModal} from "../../mobile/language-modal.mobile";
import {Container, Wrapper} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";


const NavbarStl = styled(Container)`
  width: 100%;
  height: 100%;
  background-color: #133F2C;
`

const ContainerStl = styled(Container)`
  align-items: center;
  padding: 0 2.5%;
`

const WrapperStl = styled(Wrapper)`
  margin-right: 5.5555vh;
  
  ${media.desktop} {
    margin-right: 3.75vw;
  }
`

const LinkStl = styled(NavLink)`
  &:link{
    text-decoration: none;
  }
`


export const Navbar = ({type}) => {

  // const [popupToggle, setPopupToggle] = useState(false)


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
    <NavbarStl flex row center>
      <Container limiter>
        <ContainerStl flex row>
          {list}

          {/*<BtnSelectLanguage*/}
          {/*  onClick={() => {popupToggle ? setPopupToggle(false) : setPopupToggle(true)}}*/}
          {/*/>*/}
          {/*{*/}
          {/*  popupToggle ? <LanguageModal close={() => {setPopupToggle(false)}} /> : null*/}
          {/*}*/}

          <WrapperStl>
            <LinkStl to={"/records"}>
              <LinkItem text={"Записаться на фотосессию"} />
            </LinkStl>
          </WrapperStl>

          <ThemeSwitcher />
        </ContainerStl>
      </Container>
    </NavbarStl>
  )
}