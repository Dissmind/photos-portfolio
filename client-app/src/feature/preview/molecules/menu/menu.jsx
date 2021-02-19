import React from "react";
import styled from "styled-components";
import {MenuItems} from "../../atoms/menu-items/menu-items";

const MenuStl = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  position: relative;

  background-color: #133F2C;
  width: 210px;
  height: 400px;
  border-radius: 10px;
  padding-top: 50px;
  padding-left: 30px;

  div:nth-child(n){
    margin-top: 10px;
  }

  div:first-child{
    margin: 0;
  }

  div:last-child{
    margin: 0;
  }
`

const MenuBackgroundStl = styled.div`
  position: absolute;
  z-index: -1;
  top: 15px;
  left: 14px;

  width: 210px;
  height: 400px;
  background-color: #FFFFFF;
  border-radius: 10px;
`

export const Menu = () => (
  <MenuStl>
    <MenuItems text={"Обо мне"} />
    <MenuItems text={"Портфолио"} />
    <MenuItems text={"Цена"} />
    <MenuItems text={"Контакты"} />

    <MenuBackgroundStl />
  </MenuStl>
)