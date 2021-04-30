import React from 'react'
import styled from 'styled-components'
import {media} from "../../../../shared/media-queries";
import {useDispatch, useSelector} from "react-redux";
import {selectGroupTitle, setTitle} from "../../photos.slice";
import {ThemeListItems} from "../../../portfolio/page/portfolio";

const TitleStl = styled.div`
  height: 100%;
  font-family: 'Solena', serif;
  font-weight: 400;
  font-size: 10.5555vh;
  line-height: 12.6851vh;
  opacity: 60%;
  color: #14402D;
  
  ${media.desktop} {
    font-size: 7.125vw;
    line-height: 8.5625vw;
  }
`


export const getTitleFromUrl = (url, ThemeListItems) => {
  let str = url.split('/')
  str = str[str.length - 1]

  ThemeListItems.map((item) => {
    if (item.theme.toLowerCase().split(' ').join('-') === str) {
      str = item.theme
    }
  })

  return str
}


export const Title = ({}) => {

  const groupTitle = useSelector(selectGroupTitle)
  const dispatch = useDispatch()


  const groupTitleParsed = getTitleFromUrl(window.location.href, ThemeListItems)
  dispatch(setTitle({groupTitle: groupTitleParsed}))


  return (
    <TitleStl>
      {groupTitle}
    </TitleStl>
  )
}