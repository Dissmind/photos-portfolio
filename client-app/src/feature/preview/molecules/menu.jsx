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
  width: 210px;
  height: 390px;
  border-radius: 10px;
  padding-top: 50px;
  padding-left: 30px;

  a:not(:first-child){
    margin-top: 10px;
  }
`

const MenuBackgroundStl = styled.div`
  position: absolute;
  z-index: -1;
  top: 15px;
  left: 14px;

  width: 210px;
  height: 390px;
  background-color: #FFFFFF;
  border-radius: 10px;
`

const Wrapper = styled.div`
  width: 224px;
  height: 405px;
`

const Link = styled(NavLink)`
  &:link{
    text-decoration: none;
  }  
`

export const Menu = () => (
  <Wrapper>
    <MenuStl>
      <Link to={"/about"}><MenuItems text={"Обо мне"} /></Link>
      <Link to={"/portfolio"}><MenuItems text={"Портфолио"} /></Link>
      <Link to={"/"}><MenuItems text={"Цены"} /></Link>
      <Link to={"records"}><MenuItems text={"Контакты"} /></Link>

      <MenuBackgroundStl />
    </MenuStl>
  </Wrapper>
)

//TODO: рутер на "Цена"