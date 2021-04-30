import React from 'react'
import {Title} from "../../../about/mobile/atoms/title";
import {useDispatch, useSelector} from "react-redux";
import {selectGroupTitle, setTitle} from "../../photos.slice";
import {ThemeListItems} from "../../../portfolio/page/portfolio";
import {getTitleFromUrl} from "../../desktop/atoms/title";


export const TitlePhotos = ({}) => {

  const groupTitle = useSelector(selectGroupTitle)
  const dispatch = useDispatch()

  const groupTitleParsed = getTitleFromUrl(window.location.href, ThemeListItems)
  dispatch(setTitle({groupTitle: groupTitleParsed}))

  return (
    <Title text={groupTitle} />
  )
}