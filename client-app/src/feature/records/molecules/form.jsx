import React from 'react'
import styled from 'styled-components'
import {FormInput} from "../atoms/form-input";


const FormStl = styled.div`
  position: relative;
  width: 45.3125rem;
  height: 20.9375rem;
  background-color: #14402D;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem 2.8125rem 3.125rem;
  
  & > div:not(:first-child){
    margin-top: 1.5625rem;
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


export const Form = ({}) => {

  return (
    <FormStl>
      <LabelStl>
        Заполните анкету и я перезвоню вам для уточнения даты и времени!
      </LabelStl>

      <FormInput text={"Имя:"} marginRight={"3rem"} />
      <FormInput text={"Почта:"} marginRight={"1.1875rem"} />
      {/*<FormInput text={"Телефон:"} marginRight={} />*/}

    {/*  TODO: инпут номер телефона*/}
    {/*  TODO: сенд месаже*/}
    </FormStl>
  )
}