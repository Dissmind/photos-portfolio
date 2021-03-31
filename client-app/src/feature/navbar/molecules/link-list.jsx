import React from 'react'
import styled from 'styled-components'
import {LinkItem} from "../atoms/link-item";
import {NavLink} from "react-router-dom";

const LinkListStl = styled.div`
  display: flex;
  
  a:not(:first-child) {
    margin-left: 4.375rem;
  }

  //Mobile styles
  @media screen and (min-width: 320px) and (max-width: 576px){
    display: none;
  }
`

const LinkStl = styled(NavLink)`
  &:link{
    text-decoration: none;
  }
`


export const LinkList = ({}) => {
  return (
    <LinkListStl>
      <LinkStl to={"/"}><LinkItem text={"Главная"} /></LinkStl>
      <LinkStl to={"/about"}><LinkItem text={"Обо мне"} /></LinkStl>
      <LinkStl to={"/portfolio"}><LinkItem text={"Портфолио"} /></LinkStl>
      <LinkStl to={"/records"}><LinkItem text={"Контакты"} /></LinkStl>
      <LinkStl to={"/"}><LinkItem text={"Цены"} /></LinkStl>
    </LinkListStl>
  )
}

//TODO: роутер для "Цены"