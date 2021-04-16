import React from 'react'
import styled from 'styled-components'
import {Navbar} from "../../navbar/desktop/organisms/navbar";
import {MainContent} from "../organisms/main-content";
import {RecordsVerticalLabel} from "../atoms/records-vertical-label";
import {Footer} from "../../footer/organisms/footer";

const RecordsStl = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const WrapperStl = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  
  max-width: 1600px;
  width: 100%;
  margin-top: 10rem;
  margin-bottom: 1.875rem;

  //RecordsVerticalLabel
  & > div:nth-child(1){
    height: 40rem;
    position: absolute;
    left: 2.5rem;
  }
`


export const Records = () => {

  return (
    <RecordsStl>
      <Navbar type={"menu"} />

      <WrapperStl>
        <RecordsVerticalLabel text={"Запись на фотосессию"} />
        <MainContent />
      </WrapperStl>

      <Footer />
    </RecordsStl>
  )
}