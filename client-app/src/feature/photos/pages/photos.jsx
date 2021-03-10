import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Navbar} from "../../navbar/organisms/navbar";
import {BtnReturn} from "../atoms/btn-return";
import {Title} from "../atoms/title";
import {connect} from "react-redux";
import {CHANGE_PHOTOS} from "../../../redux/actionTypes";
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
  margin-top: 70px;
  & > div:nth-child(1){
    position: absolute;
    left: 240px;
  }
`

const ItemsWrapper = styled.div`
  width: 1180px;
  height: 1000px;
  background-color: #ccc;
  align-self: center;
`

const sortPhotos = (arr) => {
  
  
  
  return arr
}

const Comp = ({groupTitle, photosLink, addPhotos}) => {

  useEffect(() => {

    // TODO: fetch

    const array = [
      {
        link: '',
        type: 'small'
      },
      {
        link: '',
        type: 'large'
      },
      {
        link: '',
        type: 'small'
      }
    ]
    
    
    
    const payload = {
      groupTitle: 'qwefdsfgg',
      photosLink: [
        {
          link: 'http://localhost/img/AL2A7228.png',
          type: 'small'
        },
        {
          link: 'http://localhost/img/AL2A7228.png',
          type: 'large'
        },
        {
          link: 'http://localhost/img/AL2A7228.png',
          type: 'small'
        }
      ]
    }

    addPhotos(payload)
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
    })
  }
}


export const Photos = connect(mapStateToProps, mapDispatchToProps)(Comp)