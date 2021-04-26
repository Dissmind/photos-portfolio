import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Container, Wrapper} from "../../../../shared/layout";
import {useDispatch, useSelector} from "react-redux";
import {selectPhotosLinks, setPhotos} from "../../photos.slice";
import {sortPhotos} from "../pages/sort-photos";
import {getPhotosMock} from "../../../../tests/mocks/photosMock";
import {getTitleFromUrl} from "../atoms/title";
import {ThemeListItems} from "../../../portfolio/desktop/molecules/theme-link-list";

const MainContentStl = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  
  height: 100%;
  
  //place-items: center;
  justify-content: center;
`

const SmallPhotoWrapperStl = styled(Wrapper)`
  width: 36.25rem;
  height: 47.5rem;
`

const LargePhotoWrapperStl = styled(Wrapper)`
  width: 73.75rem;
  height: 45rem;
  grid-column: 1/3;
`

const PhotoStl = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`


export const MainContent = ({}) => {

  const photosLinks = useSelector(selectPhotosLinks)
  const dispatch = useDispatch()

  const groupTitleParsed = getTitleFromUrl(window.location.href, ThemeListItems)

  useEffect(() => {
    const photos = sortPhotos(getPhotosMock(groupTitleParsed))
    dispatch(setPhotos({photos}))
  }, [])

  return (
    <MainContentStl limiter>
      {
        photosLinks.map(i => (
          i.size === "small"
            ? (<SmallPhotoWrapperStl>
                <PhotoStl src={i.link} />
              </SmallPhotoWrapperStl>)

            : (<LargePhotoWrapperStl>
                <PhotoStl src={i.link} />
              </LargePhotoWrapperStl>)
        ))
      }
    </MainContentStl>
  )
}