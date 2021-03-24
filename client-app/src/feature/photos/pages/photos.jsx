import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Navbar} from "../../navbar/organisms/navbar";
import {BtnReturn} from "../atoms/btn-return";
import {Title} from "../atoms/title";
import {useDispatch, useSelector} from "react-redux";
import {ThemeListItems} from "../../portfolio/molecules/theme-link-list";
import {selectGroupTitle, setTitle} from "../photos.slice";

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


const sortPhotos = (arr) => {

  // TODO: sort array

  return arr
}


export const Photos = () => {

  // useEffect(() => {
  //   // TODO: fetch
  //   const array = [
  //     {
  //       link: '',
  //       type: 'small'
  //     },
  //     {
  //       link: '',
  //       type: 'large'
  //     },
  //     {
  //       link: '',
  //       type: 'small'
  //     }
  //   ]
  // }
    
    
  //   const payload = {
  //     groupTitle: 'qwefdsfgg',
  //     photosLink: [
  //       {
  //         link: 'http://localhost/img/AL2A7228.png',
  //         type: 'small'
  //       },
  //       {
  //         link: 'http://localhost/img/AL2A7228.png',
  //         type: 'large'
  //       },
  //       {
  //         link: 'http://localhost/img/AL2A7228.png',
  //         type: 'small'
  //       }
  //     ]
  //   }
  //
  //   addPhotos(payload)
  // }, [])


  const groupTitle = useSelector(selectGroupTitle)
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

  dispatch(setTitle(setTitleFromUrl(window.location.href, ThemeListItems)))



  return (
    <PhotosStl>
      <Navbar type={"menu"} />
      <Wrapper>
        <BtnReturn />
        <Title title={groupTitle} />
      </Wrapper>

      <ItemsWrapper>
        {/*{*/}
        {/*  photosLink.map(i => <img src={i} alt=""/>)*/}
        {/*}*/}
      </ItemsWrapper>
    </PhotosStl>
  )
}