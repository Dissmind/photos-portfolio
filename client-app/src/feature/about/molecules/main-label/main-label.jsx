import React from "react";
import styled from "styled-components";
import {HorizontalLine} from "../../atoms/horizontal-line/horizontal-line";
import {MainLabelText} from "../../atoms/main-label-text/main-label-text";

const MainLabelStl = styled.div`
  width: 782px;
  height: 660px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const MainLabel = () => (
  <MainLabelStl>
    <HorizontalLine />
    <MainLabelText
      text={"Таким образом, повышение уровня \n" +
      "гражданского сознания требует определения \n" +
      "и уточнения ключевых компонентов \n" +
      "планируемого обновления? Соображения \n" +
      "высшего порядка, а также повышение уровня \n" +
      "гражданского сознания играет важную роль \n" +
      "в формировании всесторонне сбалансирован-\n" +
      "ных нововведений! Повседневная практика \n" +
      "показывает, что повышение уровня гражданс-\n" +
      "кого сознания создаёт предпосылки \n" +
      "качественно новых шагов для существующих \n" +
      "финансовых и административных условий."}
    />
    <HorizontalLine />
  </MainLabelStl>
)