import React from 'react'
import styled from 'styled-components'
import {ThemeListItems} from "../../page/portfolio";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {setTitle} from "../../../photos/photos.slice";
import {LinkItem} from "../atoms/link-item";

const MainContentStl = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  justify-items: center;
  gap: 20px;
  
  @media screen and (min-width: 540px) {
    grid-template-columns: auto auto;
  }
`

const LinkStl = styled(NavLink)`
  &:link{
    text-decoration: none;
  }
`


export const MainContent = ({}) => {

  const dispatch = useDispatch()

  return (
    <MainContentStl>
      {
        ThemeListItems.map(item => (
          <LinkStl
            onClick={() => {
              dispatch(setTitle({groupTitle: item.theme}))
            }}

            to={`/portfolio/${item.theme.toLowerCase().split(' ').join('-')}`}
          >

            <LinkItem theme={item.theme} />

          </LinkStl>
        ))
      }
    </MainContentStl>
  )
}