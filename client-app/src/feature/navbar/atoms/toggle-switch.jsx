import React  from "react";
import styled from "styled-components";

const ToggleSwitchStl = styled.div`
  position: relative;
  width: 4.375rem;
  height: 2.1875rem;
`

const CheckBoxStl = styled.input`
  display: none;
  
  &:checked + label {
    //background-color: ;
    &::after{
      margin-left: 2.1875rem;
      
      content: "";
      display: block;
      box-sizing: border-box;
      width: 2.1875rem;
      height: 2.1875rem;
      border: #FFFFFF 0.125rem solid;
      border-radius: 1.125rem;
      background-color: #133F2C;
      transition: .3s;
    }
}
`

const SliderStl = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 4.375rem;
  height: 2.1875rem;
  border-radius: 1.125rem;
  background-color: #FFFFFF;
  cursor: pointer;
  
  &::after{
    content: "";
    display: block;
    box-sizing: border-box;
    width: 2.1875rem;
    height: 2.1875rem;
    border: #FFFFFF 0.125rem solid;
    border-radius: 1.125rem;
    background-color: #133F2C;
    transition: .3s;
  }
`


export const ToggleSwitch = ({onToggle}) => {
  return (
    <ToggleSwitchStl>
      <CheckBoxStl type={"checkbox"} id={"checkbox"}/>
      <SliderStl
        htmlFor={"checkbox"}
        onClick={onToggle}
      />
    </ToggleSwitchStl>
  )
}

//TODO: тута