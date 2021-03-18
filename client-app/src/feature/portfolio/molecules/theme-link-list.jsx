import React from 'react'
import styled from 'styled-components'
import {ThemeLinkItem} from "../atoms/theme-link-item";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {CHANGE_PHOTOS, CHANGE_TITLE} from "../../../redux/actionTypes";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

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

export const Comp = ({onChangeTitle}) => {

  const changeTitle = (title) => {
    onChangeTitle({title: title})
  }

  return (
    <ThemeLinkListStl>
      {ThemeListItems.map((ThemeListItem) => (
        <Link onClick={() => changeTitle(ThemeListItem.theme)} to={`/portfolio/${ThemeListItem.theme.toLowerCase().split(' ').join('-')}`} >
          <ThemeLinkItem
            text={ThemeListItem.theme}
          />
        </Link>
      ))}
    </ThemeLinkListStl>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeTitle: (payload) => dispatch({
      type: CHANGE_TITLE,
      payload
    })
  }
}



export const ThemeLinkList = connect(null, mapDispatchToProps)(Comp)