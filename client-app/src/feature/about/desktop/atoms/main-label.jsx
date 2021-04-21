import React from "react";
import styled from "styled-components";
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";

const MainLabelStl = styled(Container)`
  width: 72.4074vh;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  
  ${media.desktop} {
    width: 48.875vw;
  }
`

const HorizontalLineStl = styled.div`
  width: 53.9814vh;
  height: 0.4629vh;
  background-color: #133F2C;
  
  ${media.desktop} {
    width: 36.4375vw;
    height: 0.3125vw;
  }
`

const MainLabelTextStl = styled.div`
  font-family: 'PentaLight', serif;
  font-weight: 400;
  line-height: 4.1666vh;
  text-align: center;
  font-size: 4.1666vh;
  color: #14402D;
  
  ${media.desktop} {
    line-height: 2.8125vw;
    font-size: 2.8125vw;
  }
`

export const MainLabel = () => (
  <MainLabelStl flex column>
    <HorizontalLineStl />

    <MainLabelTextStl>
      Таким образом, повышение уровня
      гражданского сознания требует определения
      и уточнения ключевых компонентов
      планируемого обновления? Соображения
      высшего порядка, а также повышение уровня
      гражданского сознания играет важную роль
      в формировании всесторонне сбалансирован-
      ных нововведений! Повседневная практика
      показывает, что повышение уровня гражданс-
      кого сознания создаёт предпосылки
      качественно новых шагов для существующих
      финансовых и административных условий.
    </MainLabelTextStl>

    <HorizontalLineStl />
  </MainLabelStl>
)