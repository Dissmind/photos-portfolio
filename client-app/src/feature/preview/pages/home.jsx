import React from 'react';
import styled from "styled-components";
import {LabelArrow} from "../atoms/label-arrow";
import {MainContent} from "../organisms/main-content";
import {Navbar} from "../../navbar/organisms/navbar";

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
    <Navbar type={"lang"} />
    <LabelArrow />
    <MainContent />
  </HomeStl>
)