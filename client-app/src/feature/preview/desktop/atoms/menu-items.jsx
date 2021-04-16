import React from "react";
import styled from "styled-components"

const MenuItemsStl = styled.div`
  color: #FFFFFF;
  font-size: 2.8125rem;
  line-height: 3.375rem;
  font-family: 'Solena', serif;
  font-weight: 400;
  font-style: normal;
  user-select: none;
  
  :hover{
    cursor: pointer;
    color: #ccc;
    transition: .2s;
  }

  //Mobile styles
  @media screen and (max-width: 576px){
    font-size: 1.875rem;
    line-height: 2.25rem;

    :hover{
      cursor: default;
      color: #FFFFFF;
      transition: none;
    }
  }
`

export const MenuItems = ({title}) => (
  <MenuItemsStl>
    {title}
  </MenuItemsStl>
)