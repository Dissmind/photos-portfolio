import React from "react";
import styled from "styled-components";
import {VerticalLabel} from "../atoms/vertical-label";
import {MainPhoto} from "../atoms/main-photo";
import {MainLabel} from "../atoms/main-label";
import {Navbar} from "../../../navbar/desktop/organisms/navbar";
import {Footer} from "../../../footer/organisms/footer";

const AboutStl = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const WrapperStl = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;

  margin-bottom: 1.875rem;

  //MainPhoto
  & > div:nth-child(2){
    margin-left: 0.9375rem;
    margin-right: 4.375rem;
  }
`


export const About = () => (
  <AboutStl>
    <Navbar type={"menu"} />

    <WrapperStl>
      <VerticalLabel text={"Обо мне"} />
      <MainPhoto />
      <MainLabel />
    </WrapperStl>

    <Footer />
  </AboutStl>
)