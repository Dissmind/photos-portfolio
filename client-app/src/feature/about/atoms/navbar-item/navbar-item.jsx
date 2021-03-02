import React from "react";
import styled from "styled-components";

const NavbarItemStl = styled.div`
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 30px;
  color: #FFFFFF;
  
  :hover{
    cursor: pointer;
    color: #ccc;
    transition: .2s;
  }
`

export const NavbarItem = ({text}) => {
  return (
    <NavbarItemStl>{text}</NavbarItemStl>
  )
}