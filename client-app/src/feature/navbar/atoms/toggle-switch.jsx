import React  from "react";
import styled from "styled-components";

const ToggleSwitchStl = styled.div`
  position: relative;
  width: 4.375rem;
  height: 2.1875rem;

  //Mobile styles
  @media screen and (max-width: 576px){
    width: 2.25rem;
    height: 1.125rem;
  }
`

const CheckBoxStl = styled.input`
  display: none;
  
  &:checked + label {
    //background-color: ;
    &::after{
      margin-left: 2.1875rem;
      
      content: "";
      display: block;
      width: 2.1875rem;
      height: 2.1875rem;
      border: #FFFFFF 0.125rem solid;
      border-radius: 1.125rem;
      background-color: #133F2C;
      transition: .3s;

      //Mobile styles
      @media screen and (max-width: 576px){
        margin-left: 1.125rem;

        width: 1.125rem;
        height: 1.125rem;
        border: #FFFFFF 0.0643rem solid;
        border-radius: 0.5786rem;
      }
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

  //Mobile styles
  @media screen and (max-width: 576px){
    width: 2.25rem;
    height: 1.125rem;
    border-radius: 0.5786rem;
  }
  
  &::after{
    content: "";
    display: block;
    width: 2.1875rem;
    height: 2.1875rem;
    border: #FFFFFF 0.125rem solid;
    border-radius: 1.125rem;
    background-color: #133F2C;
    transition: .3s;

    //Mobile styles
    @media screen and (max-width: 576px){
      width: 1.125rem;
      height: 1.125rem;
      border: #FFFFFF 0.0643rem solid;
      border-radius: 0.5786rem;
    }
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