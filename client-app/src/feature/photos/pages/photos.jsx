import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Navbar} from "../../navbar/organisms/navbar";
import {BtnReturn} from "../atoms/btn-return";
import {Title} from "../atoms/title";
import {connect} from "react-redux";
import {CHANGE_PHOTOS, CHANGE_TITLE} from "../../../redux/actionTypes";
import {photosReducer} from "../../../redux/reducers/photosReducer";

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


const Comp = ({theme, groupTitle, photosLink, addPhotos, onChangeTitle}) => {

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









  const url = window.location.href

  const result = url => {
    let str = url.split('/')
    str = str[str.length - 1]

    str = str[0].toUpperCase() + str.slice(1, str.length)

    let secondWordIndex = str.search('-')
    while(secondWordIndex !== -1) {
      let veryBigWord = str[secondWordIndex + 1].toUpperCase()

      str = str.slice(0, secondWordIndex)
        + ' '
        + veryBigWord
        + str.slice(secondWordIndex + 2, str.length)

      str.search('-')

      secondWordIndex = str.search('-')
    }

    return str
  }

  onChangeTitle({title: result(url)})


  return (
    <PhotosStl>
      <Navbar type={"menu"} />
      <Wrapper>
        <BtnReturn />
        <Title title={groupTitle} />
      </Wrapper>

      <ItemsWrapper>
        {
          photosLink.map(i => <img src={i} alt=""/>)
        }
      </ItemsWrapper>
    </PhotosStl>
  )
}


const mapStateToProps = (state) => {
  return {
    groupTitle: state.photosReducer.groupTitle,
    photosLink: state.photosReducer.photosLink
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addPhotos: (payload) => dispatch({
      type: CHANGE_PHOTOS,
      payload
    }),
    onChangeTitle: (payload) => dispatch({
      type: CHANGE_TITLE,
      payload
    })
  }
}


export const Photos = connect(mapStateToProps, mapDispatchToProps)(Comp)