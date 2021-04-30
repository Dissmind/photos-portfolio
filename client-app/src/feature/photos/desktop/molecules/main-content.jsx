import React, {useEffect} from 'react'
import styled, {css} from 'styled-components'
import {Container, Wrapper} from "../../../../shared/layout";
import {useDispatch, useSelector} from "react-redux";
import {selectPhotosLinks, selectSmallPhotosCount, setPhotos} from "../../photos.slice";
import {sortPhotos} from "../pages/sort-photos";
import {getPhotosMock} from "../../../../tests/mocks/photosMock";
import {getTitleFromUrl} from "../atoms/title";
import {media} from "../../../../shared/media-queries";
import {ThemeListItems} from "../../../portfolio/page/portfolio";

const MainContentStl = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  place-items: center;
  justify-content: center;
  grid-gap: 1.8518vh;
  
  height: 100%;
  
  ${media.desktop} {
    grid-gap: 1.25vw;
  }
`

const PhotoWrapperStl = styled(Wrapper)`
  ${props => props.small && css`
    width: 53.7037vh;
    height: 70.3703vh;
    grid-column: ${props => props.lastPhoto ? '1 / 3' : 'auto'};
    
    ${media.desktop} {
      width: 36.25vw;
      height: 47.5vw;
    }
  `}
  
  ${props => props.large && css`
    width: 109.2592vh;
    height: 66.6666vh;
    grid-column: 1 / 3;
    
    ${media.desktop} {
      width: 73.75vw;
      height: 45vw;
    }
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
    <MainContentStl limiter>

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