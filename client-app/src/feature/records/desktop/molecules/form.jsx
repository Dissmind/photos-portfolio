import React from 'react'
import styled from 'styled-components'
import {FormInput} from "../atoms/form-input";
import {BtnSend, BtnSendStl} from "../atoms/btn-send";
import {media} from "../../../../shared/media-queries";
import {Container, Wrapper} from "../../../../shared/layout";


const FormStl = styled.div`
  position: relative;
  width: 45.3125rem;
  background-color: #14402D;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem 2.8125rem 3.125rem;
  

  
  ${BtnSendStl} {
    align-self: center;
  }
`

const LabelStl = styled.div`
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 4.1666vh;
  line-height: 4.1666vh;
  color: #FFFFFF;
  margin-bottom: 3.2407vh;
  
  ${media.desktop} {
    font-size: 2.8125vw;
    line-height: 2.8125vw;
    margin-bottom: 2.1875vw;
  }
`

const ContainerStl = styled(Container)`
  margin-bottom: 3.2407vh;

  & > div:nth-child(1), div:nth-child(2) {
    margin-bottom: 2.3148vh;
  } 
  
  ${media.desktop} {
    margin-bottom: 2.1875vw;

    & > div:nth-child(1), div:nth-child(2) {
      margin-bottom: 1.5625vw;
    }
  }
`


export const Form = () => {
  return (
    <FormStl>
      <LabelStl>
        Заполните анкету и я перезвоню вам для уточнения даты и времени!
      </LabelStl>

      <ContainerStl>
        <FormInput text={"Имя:"} />
        <FormInput text={"Почта:"} />
        <FormInput text={"Телефон:"} />
      </ContainerStl>

      <BtnSend />
    </FormStl>
  )
}