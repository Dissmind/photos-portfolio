import React from "react";
import styled from "styled-components";

const MainLabelStl = styled.div`
  width: 48.875rem;
  height: 41.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const HorizontalLineStl = styled.div`
  width: 36.4375rem;
  height: 0.3125rem;
  background-color: #133F2C;
`

const MainLabelTextStl = styled.div`
  font-family: 'PentaLight', serif;
  font-weight: 400;
  line-height: 2.8125rem;
  text-align: center;
  font-size: 2.8125rem;
  color: #14402D;
`

export const MainLabel = () => (
  <MainLabelStl>
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