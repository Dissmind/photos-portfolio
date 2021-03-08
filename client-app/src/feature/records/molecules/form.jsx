import React from 'react'
import styled from 'styled-components'
import {FormInput} from "../atoms/form-input";


const FormStl = styled.div`
  position: relative;
  width: 725px;
  height: 335px;
  background-color: #14402D;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 45px 50px;
  
  & > div:not(:first-child){
    margin-top: 25px;
  }
`

const Label = styled.div`
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 45px;
  line-height: 45px;
  color: #FFFFFF;
  margin-bottom: 35px;
`


export const Form = ({}) => {

  return (
    <FormStl>
      <Label>Заполните анкету и я перезвоню вам для уточнения даты и времени!</Label>
      <FormInput text={"Имя:"} marginRight={"48px"} />
      <FormInput text={"Почта:"} marginRight={"19px"} />
    </FormStl>
  )
}