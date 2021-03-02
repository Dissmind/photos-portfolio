import React from "react";
import styled from "styled-components";
import {NavbarItem} from "../../atoms/navbar-item/navbar-item";

const GroupNavbarItemStl = styled.div`
  display: flex;
  div:not(:first-child){
    margin-left: 70px;
  }
`

export const GroupNavbarItem = () => (
  <GroupNavbarItemStl>
    <NavbarItem text={"Главная"} />
    <NavbarItem text={"Портфолио"} />
    <NavbarItem text={"Контакты"} />
    <NavbarItem text={"Цены"} />
  </GroupNavbarItemStl>
)