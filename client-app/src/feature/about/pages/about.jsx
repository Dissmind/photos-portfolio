import React from "react";
import styled from "styled-components";
import {VerticalLabel} from "../atoms/vertical-label";
import {MainPhoto} from "../molecules/main-photo";
import {MainLabel} from "../molecules/main-label";
import {Navbar} from "../../navbar/organisms/navbar";

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
    <Navbar type={"menu"} />
    <Wrapper>
      <VerticalLabel />
      <MainPhoto />
      <MainLabel />
    </Wrapper>
  </AboutStl>
)

//TODO: переделать простые компоненты в атомы (фото, надпись)
