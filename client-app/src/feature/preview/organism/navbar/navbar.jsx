import React from "react";
import styled from "styled-components";
import {GroupBtnSelectLanguage} from "../../molecules/group-btn-select-language/group-btn-select-language";
import {BtnSignUp} from "../../atoms/btn-sign-up/btn-sign-up";
import {ThemeSwitcher} from "../../molecules/theme-switcher/theme-switcher";

const NavbarStl = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  height: 70px;
  background-color: #133F2C;
  display: flex;
  align-items: center;
`

export const Navbar = () => (
  <NavbarStl>
    <GroupBtnSelectLanguage />
    <BtnSignUp />
    <ThemeSwitcher />
  </NavbarStl>
)