import React from 'react';
import styled from "styled-components";
import {LabelArrow} from "../atoms/label-arrow";
import {MainContent} from "../organisms/main-content";
import {Navbar} from "../../navbar/organisms/navbar";

const HomeStl = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  
  //LabelArrow
  & > div:nth-child(2){
    margin: 0.625rem 0 2.875rem 9.625rem;
  }
  
  //MainContent
  & > div:nth-child(3){
    align-self: center;
  }
`

export const Home = () => (
  <HomeStl>
    <Navbar type={"lang"} />
    <LabelArrow text={"Выберите свой язык!"} />
    <MainContent />
  </HomeStl>
)