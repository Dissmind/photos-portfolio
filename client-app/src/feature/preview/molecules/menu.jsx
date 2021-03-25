import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom"
import {MenuItems} from "../atoms/menu-items";

const MenuStl = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  position: relative;

  background-color: #133F2C;
  width: 13.125rem;
  height: 24.375rem;
  border-radius: 0.625rem;
  padding-top: 3.125rem;
  padding-left: 1.875rem;

  a:not(:first-child){
    margin-top: 0.625rem;
  }
`

const MenuBackgroundStl = styled.div`
  position: absolute;
  z-index: -1;
  top: 0.9375rem;
  left: 0.875rem;

  width: 13.125rem;
  height: 24.375rem;
  background-color: #FFFFFF;
  border-radius: 0.625rem;
`

const WrapperStl = styled.div`
  width: 14rem;
  height: 25.3125rem;
`

const LinkStl = styled(NavLink)`
  &:link{
    text-decoration: none;
  }  
`

export const Menu = () => (
  <WrapperStl>
    <MenuStl>
      <LinkStl to={"/about"}><MenuItems text={"Обо мне"} /></LinkStl>
      <LinkStl to={"/portfolio"}><MenuItems text={"Портфолио"} /></LinkStl>
      <LinkStl to={"/"}><MenuItems text={"Цены"} /></LinkStl>
      <LinkStl to={"records"}><MenuItems text={"Контакты"} /></LinkStl>

      <MenuBackgroundStl />
    </MenuStl>
  </WrapperStl>
)

//TODO: рутер на "Цена"