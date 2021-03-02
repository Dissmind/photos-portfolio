import React from 'react'
import styled from 'styled-components'
import {LinkItem} from "../atoms/link-item";

const LinkListStl = styled.div`
  display: flex;
  div:not(:first-child){
    margin-left: 70px;
  }
`


export const LinkList = ({}) => {
  return (
    <LinkListStl>
      <LinkItem text={"Главная"} />
      <LinkItem text={"Портфолио"} />
      <LinkItem text={"Контакты"} />
      <LinkItem text={"Цены"} />
    </LinkListStl>
  )
}