import React from 'react'
import styled from 'styled-components'
import {ThemeLinkItem} from "../atoms/theme-link-item";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setTitle} from "../../../photos/photos.slice";
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";

const ThemeLinkListStl = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 4.6296vh 9.2592vh;
  
  ${media.desktop} {
    grid-gap: 3.125vw 6.25vw;
  }
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