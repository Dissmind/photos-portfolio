import React from 'react'
import styled from 'styled-components'
import {ThemeLinkItem} from "../atoms/theme-link-item";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setTitle} from "../../photos/photos.slice";

const ThemeLinkListStl = styled.div`
  width: 68.9375rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3.125rem normal;
`

const LinkStl = styled(NavLink)`
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

export const ThemeLinkList = () => {

  const dispatch = useDispatch()


  return (
    <ThemeLinkListStl>
      {
        ThemeListItems.map((ThemeListItem) => (
          <LinkStl
            onClick={() => {
              dispatch(setTitle({groupTitle: ThemeListItem.theme}))
            }}

            to={`/portfolio/${ThemeListItem.theme.toLowerCase().split(' ').join('-')}`}
          >
            <ThemeLinkItem text={ThemeListItem.theme} />
          </LinkStl>
        ))
      }
    </ThemeLinkListStl>
  )
}