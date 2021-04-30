import React from 'react'
import styled from 'styled-components'
import {Description} from "../atoms/description";
import {MainPhoto, MainPhotoStl} from "../atoms/main-photo";
import {Container} from "../../../../shared/layout";

const MainContentStl = styled(Container)`
  width: 79.375vw;
  max-width: 450px;
  height: 100%;
  
  ${MainPhotoStl} {
    margin: 20px 0;
  }
`


export const MainContent = ({}) => {
  return (
    <MainContentStl flex column center>
      <Description text={'Таким образом, повышение уровня гражданского сознания требует' +
        ' определения и уточнения ключевых компонентов планируемого обновления?'} />
      <MainPhoto />
      <Description text={'Таким образом, повышение уровня \n' +
      'гражданского сознания требует определения \n' +
      'и уточнения ключевых компонентов \n' +
      'планируемого обновления? Соображения \n' +
      'высшего порядка, а также повышение уровня \n' +
      'гражданского сознания играет важную роль \n' +
      'в формировании всесторонне сбалансирован-\n' +
      'ных нововведений! Повседневная практика \n' +
      'показывает, что повышение уровня гражданс-\n' +
      'кого сознания создаёт предпосылки \n' +
      'качественно новых шагов для существующих \n' +
      'финансовых и административных условий.'} />
    </MainContentStl>
  )
}