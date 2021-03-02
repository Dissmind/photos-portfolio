import React from 'react'
import styled from 'styled-components'
import {ThemeLinkItem} from "../atoms/theme-link-item";

const ThemeLinkListStl = styled.div`
  width: 1103px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px normal;
`


export const ThemeLinkList = ({}) => {

  const ThemeListItems = [
    {theme: "Backstage blog"},
    {theme: "Family"},
    {theme: "Kids"},
    {theme: "Love story"},
    {theme: "New Year"},
    {theme: "Pregnancy"},
    {theme: "Travel"},
    {theme: "Wedding"},
    {theme: "Women"},
  ]

  return (
    <ThemeLinkListStl>
      {ThemeListItems.map((ThemeListItem) => (
        <ThemeLinkItem text={ThemeListItem.theme} />
      ))}
    </ThemeLinkListStl>
  )
}