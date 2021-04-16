import React  from "react";
import styled from "styled-components";


const ToggleSwitchStl = styled.input`
  position: relative;

  width: 4.375rem;
  height: 2.1875rem;
  appearance: none;
  background-color: #FFFFFF;
  border-radius: 1.125rem;
  outline: none;
  transition: 0.3s;
  cursor: pointer;

  //Mobile styles
  @media screen and (max-width: 576px){
    width: 2.25rem;
    height: 1.125rem;
  }

  :checked{
    //background-color: ;
  }

  ::before{
    position: absolute;

    content: "";
    width: 2.1875rem;
    height: 2.1875rem;
    border: #FFFFFF 0.125rem solid;
    border-radius: 1.125rem;
    background-color: #133F2C;
    transition: 0.3s;

    //Mobile styles
    @media screen and (max-width: 576px){
      width: 1.125rem;
      height: 1.125rem;
      border: #FFFFFF 0.0643rem solid;
      border-radius: 0.5786rem;
    }
  }

  :checked::before{
    transform: translateX(2.1875rem);

    //Mobile styles
    @media screen and (max-width: 576px){
      transform: translateX(1.125rem);
    }
  }
`


export const ToggleSwitch = ({onToggle}) => {
  return (
    <ToggleSwitchStl type={"checkbox"} onClick={onToggle} />
  )
}