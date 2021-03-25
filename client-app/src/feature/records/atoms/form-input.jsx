import React from 'react'
import styled from 'styled-components'

const FormInputStl = styled.div`
  display: flex;
`

const LabelStl = styled.div`
  width: 6.75rem;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 2.8125rem;
  line-height: 2.8125rem;
  color: #FFFFFF;
  margin-right: 1.1875rem;
`

const InputStl = styled.input`
  border: none;
  border-radius: 1.4375rem;
  width: 25.25rem;
  height: 3rem;
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
      <LabelStl>{text}</LabelStl>
      <InputStl type={"text"} />
    </FormInputStl>
  )
}

//TODO: спросить у Вики о стилизации текста внутри инпутов + кнопка отправить и что будет по её нажатию