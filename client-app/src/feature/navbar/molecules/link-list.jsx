import React from 'react'
import styled from 'styled-components'
import {LinkItem} from "../atoms/link-item";
import {NavLink} from "react-router-dom";

const LinkListStl = styled.div`
  display: flex;
  a:not(:first-child){
    margin-left: 4.375rem;
  }
`

const Link = styled(NavLink)`
  &:link{
    text-decoration: none;
  }
`


export const LinkList = ({}) => {
  return (
    <LinkListStl>
      <Link to={"/"}><LinkItem text={"Главная"} /></Link>
      <Link to={"/about"}><LinkItem text={"Обо мне"} /></Link>
      <Link to={"/portfolio"}><LinkItem text={"Портфолио"} /></Link>
      <Link to={"/records"}><LinkItem text={"Контакты"} /></Link>
      <Link to={"/"}><LinkItem text={"Цены"} /></Link>
    </LinkListStl>
  )
}

//TODO: роутер для "Цены"