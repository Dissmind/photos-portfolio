import React from "react";
import styled from "styled-components";
import {Menu, MenuContainerStl} from "../molecules/menu";
import {Slider} from "./slider";
import {media} from "../../../../shared/media-queries";
import {Container} from "../../../../shared/layout";

const MainContentStl = styled.div`
  position: relative;

  width: 120.9259vh;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  
  ${MenuContainerStl} {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 8.0555vh;
    
    ${media.desktop} {
      top: 5.4375vw;
    }
  }
  
  ${media.desktop} {
    width: 81.625vw;

  }
`

export const MainContent = () => (
  <Container limiter>
    <Container flex row center>
      <MainContentStl>
        <Menu />
        <Slider />
      </MainContentStl>
    </Container>
  </Container>
)