import React  from "react";
import styled from "styled-components";


const ToggleSwitchStl = styled.input`
  position: relative;

  width: 6.4814vh;
  height: 3.2407vh;
  appearance: none;
  background-color: #FFFFFF;
  border-radius: 1.6666vh;
  outline: none;
  transition: 0.3s;
  cursor: pointer;

  :checked{
    //background-color: ;
  }

  ::before{
    position: absolute;

    content: "";
    width: 3.2407vh;
    height: 3.2407vh;
    border: #FFFFFF 0.1851vh solid;
    border-radius: 1.6666vh;
    background-color: #133F2C;
    transition: 0.3s;
  }

  :checked::before{
    transform: translateX(3.2407vh);
  }
`


export const ToggleSwitch = ({onToggle}) => {
  return (
    <ToggleSwitchStl type={"checkbox"} onClick={onToggle} />
  )
}