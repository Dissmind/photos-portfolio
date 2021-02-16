import React from "react";
import styled from "styled-components";
import {MenuItems} from "../../atoms/menu-items/menu-items";

const MenuStl = styled.div`
  display: flex;
  flex-direction: column;
  
  background-color: #133F2C;
  width: 210px;
  height: 400px;
  padding-left: 28px;
  padding-top: 50px;
  border-radius: 10px;
  
  div:nth-child(n) {
    margin-top: 10px;
  }

  div:first-child {
    margin: 0;
  }
`

export const Menu = () => (
  <MenuStl>
    <MenuItems text={"Обо мне"} />
    <MenuItems text={"Портфолио"} />
    <MenuItems text={"Цена"} />
    <MenuItems text={"Контакты"} />
  </MenuStl>
)