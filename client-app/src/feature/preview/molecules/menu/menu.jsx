import React from "react";
import styled from "styled-components";
import {MenuItems} from "../../atoms/menu-items/menu-items";

const MenuStl = styled.div`
  display: flex;
  flex-direction: column;
  
        
  background-color: #133F2C;
  width: 210px;
  height: 400px;
`

export const Menu = () => (
  <MenuStl>
    <MenuItems text={"Обо мне"} />
    <MenuItems text={"Портфолио"} />
    <MenuItems text={"Цена"} />
    <MenuItems text={"Контакты"} />
  </MenuStl>
)