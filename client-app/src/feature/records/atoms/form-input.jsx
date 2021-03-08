import React from 'react'
import styled from 'styled-components'

const FormInputStl = styled.div`
  display: flex;
`

const Label = styled.div`
  
`

const Input = styled.input`
  
`


export const FormInput = ({text}) => {
  
  return (
    <>
    <FormInputStl>
      <Label>{text}Имя</Label>
      <Input type={"text"} />
    </FormInputStl>
    <FormInputStl>
      <Label>{text}Почта</Label>
      <Input type={"text"} />
    </FormInputStl>
    </>
  )
}