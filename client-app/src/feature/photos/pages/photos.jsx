import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Navbar} from "../../navbar/organisms/navbar";
import {BtnReturn} from "../atoms/btn-return";
import {Title} from "../atoms/title";
import {useDispatch, useSelector} from "react-redux";
import {ThemeListItems} from "../../portfolio/molecules/theme-link-list";
import {selectGroupTitle, selectPhotosLinks, setPhotos, setTitle} from "../photos.slice";
import {getPhotosMock} from "../../../tests/mocks/photosMock";
import {sortPhotos} from "./sort-photos";
import {Footer} from "../../footer/organisms/footer";

const PhotosStl = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`

const WrapperStl = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4.375rem;
  margin-bottom: 3.75rem;
  
  //BtnReturn
  & > :first-child {
    position: absolute;
    left: 15rem;
  }
`

const ItemsWrapperStl = styled.div`
  width: 73.75rem;
  align-self: center;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 1.25rem;

  margin-bottom: 1.875rem;

  //Last photo
  & > div:last-child {
    margin: 0 auto;
  }
`

const ImgSmallContainerStl = styled.div`
  width: 36.25rem;
  height: 47.5rem;
`

const ImgLargeContainerStl = styled.div`
  width: 73.75rem;
  height: 45rem;
`

const ImgStl = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  dispatch(setTitle({groupTitle: groupTitleParsed}))

  useEffect(() => {
    const photos = sortPhotos(getPhotosMock(groupTitleParsed))

    dispatch(setPhotos({photos}))
  }, [])



  return (
    <PhotosStl>
      <Navbar type={"menu"} />
      <WrapperStl>
        <BtnReturn />
        <Title title={groupTitle} />
      </WrapperStl>

      <ItemsWrapperStl>
        {
          photosLinks.map(i => (
            i.size === "small"
              ? (<ImgSmallContainerStl>
                  <ImgStl src={i.link} />
                </ImgSmallContainerStl>)

              : (<ImgLargeContainerStl>
                  <ImgStl src={i.link} />
                </ImgLargeContainerStl>)
          ))
        }
      </ItemsWrapperStl>

      <Footer />
    </PhotosStl>
  )
}