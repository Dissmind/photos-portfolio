import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Navbar} from "../../navbar/organisms/navbar";
import {BtnReturn} from "../atoms/btn-return";
import {Title} from "../atoms/title";
import {useDispatch, useSelector} from "react-redux";
import {ThemeListItems} from "../../portfolio/molecules/theme-link-list";
import {selectGroupTitle, selectPhotosLinks, setPhotos, setTitle} from "../photos.slice";
import {getPhotos} from "../../../tests/mocks/photosMock";

const PhotosStl = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4.375rem;
  & > div:nth-child(1){
    position: absolute;
    left: 15rem;
  }
`

const ItemsWrapper = styled.div`
  width: 73.75rem;
  height: 62.5rem;
  background-color: #ccc;
  align-self: center;
`


export const Photos = () => {


  const groupTitle = useSelector(selectGroupTitle)
  const photosLinks = useSelector(selectPhotosLinks)
  const dispatch = useDispatch()


  const setTitleFromUrl = (url, ThemeListItems) => {
    let str = url.split('/')
    str = str[str.length - 1]

    ThemeListItems.map((item) => {
      if (item.theme.toLowerCase().split(' ').join('-') === str) {
        str = item.theme
      }
    })

    return str
  }

  const groupTitleParsed = setTitleFromUrl(window.location.href, ThemeListItems)
  dispatch(setTitle(groupTitleParsed))

  useEffect(() => {
    const photos = getPhotos(groupTitleParsed)
    dispatch(setPhotos({photos: photos.photos}))
  }, [])



  return (
    <PhotosStl>
      <Navbar type={"menu"} />
      <Wrapper>
        <BtnReturn />
        <Title title={groupTitle} />
      </Wrapper>

      <ItemsWrapper>
        {
          photosLinks.map(i => <img src={i.link} alt=""/>)
        }
      </ItemsWrapper>
    </PhotosStl>
  )
}