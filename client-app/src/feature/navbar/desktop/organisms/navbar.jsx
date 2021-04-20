import React, {useState} from 'react'
import styled from 'styled-components'
import {BtnLanguageList} from "../molecules/btn-language-list";
import {LinkList} from "../molecules/link-list";
import {LinkItem} from "../atoms/link-item";
import {ThemeSwitcher} from "../molecules/theme-switcher";
import {NavLink} from "react-router-dom";
import {BtnSelectLanguage} from "../atoms/btn-select-language.mobile";
import {LanguageModal} from "./language-modal.mobile";
import {Container, Wrapper} from "../../../../shared/layout";


const NavbarStl = styled.div`
  position: relative;
  height: 100%;
`

const FixedContainerStl = styled(Container)`
  position: fixed;
  width: 100%;
  height: 6.481vh;
  background-color: #133F2C;
`

const ContainerStl = styled(Container)`
  align-items: center;
  padding: 0 2.5%;
`

const WrapperStl = styled(Wrapper)`
  margin-right: 5.5555vmin;
  margin-left: 2vmin;
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
    <NavbarStl>
      <FixedContainerStl flex row center>
        <Container w1600>
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
      </FixedContainerStl>
    </NavbarStl>
  )
}