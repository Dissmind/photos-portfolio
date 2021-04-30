import React, {useEffect} from 'react'
import styled, {css} from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {selectPhotosLinks, selectSmallPhotosCount, setPhotos} from "../../photos.slice";
import {getTitleFromUrl} from "../../desktop/atoms/title";
import {ThemeListItems} from "../../../portfolio/page/portfolio";
import {sortPhotos} from "../../desktop/pages/sort-photos";
import {getPhotosMock} from "../../../../tests/mocks/photosMock";
import {Wrapper} from "../../../../shared/layout";


const MainContentStl = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  place-items: center;
  justify-content: center;
  grid-gap: 5px;

  height: 100%;
`

const PhotoWrapperStl = styled(Wrapper)`
  ${props => props.small && css`
    width: 45.9375vw;
    height: 60.3125vw;
    grid-column: ${props => props.lastPhoto ? '1 / 3' : 'auto'};
  `}
  
  ${props => props.large && css`
    width: 93.4375vw;
    height: 57.1875vw;
    grid-column: 1 / 3;
  `}
`

const PhotoStl = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`


export const MainContent = ({}) => {

  const photosLinks = useSelector(selectPhotosLinks)
  const smallPhotoCount = useSelector(selectSmallPhotosCount)
  const dispatch = useDispatch()

  const groupTitleParsed = getTitleFromUrl(window.location.href, ThemeListItems)

  useEffect(() => {
    const photos = sortPhotos(getPhotosMock(groupTitleParsed))
    dispatch(setPhotos({photos}))
  }, [])

  return (
    <MainContentStl>

      {
        photosLinks.map((item, index) => {
          if (item.size === 'small') {
            if (index === photosLinks.length - 1) {
              if ((smallPhotoCount - 1) % 2 === 1) {
                return(
                  <PhotoWrapperStl small>
                    <PhotoStl src={item.link} />
                  </PhotoWrapperStl>
                )
              }
              else {
                return(
                  <PhotoWrapperStl small lastPhoto>
                    <PhotoStl src={item.link} />
                  </PhotoWrapperStl>
                )
              }
            }
            else {
              return(
                <PhotoWrapperStl small>
                  <PhotoStl src={item.link} />
                </PhotoWrapperStl>
              )
            }
          }
          else {
            return(
              <PhotoWrapperStl large>
                <PhotoStl src={item.link} />
              </PhotoWrapperStl>
            )
          }
        })
      }

    </MainContentStl>
  )
}