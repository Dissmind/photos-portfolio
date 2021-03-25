import React from 'react'
import styled from 'styled-components'
import {FormInput} from "../atoms/form-input";
import {BtnSend} from "../atoms/btn-send";


const FormStl = styled.div`
  position: relative;
  width: 45.3125rem;
  background-color: #14402D;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem 2.8125rem 3.125rem;
  
  //FormInput's - 2 and 3
  div:nth-child(3), div:nth-child(4) {
    margin-top: 1.5625rem;
  }
  
  //BtnSend
  & > div:last-child {
    margin-top: 2.1875rem;
    align-self: center;
  }
`

const LabelStl = styled.div`
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 2.8125rem;
  line-height: 2.8125rem;
  color: #FFFFFF;
  margin-bottom: 2.1875rem;
`


export const Form = () => {
  return (
    <FormStl>
      <LabelStl>
        Заполните анкету и я перезвоню вам для уточнения даты и времени!
      </LabelStl>

      <FormInput text={"Имя:"} />
      <FormInput text={"Почта:"} />
      <FormInput text={"Телефон:"} />

      <BtnSend />
    </FormStl>
  )
}