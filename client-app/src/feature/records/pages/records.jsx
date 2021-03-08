import React from 'react'
import styled from 'styled-components'
import {Navbar} from "../../navbar/organisms/navbar";
import {MainContent} from "../organisms/main-content";
import {RecordsVerticalLabel} from "../atoms/records-vertical-label";

const RecordsStl = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 160px;
  
  & > div:nth-child(1){
    height: 640px;
    position: absolute;
    left: 40px;
  }
`


export const Records = ({}) => {

  return (
    <RecordsStl>
      <Navbar type={"menu"} />
      <Wrapper>
        <RecordsVerticalLabel text={"Запись на фотосессию"} />
        <MainContent />
      </Wrapper>
    </RecordsStl>
  )
}