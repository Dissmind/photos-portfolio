import React from "react";
import styled from "styled-components"
import {media} from "../../../../shared/media-queries";

const MenuItemsStl = styled.div`
  color: #FFFFFF;
  font-size: 4.1666vh;
  line-height: 5vh;
  font-family: 'Solena', serif;
  font-weight: 400;
  font-style: normal;
  user-select: none;
  
  :hover{
    cursor: pointer;
    color: #ccc;
    transition: .2s;
  }
  
  ${media.desktop} {
    font-size: 2.8125vw;
    line-height: 3.375vw;
  }
`

export const MenuItems = ({title}) => (
  <MenuItemsStl>
    {title}
  </MenuItemsStl>
)