import React from 'react';
import styled from "styled-components";
import {NavbarHome} from "../organism/navbar-home/navbar-home";
import {LabelArrow} from "../atoms/label-arrow/label-arrow";
import {MainContent} from "../organism/main-content/main-content";

const HomeStl = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  
  & > div:nth-child(2){
    margin: 10px 0 46px 154px;
  }
  
  & > div:nth-child(3){
    align-self: center;
  }
`

export const Home = () => (
  <HomeStl>
    <NavbarHome />
    <LabelArrow />
    <MainContent />
  </HomeStl>
)