import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";

const FormInputStl = styled(Container)`
  position: relative;
`

const LabelStl = styled.div`
  height: 4.4444vh;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 4.1666vh;
  line-height: 4.1666vh;
  color: #FFFFFF;
  
  ${media.desktop} {
    height: 3vw;
    font-size: 2.8125vw;
    line-height: 2.8125vw;
  }
`

const InputStl = styled.input`
  position: absolute;
  right: 0;
  
  border: none;
  border-radius: 2.1296vh;
  width: 41.9444vh;
  height: 4.4444vh;
  padding: 0 1.8518vh;

  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 4.1666vh;
  color: #14402D;
  
  &:focus{
    border: none;
    outline: none;
  }
  
  ${media.desktop} {
    border-radius: 1.4375vw;
    width: 28.3125vw;
    height: 3vw;
    padding: 0 1.25vw;
    font-size: 2.8125vw;
  }
`


export const FormInput = ({text}) => {
  
  return (
    <FormInputStl flex>
      <LabelStl>{text}</LabelStl>
      <InputStl type={"text"} />
    </FormInputStl>
  )
}