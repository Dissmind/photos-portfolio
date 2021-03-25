import React from 'react'
import styled from 'styled-components'

const FormInputStl = styled.div`
  display: flex;
`

const LabelStl = styled.div`
  width: 6.75rem;
  height: 3rem;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 2.8125rem;
  line-height: 2.8125rem;
  color: #FFFFFF;
`

const InputStl = styled.input`
  position: absolute;
  right: 2.8125rem;
  
  border: none;
  border-radius: 1.4375rem;
  width: 28.3125rem;
  height: 3rem;
  padding: 0 1.25rem;

  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 2.8125rem;
  color: #14402D;
  
  &:focus{
    border: none;
    outline: none;
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