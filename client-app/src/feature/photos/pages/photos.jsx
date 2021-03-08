import React from 'react'
import styled from 'styled-components'
import {Navbar} from "../../navbar/organisms/navbar";
import {BtnReturn} from "../atoms/btn-return";
import {Title} from "../atoms/title";

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

const ItemWrapper = styled.div`
  width: 1180px;
  height: 1000px;
  background-color: #ccc;
  align-self: center;
`



export const Photos = ({}) => {
  return (
    <PhotosStl>
      <Navbar type={"menu"} />
      <Wrapper>
        <BtnReturn />
        <Title />
      </Wrapper>

      <ItemWrapper>

      </ItemWrapper>
    </PhotosStl>
  )
}