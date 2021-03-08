import React from 'react'
import styled from 'styled-components'

const FormInputStl = styled.div`
  display: flex;
`

const Label = styled.div`
  width: 108px;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 45px;
  line-height: 45px;
  color: #FFFFFF;
  margin-right: 19px;
`

const Input = styled.input`
  border: none;
  border-radius: 23px;
  width: 404px;
  height: 48px;
  //padding: 0 10px;
  //font-size: 45px;
  &:focus{
    border: none;
    outline: none;
    //padding: 0 10px;
  }
`


export const FormInput = ({text}) => {
  
  return (
    <FormInputStl>
      <Label>{text}</Label>
      <Input type={"text"} />
    </FormInputStl>
  )
}

//TODO: спросить у Вики о стилизации текста внутри инпутов + кнопка отправить и что будет по её нажатию