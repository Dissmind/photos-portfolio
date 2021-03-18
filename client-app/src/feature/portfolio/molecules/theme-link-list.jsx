import React from 'react'
import styled from 'styled-components'
import {ThemeLinkItem} from "../atoms/theme-link-item";
import {NavLink} from "react-router-dom";

const ThemeLinkListStl = styled.div`
  width: 68.9375rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3.125rem normal;
`

const Link = styled(NavLink)`
  &:link{
    text-decoration: none;
  }
`

export const ThemeListItems = [
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

export const ThemeLinkList = ({}) => {
  return (
    <ThemeLinkListStl>
      {ThemeListItems.map((ThemeListItem) => (
        <Link to={`/portfolio/${ThemeListItem.theme.toLowerCase().split(' ').join('-')}`} >
          <ThemeLinkItem text={ThemeListItem.theme} />
        </Link>
      ))}
    </ThemeLinkListStl>
  )
}