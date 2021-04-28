import React  from "react";
import styled from "styled-components";


const ToggleSwitchStl = styled.input`
  position: relative;

  width: 36px;
  height: 18px;
  appearance: none;
  background-color: #FFFFFF;
  border-radius: 18px;
  outline: none;
  transition: 0.3s;
  cursor: pointer;

  :checked{
    //background-color: ;
  }

  ::before{
    position: absolute;

    content: "";
    width: 18px;
    height: 18px;
    border: #FFFFFF 0.2px solid;
    border-radius: 18px;
    background-color: #133F2C;
    transition: 0.3s;
  }

  :checked::before{
    transform: translateX(18px);
  }
`


export const ToggleSwitch = ({onToggle}) => {
  return (
    <ToggleSwitchStl type={"checkbox"} onClick={onToggle} />
  )
}