import React from "react";
import styled from "styled-components";
import {GroupNavbarItem} from "../../molecules/group-navbar-item/group-navbar-item";
import {BtnSignUp} from "../../../preview/atoms/btn-sign-up/btn-sign-up";
import {ThemeSwitcher} from "../../../preview/molecules/theme-switcher/theme-switcher";

const NavbarMainStl = styled.div`
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

export const NavbarMain = () => (
  <NavbarMainStl>
    <GroupNavbarItem />
    <BtnSignUp />
    <ThemeSwitcher />
  </NavbarMainStl>
)