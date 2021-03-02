import React from "react";
import styled from "styled-components";
import {VerticalLabel} from "../atoms/vertical-label";
import {MainPhoto} from "../atoms/main-photo";
import {MainLabel} from "../atoms/main-label";
import {Navbar} from "../../navbar/organisms/navbar";

const AboutStl = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  
  & > div:nth-child(2){
    margin-left: 0.9375rem;
    margin-right: 4.375rem;
  }
`

export const About = () => (
  <AboutStl>
    <Navbar type={"menu"} />
    <Wrapper>
      <VerticalLabel />
      <MainPhoto />
      <MainLabel />
    </Wrapper>
  </AboutStl>
)