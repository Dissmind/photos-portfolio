import React from "react";
import styled from "styled-components";
import {NavbarMain} from "../organism/navbar-main/navbar-main";
import {VerticalLabel} from "../atoms/vertical-label/vertical-label";
import {MainPhoto} from "../molecules/main-photo/main-photo";
import {MainLabel} from "../molecules/main-label/main-label";

const AboutStl = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  margin-top: 160px;
  display: flex;
`

export const About = () => (
  <AboutStl>
    <NavbarMain />
    <Wrapper>
      <VerticalLabel />
      <MainPhoto />
      <MainLabel />
    </Wrapper>
  </AboutStl>
)

//TODO: я тут
