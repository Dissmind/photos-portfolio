import React from "react";
import styled from "styled-components";
import {GroupBtnSelectLanguage} from "../../molecules/group-btn-select-language/group-btn-select-language";
import {BtnSignUp} from "../../atoms/btn-sign-up/btn-sign-up";
import {ThemeSwitcher} from "../../molecules/theme-switcher/theme-switcher";

const NavbarHomeStl = styled.div`
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

export const NavbarHome = () => (
  <NavbarHomeStl>
    <GroupBtnSelectLanguage />
    <BtnSignUp />
    <ThemeSwitcher />
  </NavbarHomeStl>
)