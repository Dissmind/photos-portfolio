import React from "react";
import styled from "styled-components"

const MenuItemsStl = styled.div`
  color: white;
  font-size: 45px;
  font-family: 'Solena', serif;
  font-weight: 400;
  font-style: normal;
`

export const MenuItems = ({text}) => (
  <MenuItemsStl>{text}</MenuItemsStl>
)